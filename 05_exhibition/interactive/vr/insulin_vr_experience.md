# VR注射体験（インスリン）- 技術設計書

## 🎮 体験概要
1922年1月11日、トロント総合病院でのインスリン世界初投与を医師視点で追体験する没入型VRコンテンツ。

## 🛠️ 技術仕様

### プラットフォーム
- **対応機器**: Oculus Quest 2 / Meta Quest Pro
- **開発環境**: Unity 2022.3 LTS + Oculus Integration SDK
- **レンダリング**: Universal Render Pipeline (URP)
- **フレームレート**: 72fps安定（Quest 2）/ 90fps（Quest Pro）

### 必要スペース
- **プレイエリア**: 2m × 2m（ルームスケール）
- **体験時間**: 約15分
- **推奨年齢**: 13歳以上（医療シーンの緊張感のため）

## 🏥 シーン構成

### 1. 病室環境（1922年再現）
```csharp
public class HospitalRoom1922 : MonoBehaviour
{
    // 環境設定
    private readonly RoomSettings settings = new()
    {
        Lighting = "ガス灯の暖色照明",
        Temperature = "寒い冬の朝（視覚的に息が白い）",
        Sounds = new[] { "時計の音", "廊下の足音", "咳き込み" },
        Props = new[] { "真鍮製の医療器具", "エナメルの洗面器", "木製ベッド" }
    };
    
    // インタラクティブオブジェクト
    public InteractableObject[] medicalTools;
    public PatientBed leonardBed;
    public WindowLight morningLight;
}
```

### 2. キャラクターシステム
```csharp
public class LeonardThompson : PatientCharacter
{
    // 患者の状態管理
    public PatientVitals vitals = new()
    {
        Weight = 27f, // kg
        BloodGlucose = 520f, // mg/dL（危険域）
        HeartRate = 45, // 弱い脈拍
        BreathingRate = 8, // 浅い呼吸
        Consciousness = ConsciousnessLevel.Drowsy
    };
    
    // アニメーション状態
    public void UpdateCondition(float insulinDose)
    {
        // 段階的な回復アニメーション
        StartCoroutine(RecoverySequence(insulinDose));
    }
}
```

## 🎭 インタラクション設計

### 1. 医師視点の手の動き
```csharp
public class DoctorHandsController : MonoBehaviour
{
    [Header("震えシミュレーション")]
    public float anxietyLevel = 0.7f; // 0-1の緊張度
    public float experienceModifier = 0.3f; // 経験による補正
    
    private void UpdateHandTremor()
    {
        // リアルな手の震えを再現
        float tremor = Mathf.PerlinNoise(Time.time * 10f, 0f) * anxietyLevel;
        tremor *= (1f - experienceModifier); // 経験で震えが減少
        
        // 両手に適用
        ApplyTremorToHand(leftHand, tremor);
        ApplyTremorToHand(rightHand, tremor * 0.8f); // 利き手は少し安定
    }
}
```

### 2. 注射シミュレーション
```csharp
public class InjectionMechanics : MonoBehaviour
{
    [Header("注射パラメータ")]
    public float needleInsertionDepth = 0.0f; // 0-1
    public float injectionPressure = 0.0f; // 0-1
    public float patientResistance = 0.8f; // 痩せた体への配慮
    
    public void PerformInjection()
    {
        // 段階的な注射プロセス
        // 1. 消毒
        // 2. 針の挿入角度調整（45度）
        // 3. ゆっくりとした薬液注入
        // 4. 針の抜去と圧迫
    }
}
```

## 🎨 視覚効果

### 1. 血糖値可視化システム
```hlsl
// Shader: BloodGlucoseVisualization.shader
float4 GlucoseColorGradient(float glucoseLevel)
{
    // 520 mg/dL (赤) → 120 mg/dL (緑) のグラデーション
    float normalized = (glucoseLevel - 120.0) / 400.0;
    
    float4 dangerColor = float4(1.0, 0.0, 0.0, 1.0); // 赤
    float4 warningColor = float4(1.0, 0.5, 0.0, 1.0); // オレンジ
    float4 normalColor = float4(0.0, 1.0, 0.0, 1.0); // 緑
    
    if (normalized > 0.5)
        return lerp(warningColor, dangerColor, (normalized - 0.5) * 2.0);
    else
        return lerp(normalColor, warningColor, normalized * 2.0);
}
```

### 2. インスリン粒子エフェクト
```csharp
public class InsulinParticleSystem : MonoBehaviour
{
    private ParticleSystem insulinParticles;
    
    void ConfigureInsulinEffect()
    {
        var main = insulinParticles.main;
        main.startLifetime = 3.0f;
        main.startSpeed = 0.5f;
        main.startSize = 0.01f;
        main.startColor = new Color(1.0f, 0.84f, 0.0f, 0.8f); // 金色
        
        // 血管に沿って流れる動き
        var velocityOverLifetime = insulinParticles.velocityOverLifetime;
        velocityOverLifetime.enabled = true;
        velocityOverLifetime.space = ParticleSystemSimulationSpace.World;
    }
}
```

## 🎵 音響設計

