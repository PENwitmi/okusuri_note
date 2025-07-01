#!/bin/bash
# Link checker script for OkusuriNote
# Created 2025-07-01 for emergency link investigation

echo "Starting link check process..."
date

# Initialize broken links file
> broken_links.txt

# Counter for progress
count=0
total=$(wc -l < all_links.txt)

# Check each link
while IFS= read -r link; do
    count=$((count + 1))
    echo "Checking ($count/$total): $link"
    
    # Skip external links (http/https)
    if [[ "$link" == http* ]]; then
        echo "  -> Skipping external link"
        continue
    fi
    
    # Skip anchor-only links (#)
    if [[ "$link" == \#* ]]; then
        echo "  -> Skipping anchor-only link"
        continue
    fi
    
    # Skip mailto links
    if [[ "$link" == mailto:* ]]; then
        echo "  -> Skipping mailto link"
        continue
    fi
    
    # Remove anchor part for file existence check
    file_path=$(echo "$link" | sed 's/#.*$//')
    
    # Try to resolve the path from docs directory context
    # Most HTML files are in docs/ subdirectories
    if [[ "$file_path" == ../* ]]; then
        # Path goes up from a subdirectory - check from docs/
        resolved_path="docs/$file_path"
        # Remove the ../ part
        resolved_path=$(echo "$resolved_path" | sed 's/docs\/\.\.\///g')
    elif [[ "$file_path" == ../../* ]]; then
        # Path goes up two levels - check from docs/
        resolved_path=$(echo "$file_path" | sed 's/\.\.\/\.\.\///g')
    else
        # Relative path within same directory
        resolved_path="docs/$file_path"
    fi
    
    # Check if file exists
    if [[ ! -f "$resolved_path" ]]; then
        echo "  -> BROKEN: $resolved_path not found"
        echo "$link -> $resolved_path" >> broken_links.txt
    else
        echo "  -> OK"
    fi
done < all_links.txt

echo "Link check completed!"
date