### 空間オーディオ設定
```csharp
public class SpatialAudioManager : MonoBehaviour
{
    [Header("環境音")]
    public AudioSource clockTicking; // 3D positioned
    public AudioSource patientBreathing; // 3D positioned
    public AudioSource motherSobbing; // 3D positioned
    
    [Header("医療音")]
    public AudioClip syringeFill;
    public AudioClip needleInsertion;
    public AudioClip injectionComplete;
    
    [Header("BGM制御")]
    public AudioMixer musicMixer;
    public AnimationCurve emotionalIntensityCurve;
}
```

## 📊 バイタルサイン表示

### リアルタイムモニター
```csharp
public class VitalSignsDisplay : MonoBehaviour
{
    public TMPro.TextMeshProUGUI glucoseReadout;
    public TMPro.TextMeshProUGUI heartRateReadout;
    public Image glucoseMeter;
    
    void UpdateDisplay(PatientVitals vitals)
    {
        // アニメーション付き数値変化
        DOTween.To(() => currentGlucose, x => currentGlucose = x, 
                   vitals.BloodGlucose, 10f)
                   .OnUpdate(() => {
                       glucoseReadout.text = $"{Mathf.RoundToInt(currentGlucose)} mg/dL";
                       glucoseMeter.fillAmount = Mathf.InverseLerp(600f, 70f, currentGlucose);
                   });
    }
}
```

## 🎮 コントローラー振動

### ハプティックフィードバック
```csharp
public class HapticManager : MonoBehaviour
{
    // 感情に連動した振動パターン
    public void PlayDoctorAnxiety(float intensity)
    {
        // 不規則な細かい振動
        OVRInput.SetControllerVibration(0.1f, intensity * 0.3f, OVRInput.Controller.RTouch);
        OVRInput.SetControllerVibration(0.1f, intensity * 0.3f, OVRInput.Controller.LTouch);
    }
    
    public void PlayHeartbeat(int bpm)
    {
        // 心拍に同期した振動
        float interval = 60f / bpm;
        InvokeRepeating(nameof(PulseVibration), 0, interval);
    }
    
    public void PlayInjectionMoment()
    {
        // 注射の瞬間の強い振動→徐々に弱まる
        StartCoroutine(InjectionVibrationSequence());
    }
}
```

## 🏆 実績システム

### トラッキング項目
```csharp
public class AchievementTracker : MonoBehaviour
{
    public bool PerfectInjection => tremorLevel < 0.1f && injectionTime < 5f;
    public bool HistoricalAccuracy => allHistoricalChoicesCorrect;
    public bool EmotionalJourney => watchedFullEnding;
    public bool MedicalScholar => viewedAllDocuments;
    
    // 実績解除通知
    void UnlockAchievement(string achievementId)
    {
        OVRPlatform.Achievements.Unlock(achievementId);
        ShowAchievementNotification(achievementId);
    }
}
```

## 📱 最適化

### パフォーマンス設定
```csharp
public class PerformanceOptimizer : MonoBehaviour
{
    [Header("Quest 2最適化")]
    public int targetFramerate = 72;
    public float renderScale = 1.2f; // 少し高めで鮮明に
    public bool useFoveatedRendering = true;
    
    void Start()
    {
        // Oculus Quest 2向け最適化
        OVRManager.fixedFoveatedRenderingLevel = 
            OVRManager.FixedFoveatedRenderingLevel.Medium;
        
        UnityEngine.XR.XRSettings.eyeTextureResolutionScale = renderScale;
        Application.targetFrameRate = targetFramerate;
        
        // 動的解像度
        OVRManager.useDynamicResolution = true;
        OVRManager.minDynamicResolutionScale = 0.7f;
    }
}
```

## 🎬 演出タイミング

### シーケンス制御
```csharp
public class DirectionSequencer : MonoBehaviour
{
    [System.Serializable]
    public class DirectionEvent
    {
        public float timestamp;
        public string eventName;
        public UnityEvent onTrigger;
    }
    
    public DirectionEvent[] timeline = new[]
    {
        new DirectionEvent { timestamp = 0f, eventName = "FadeIn" },
        new DirectionEvent { timestamp = 15f, eventName = "ShowLeonard" },
        new DirectionEvent { timestamp = 45f, eventName = "MotherPrayer" },
        new DirectionEvent { timestamp = 120f, eventName = "PrepareInjection" },
        new DirectionEvent { timestamp = 180f, eventName = "PerformInjection" },
        new DirectionEvent { timestamp = 210f, eventName = "GlucoseDropStart" },
        new DirectionEvent { timestamp = 300f, eventName = "LeonardAwakens" },
        new DirectionEvent { timestamp = 330f, eventName = "HungryLine" },
        new DirectionEvent { timestamp = 360f, eventName = "EmotionalClimax" }
    };
}
```

## 🔧 セットアップ手順

1. **Unity プロジェクト設定**
   - Unity 2022.3 LTS
   - Oculus Integration v50+
   - Universal Render Pipeline

2. **必要なパッケージ**
   - TextMeshPro
   - DOTween Pro
   - Oculus Spatializer

3. **ビルド設定**
   - Android Build (Quest)
   - IL2CPP Backend
   - .NET Standard 2.1

## 📝 今後の拡張予定

- **多言語対応**: 日本語、英語、中国語
- **教育モード**: 医学生向け詳細解説
- **マルチプレイヤー**: 医療チーム体験
- **Mixed Reality**: パススルーモードでの体験

---

この設計により、プレイヤーは1922年の緊張感と感動を追体験し、インスリンという「奇跡の薬」の誕生の瞬間を深く記憶に刻むことができます。