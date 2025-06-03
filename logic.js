

  // --- Gemini API Configuration ---
 
   // --- DOM Elements ---
   require('dotenv').config();
   const bodyElement = document.body;
   const languageToggleButton = document.getElementById('language-toggle-btn');
   const langBtnText = document.getElementById('lang-btn-text');
   const userAccountButton = document.getElementById('user-account-btn');

   const mainTitleElement = document.getElementById('main-title');
   const mainSubtitleElement = document.getElementById('main-subtitle');
   const footerTextElement = document.getElementById('footer-text');


   const tabButtons = document.querySelectorAll('.tab-button');
   const categoryTitleElement = document.getElementById('category-title');
   const categoryDescriptionElement = document.getElementById('category-description');
   const promptTextElement = document.getElementById('prompt-text');
   const generatePromptBtn = document.getElementById('generate-prompt-btn');
   const generateBtnText = document.getElementById('generate-btn-text');
   const clearPromptBtn = document.getElementById('clear-prompt-btn');
   const clearBtnText = document.getElementById('clear-btn-text');
   const currentYearElement = document.getElementById('current-year');
   const loaderElement = document.getElementById('loader');
   
   const photographicImageSubcategoriesContainer = document.getElementById('photographic-image-subcategories-container');
   let photographicImageSubCategoryButtons = document.querySelectorAll('#photographic-image-subcategories-container .sub-category-button');
   const photoAdvancedFiltersContainer = document.getElementById('photo-advanced-filters-container');
   let photoRealismOptionButtons = document.querySelectorAll('#photo-realism-options .filter-option-button');
   const photoTimeOfDaySelect = document.getElementById('photo-time-of-day-select');
   const photoSeasonFilterContainer = document.getElementById('photo-season-filter-container'); 
   const photoSeasonSelect = document.getElementById('photo-season-select');
   let photoPeopleOptionButtons = document.querySelectorAll('#photo-people-options .filter-option-button');
   const photoAudienceFilterContainer = document.getElementById('photo-audience-filter-container');
   let photoAudienceOptionButtons = document.querySelectorAll('#photo-audience-options .filter-option-button');
   const photoCameraAngleSelect = document.getElementById('photo-camera-angle-select');
   const photoLightingSelect = document.getElementById('photo-lighting-select');
   const photoColorsSelect = document.getElementById('photo-colors-select');
   const photoStyleSelect = document.getElementById('photo-style-select');


   const adImageSubcategoriesContainer = document.getElementById('ad-image-subcategories-container');
   let adImageSubCategoryButtons = document.querySelectorAll('#ad-image-subcategories-container .sub-category-button');
   const productNameInput = document.getElementById('product-name-input');
   const campaignNameInput = document.getElementById('campaign-name-input');

   const shortMessageSubcategoriesContainer = document.getElementById('short-message-subcategories-container');
   let shortMessageSubCategoryButtons = document.querySelectorAll('#short-message-subcategories-container .sub-category-button');
   const shortMessageLengthOptionsContainer = document.getElementById('short-message-length-options');
   let shortMessageLengthOptionButtons = document.querySelectorAll('#short-message-length-options .length-option-button');
   const shortMessageDialectSelect = document.getElementById('short-message-dialect-select');
   const shortMessageTopicInput = document.getElementById('short-message-topic-input');
   const shortMessageTopicError = document.getElementById('short-message-topic-error');

   const articleSubcategoriesContainer = document.getElementById('article-subcategories-container');
   let articleSubCategoryButtons = document.querySelectorAll('#article-subcategories-container .sub-category-button');
   const articleLengthOptionsContainer = document.getElementById('article-length-options');
   let articleLengthOptionButtons = document.querySelectorAll('#article-length-options .length-option-button');
   const articleTopicInput = document.getElementById('article-topic-input');
   const articleTopicError = document.getElementById('article-topic-error');


   const videoSubcategoriesContainer = document.getElementById('video-subcategories-container');
   let videoSubCategoryButtons = document.querySelectorAll('#video-subcategories-container .sub-category-button'); 

   // New section containers
   const exploreContentContainer = document.getElementById('explore-content-container');
   const communityContentContainer = document.getElementById('community-content-container');


   // --- State ---
   let currentLanguage = 'ar'; // 'ar' or 'en'
   let currentCategory = 'art'; 
   let currentCategoryArabic = 'فن'; 
   let currentCategoryEnglish = 'Art';
   
   let currentPhotographicImageSubCategory = 'cars'; 
   let currentPhotographicImageSubCategoryArabic = 'سيارات'; 
   let currentPhotographicImageSubCategoryEnglish = 'Cars';
   // Photographic Image Filter States
   let currentPhotoRealism = 'realistic';
   let currentPhotoTimeOfDay = 'any_time';
   let currentPhotoSeason = 'any_season';
   let currentPhotoPeople = 'no_people';
   let currentPhotoAudience = 'no_audience';
   let currentPhotoCameraAngle = 'any_angle';
   let currentPhotoLighting = 'any_lighting';
   let currentPhotoColors = 'any_colors';
   let currentPhotoStyle = 'any_style';


   let currentAdImageSubCategory = 'products';
   let currentAdImageSubCategoryArabic = 'منتجات';
   let currentAdImageSubCategoryEnglish = 'Products';


   let currentShortMessageSubCategory = 'dawah_sm'; 
   let currentShortMessageSubCategoryArabic = 'دعوية';
   let currentShortMessageSubCategoryEnglish = 'Dawah';
   let currentShortMessageLength = 'short'; 
   let currentShortMessageLengthArabic = 'قصيرة';
   let currentShortMessageLengthEnglish = 'Short';
   let currentShortMessageDialect = 'standard_arabic'; 
   let currentShortMessageDialectArabic = 'العربية الفصحى';
   let currentShortMessageDialectEnglish = 'Standard Arabic';


   let currentArticleSubCategory = 'scientific_article';
   let currentArticleSubCategoryArabic = 'علمي';
   let currentArticleSubCategoryEnglish = 'Scientific';
   let currentArticleLength = 'brief'; 
   let currentArticleLengthArabic = 'موجز';
   let currentArticleLengthEnglish = 'Brief';

   
   const shortMessagePlaceholders = {
       dawah_sm: { ar: "موضوع الدعوة؟ (مثال: أهمية الصلاة)", en: "Dawah topic? (e.g., Importance of prayer)"},
       religious_sm: { ar: "موضوع ديني؟ (مثال: فضل الاستغفار)", en: "Religious topic? (e.g., Virtue of seeking forgiveness)"},
       love_sm: { ar: "لمن/ماذا توجه رسالة الحب؟ (مثال: لزوجتي الغالية)", en: "To whom/what is the love message? (e.g., To my dear wife)"},
       friendship_sm: { ar: "عن ماذا تتحدث رسالة الصداقة؟ (مثال: دعم الأصدقاء)", en: "What is the friendship message about? (e.g., Friends' support)"},
       congratulations_sm: { ar: "مناسبة التهنئة؟ (مثال: تخرج جامعي)", en: "Occasion for congratulations? (e.g., University graduation)"},
       thanks_sm: { ar: "موضوع الشكر؟ (مثال: مساعدة في مشروع)", en: "Reason for thanks? (e.g., Help with a project)"},
       apology_sm: { ar: "سبب الاعتذار؟ (مثال: سوء فهم بسيط)", en: "Reason for apology? (e.g., Simple misunderstanding)"},
       condolences_sm: { ar: "لمن التعزية؟ (مثال: لوفاة قريب)", en: "To whom are the condolences? (e.g., For a deceased relative)"},
       formal_sm: { ar: "موضوع الرسالة الرسمية؟ (مثال: طلب اجتماع)", en: "Subject of the formal message? (e.g., Meeting request)"},
       morning_evening_sm: { ar: "نوع التحية؟ (مثال: صباح الخير للجميع)", en: "Type of greeting? (e.g., Good morning everyone)"},
       motivational_sm: { ar: "فكرة تحفيزية؟ (مثال: تحقيق الأهداف)", en: "Motivational idea? (e.g., Achieving goals)"},
       humorous_sm: { ar: "موقف أو فكرة فكاهية؟ (مثال: نكتة قصيرة)", en: "Humorous situation or idea? (e.g., Short joke)"},
       get_well_sm: { ar: "لمن تتمنى الشفاء؟ (مثال: لصديق مريض)", en: "To whom do you wish a speedy recovery? (e.g., To a sick friend)"},
       birthday_sm: { ar: "لمن تهنئة عيد الميلاد؟ (مثال: لأخي العزيز)", en: "For whom is the birthday greeting? (e.g., To my dear brother)"}
   };

   const articlePlaceholders = {
       scientific_article: {ar: "موضوع المقال العلمي؟ (مثال: الثقوب السوداء)", en: "Scientific article topic? (e.g., Black holes)"},
       tech_article: {ar: "موضوع المقال التقني؟ (مثال: مستقبل الويب 3.0)", en: "Tech article topic? (e.g., Future of Web 3.0)"},
       history_article: {ar: "موضوع المقال التاريخي؟ (مثال: الحضارة المصرية القديمة)", en: "Historical article topic? (e.g., Ancient Egyptian civilization)"},
       literary_article: {ar: "موضوع المقال الأدبي؟ (مثال: تحليل قصيدة)", en: "Literary article topic? (e.g., Poem analysis)"},
       social_article: {ar: "موضوع المقال الاجتماعي؟ (مثال: تأثير السوشيال ميديا)", en: "Social article topic? (e.g., Impact of social media)"},
       economic_article: {ar: "موضوع المقال الاقتصادي؟ (مثال: العملات الرقمية)", en: "Economic article topic? (e.g., Cryptocurrencies)"},
       sports_article: {ar: "موضوع المقال الرياضي؟ (مثال: أهمية الرياضة للصحة)", en: "Sports article topic? (e.g., Importance of sports for health)"},
       travel_article: {ar: "وجهة السفر؟ (مثال: استكشاف جزر المالديف)", en: "Travel destination? (e.g., Exploring the Maldives)"},
       health_article: {ar: "موضوع الصحة/الغذاء؟ (مثال: فوائد النظام النباتي)", en: "Health/Food topic? (e.g., Benefits of a vegan diet)"},
       opinion_article: {ar: "موضوع مقال الرأي؟ (مثال: التعليم عن بعد)", en: "Opinion article topic? (e.g., Distance learning)"}
   };
   
   const adImagePlaceholders = {
       products: { 
           product: { ar: "مثال: ساعة ذكية X1", en: "e.g., Smartwatch X1" }, 
           campaign: { ar: "مثال: تكنولوجيا المستقبل بين يديك", en: "e.g., Future tech in your hands" } 
       },
       services: { 
           product: { ar: "مثال: استشارات مالية متخصصة", en: "e.g., Expert financial consulting" }, 
           campaign: { ar: "مثال: خطط لمستقبل آمن", en: "e.g., Plan for a secure future" } 
       },
       food_beverage_ad: { 
           product: { ar: "مثال: بيتزا نابولي الأصلية", en: "e.g., Original Napoli Pizza" }, 
           campaign: { ar: "مثال: طعم إيطاليا الأصيل", en: "e.g., Authentic taste of Italy" } 
       },
       travel_tourism_ad: { 
           product: { ar: "مثال: رحلة إلى جزر الأحلام", en: "e.g., Trip to Dream Islands" }, 
           campaign: { ar: "مثال: استرخاء لا يُنسى", en: "e.g., Unforgettable relaxation" } 
       },
       real_estate_ad: { 
           product: { ar: "مثال: شقة فاخرة بإطلالة خلابة", en: "e.g., Luxury apartment, stunning view" }, 
           campaign: { ar: "مثال: منزل أحلامك ينتظرك", en: "e.g., Your dream home awaits" } 
       },
       fashion_beauty_ad: { 
           product: { ar: "مثال: مجموعة أزياء الربيع", en: "e.g., Spring Fashion Collection" }, 
           campaign: { ar: "مثال: تألقي بإطلالة ساحرة", en: "e.g., Shine with a charming look" } 
       },
       technology_gadgets_ad: { 
           product: { ar: "مثال: هاتف ذكي فائق السرعة", en: "e.g., Ultra-fast Smartphone" }, 
           campaign: { ar: "مثال: ابتكار يتجاوز الخيال", en: "e.g., Innovation beyond imagination" } 
       },
       automotive_ad: { 
           product: { ar: "مثال: سيارة رياضية متعددة الاستخدامات", en: "e.g., SUV Sports Car" }, 
           campaign: { ar: "مثال: انطلق نحو المغامرة", en: "e.g., Drive towards adventure" } 
       },
       health_wellness_ad: { 
           product: { ar: "مثال: مكمل غذائي لتعزيز المناعة", en: "e.g., Immune-boosting supplement" }, 
           campaign: { ar: "مثال: صحتك هي ثروتك", en: "e.g., Your health is your wealth" } 
       },
       education_training_ad: { 
           product: { ar: "مثال: دورة تطوير الذات", en: "e.g., Self-development course" }, 
           campaign: { ar: "مثال: استثمر في مستقبلك", en: "e.g., Invest in your future" } 
       },
       events_ad: { 
           product: { ar: "مثال: مهرجان الفنون الدولي", en: "e.g., International Arts Festival" }, 
           campaign: { ar: "مثال: تجربة لا تُنسى", en: "e.g., An unforgettable experience" } 
       }
   };


   const forbiddenKeywords = ["سيء", "كراهية", "عنف", "شتيمة", "بذيء", "قتل", "إرهاب"]; 


   let currentVideoSubCategory = 'action_video'; 
   let currentVideoSubCategoryArabic = 'أكشن'; 
   let currentVideoSubCategoryEnglish = 'Action';


   // --- Gemini API Configuration ---

   //const GEMINI_API_KEY = "npm install -g vercel "; 
   //const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
   // --- UI Text Translations ---
   // js/config.js

   async function generateContent(prompt) {
    try {
      const response = await fetch('/api/gemini-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
  
      // التحقق من حالة الرد أولاً
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }
  
      // محاولة تحليل JSON فقط إذا كان الرد ناجحًا
      return await response.json();
      
    } catch (error) {
      console.error("Request Failed:", error);
      return { 
        error: "Failed to process request",
        details: error.message
      };
    }
  }  
  
  // Usage example
  generateContent("Explain quantum computing").then(data => {
    console.log("AI Response:", data);
  });
  
   const uiStrings = {
       // Main Titles
       mainTitle: { ar: "🚀 مولد الأفكار الإبداعية 💡", en: "🚀 Creative Idea Generator 💡" },
       mainSubtitle: { ar: "أطلق العنان لقوة الذكاء الاصطناعي واكتشف أفكارًا جديدة وملهمة!", en: "Unleash the power of AI and discover new, inspiring ideas!" },
       // Footer
       footerText: { ar: "&copy; {YEAR} مولد الأفكار الإبداعية. جميع الحقوق محفوظة.", en: "&copy; {YEAR} Creative Idea Generator. All rights reserved." },
       // Buttons
       generateBtnText: { ar: "توليد فكرة جديدة", en: "Generate New Idea" },
       clearBtnText: { ar: "مسح", en: "Clear" },
       // Category Descriptions (Default)
       defaultCatDesc: { ar: "اضغط على الزر أدناه لتوليد فكرة جديدة بواسطة الذكاء الاصطناعي في هذا القسم.", en: "Click the button below to generate a new AI-powered idea in this section." },
       // Specific Category Descriptions
       photoCatDesc: { ar: "اختر نوع الصورة الفوتوغرافية والفلاتر، ثم اضغط لتوليد فكرة.", en: "Select the photo type and filters, then click to generate an idea." },
       adImageCatDesc: { ar: "ادخل اسم المنتج والحملة (اختياري)، ثم اضغط لتوليد فكرة صورة إعلانية في مجال \"{SUB_CAT_AR}\".", en: "Enter product name and campaign (optional), then click to generate an ad image idea for \"{SUB_CAT_EN}\"." },
       shortMessageCatDesc: { ar: "اختر نوع الرسالة، طولها، لهجتها، وأضف موضوعًا (اختياري)، ثم اضغط لتوليد رسالة.", en: "Select message type, length, dialect, add a topic (optional), then click to generate a message." },
       articleCatDesc: { ar: "اختر نوع المقال، طوله، وأضف موضوعًا (اختياري)، ثم اضغط لتوليد مقال.", en: "Select article type, length, add a topic (optional), then click to generate an article." },
       videoCatDesc: { ar: "اضغط على الزر أدناه لتوليد فكرة فيديو من نوع \"{SUB_CAT_AR}\".", en: "Click the button below to generate a video idea for \"{SUB_CAT_EN}\"." },
       // Labels for sub-category sections
       photoTypeLabel: { ar: "اختر نوع الصورة الفوتوغرافية:", en: "Select photographic image type:"},
       adImageTypeLabel: { ar: "اختر مجال الإعلان:", en: "Select advertising field:"},
       messageTypeLabel: { ar: "اختر نوع الرسالة:", en: "Select message type:"},
       articleTypeLabel: { ar: "اختر نوع المقال:", en: "Select article type:"},
       videoTypeLabel: { ar: "اختر نوع الفيديو:", en: "Select video type:"},
       // Labels for input fields
       productNameLabel: { ar: "اسم المنتج/الخدمة:", en: "Product/Service Name:"},
       campaignNameLabel: { ar: "اسم الحملة الإعلانية (اختياري):", en: "Ad Campaign Name (optional):"},
       messageLengthLabel: { ar: "اختر طول الرسالة:", en: "Select message length:"},
       messageDialectLabel: { ar: "اختر اللهجة (اختياري):", en: "Select Dialect (optional):"},
       messageTopicLabel: { ar: "أضف موضوعًا للرسالة (اختياري - 5 كلمات كحد أقصى):", en: "Add a topic for the message (optional - max 5 words):"},
       articleLengthLabel: { ar: "اختر طول المقال:", en: "Select article length:"},
       articleTopicLabel: { ar: "أضف موضوعًا للمقال (اختياري - 10 كلمات كحد أقصى):", en: "Add a topic for the article (optional - max 10 words):"},
       // Photo filter labels
       photoRealismLabel: { ar: "الواقعية:", en: "Realism:"},
       photoTimeLabel: { ar: "التوقيت:", en: "Time of Day:"},
       photoSeasonLabel: { ar: "الموسم (للطبيعة/السفر):", en: "Season (for Nature/Travel):"},
       photoPeopleLabel: { ar: "الأشخاص:", en: "People:"},
       photoAudienceLabel: { ar: "الجمهور:", en: "Audience:"},
       photoAngleLabel: { ar: "زاوية الكاميرا:", en: "Camera Angle:"},
       photoLightingLabel: { ar: "الإضاءة:", en: "Lighting:"},
       photoColorsLabel: { ar: "الألوان:", en: "Colors:"},
       photoStyleLabel: { ar: "نمط/مزاج الصورة:", en: "Style/Mood:"},
       // Placeholder prompt text
       initialPromptText: { ar: "اضغط على 'توليد فكرة' للبدء!", en: "Click 'Generate Idea' to start!"},
       clearedPromptText: { ar: "تم مسح الفكرة. اضغط على 'توليد فكرة' للحصول على فكرة جديدة!", en: "Idea cleared. Click 'Generate Idea' for a new one!"},
       // Error messages
       topicLengthErrorShort: { ar: "الرجاء إدخال 5 كلمات كحد أقصى لموضوع الرسالة.", en: "Please enter a maximum of 5 words for the message topic."},
       topicLengthErrorArticle: { ar: "الرجاء إدخال 10 كلمات كحد أقصى لموضوع المقال.", en: "Please enter a maximum of 10 words for the article topic."},
       forbiddenKeywordError: { ar: "الرجاء إدخال موضوع مناسب وتجنب الكلمات غير اللائقة.", en: "Please enter an appropriate topic and avoid inappropriate words."},
       // New Tabs Content
       exploreTitle: { ar: "استكشف إبداعات الآخرين", en: "Explore Others' Creations"},
       exploreDesc: { ar: "هنا ستجد معرضًا للأعمال الفنية والنصوص التي أنشأها مستخدمون آخرون. (قيد التطوير)", en: "Here you will find a gallery of artworks and texts created by other users. (Under Development)"},
       communityTitle: { ar: "مجتمع المبدعين", en: "Creators' Community"},
       communityDesc: { ar: "شارك بمنشوراتك وتفاعل مع أعضاء المجتمع. (قيد التطوير)", en: "Share your posts and interact with community members. (Under Development)"},
       userAccountModalTitle: { ar: "حساب المستخدم", en: "User Account"},
       userAccountModalDesc: { ar: "ميزة تسجيل الدخول وإنشاء الحسابات قيد التطوير حاليًا. ستتمكن قريبًا من حفظ أعمالك ومشاركتها!", en: "Login and account creation features are currently under development. Soon you'll be able to save and share your work!"}
   };


   // --- Functions ---
   async function generateAIPrompt(categoryKey, categoryName, subCategoryName = null, userInputs = {}) {
       promptTextElement.textContent = '';
       promptTextElement.classList.add('hidden');
       loaderElement.classList.remove('hidden');
       generatePromptBtn.disabled = true;
       clearPromptBtn.disabled = true;

       let instructionPrompt = "";
       let maxTokens = 150; 
       let temperature = 0.7; 

       if (categoryKey === "programming") {
           instructionPrompt = `قم بتوليد فكرة مبتكرة لتطبيق أو نظام برمجي. يجب أن تتضمن الفكرة اقتراحًا للغة أو لغات برمجة مناسبة لتنفيذها. يجب أن يكون الناتج هو الفكرة مباشرة، بدون أي مقدمات أو شرح إضافي، وباللغة العربية.
مثال: 'تطبيق لإدارة المهام الشخصية بتقنية الواقع المعزز باستخدام Swift و ARKit.'
مثال آخر: 'نظام لتحليل بيانات سوق الأسهم والتنبؤ بالاتجاهات باستخدام Python ومكتبات مثل Pandas و TensorFlow.'`;
       } else if (categoryKey === "random") {
           instructionPrompt = `قم بتوليد فكرة عشوائية فريدة ومبتكرة. يمكن أن تكون الفكرة لمشروع إبداعي، تطبيق، نظام، أو أي شيء جديد. إذا كانت الفكرة تتعلق بالبرمجيات، يمكنك اقتراح لغة برمجة مناسبة. يجب أن يكون الناتج هو الفكرة مباشرة، بدون أي مقدمات أو شرح إضافي، وباللغة العربية.
مثال: 'منصة تعليمية تفاعلية للأطفال لتعلم مفاهيم الفيزياء الأساسية من خلال الألعاب ثلاثية الأبعاد المطورة بـ Unity (C#).'
مثال آخر: 'تركيب فني ضوئي يتفاعل مع حركة المارة في الأماكن العامة، يتم التحكم فيه بواسطة Arduino.'`;
            temperature = 0.9; 
       } else if (categoryKey === "images" && subCategoryName) { 
           let filtersDescription = "\nالمواصفات الإضافية المطلوبة:";
           if (userInputs.realism && userInputs.realism !== 'realistic') filtersDescription += `\n- الواقعية: ${userInputs.realism_ar}.`;
           if (userInputs.timeOfDay && userInputs.timeOfDay !== 'any_time') filtersDescription += `\n- التوقيت: ${userInputs.timeOfDay_ar}.`;
           if (userInputs.people && userInputs.people !== 'no_people') {
               filtersDescription += `\n- الأشخاص: ${userInputs.people_ar}.`;
               if (userInputs.audience && userInputs.audience !== 'no_audience') filtersDescription += ` (مع جمهور: ${userInputs.audience_ar}).`;
           }
           if ((subCategoryName === 'nature' || subCategoryName === 'travel' || subCategoryName === 'cities') && userInputs.season && userInputs.season !== 'any_season') {
                filtersDescription += `\n- الموسم: ${userInputs.season_ar}.`;
           }
           if (userInputs.cameraAngle && userInputs.cameraAngle !== 'any_angle') filtersDescription += `\n- زاوية الكاميرا: ${userInputs.cameraAngle_ar}.`;
           if (userInputs.lighting && userInputs.lighting !== 'any_lighting') filtersDescription += `\n- الإضاءة: ${userInputs.lighting_ar}.`;
           if (userInputs.colors && userInputs.colors !== 'any_colors') filtersDescription += `\n- الألوان: ${userInputs.colors_ar}.`;
           if (userInputs.styleMood && userInputs.styleMood !== 'any_style') filtersDescription += `\n- النمط/المزاج: ${userInputs.styleMood_ar}.`;
           
           if (filtersDescription === "\nالمواصفات الإضافية المطلوبة:") filtersDescription = ""; 

           instructionPrompt = `قم بصياغة طلب (prompt) إبداعي ومفصل لنموذج ذكاء اصطناعي متخصص في توليد الصور، لإنشاء صورة فوتوغرافية أو فنية ضمن تصنيف "${subCategoryName}".${filtersDescription} يجب أن يكون الطلب باللغة العربية، ويهدف لإنتاج صورة عالية الجودة وذات تفاصيل غنية. يجب أن يكون الناتج هو الطلب (prompt) مباشرة بدون أي مقدمات.
مثال لطلب جيد لتصنيف "طبيعة" مع فلاتر (فائق الواقعية، ليل، بدون أشخاص، شتاء، زاوية واسعة، إضاءة درامية، ألوان باهتة، غامض): "مشهد ليلي فائق الواقعية لغابة شتوية كثيفة مغطاة بالثلوج تحت ضوء القمر الخافت، الأشجار عارية والصمت يعم المكان، مع إضاءة درامية تلقي ظلالاً طويلة، وألوان باهتة تزيد من غموض المشهد، снято بزاوية واسعة."`;
       } else if (categoryKey === "ad_images" && subCategoryName) {
           let productInfo = userInputs.productName ? ` لمنتج/خدمة باسم "${userInputs.productName}"` : "";
           let campaignInfo = userInputs.campaignName ? ` ضمن حملة إعلانية بعنوان "${userInputs.campaignName}"` : "";
           
           instructionPrompt = `قم بصياغة طلب (prompt) إبداعي ومقنع لنموذج ذكاء اصطناعي متخصص في توليد صور إعلانية، لإنشاء صورة إعلانية جذابة ضمن مجال "${subCategoryName}"${productInfo}${campaignInfo}. يجب أن يركز الطلب على إبراز المنتج أو الخدمة بشكل إيجابي ومغري، مع مراعاة الجوانب البصرية التي تجذب الانتباه وتحفز على الاهتمام. يجب أن يكون الطلب باللغة العربية، والناتج هو الطلب (prompt) مباشرة بدون أي مقدمات.
مثال لطلب جيد لمجال "طعام ومشروبات" لمنتج "عصير البرتقال المنعش": "صورة إعلانية لعصير البرتقال المنعش في كوب زجاجي أنيق مع قطرات الندى، تظهر بجانبه شرائح برتقال طازجة، على خلفية مشرقة توحي بالصحة والانتعاش."
مثال لطلب جيد لمجال "سفر وسياحة" لحملة "اكتشف كنوز الصحراء": "صورة إعلانية لرحلة سفاري في الصحراء عند غروب الشمس، تظهر فيها قافلة جمال تسير عبر الكثبان الرملية الذهبية، مع سماء ملونة بألوان دافئة تعكس جمال وسحر المكان، وشعار حملة 'اكتشف كنوز الصحراء'."`;
       } else if (categoryKey === "short_messages" && subCategoryName) {
           let lengthConstraint = "";
           let lengthDescription = "";
           if (userInputs.messageLength === "short") {
               lengthConstraint = "لا تتجاوز 20 كلمة";
               lengthDescription = "قصيرة (حوالي 10-20 كلمة)";
               maxTokens = 50; 
           } else if (userInputs.messageLength === "medium") {
               lengthConstraint = "تتراوح بين 25 و 40 كلمة";
               lengthDescription = "متوسطة (حوالي 25-40 كلمة)";
               maxTokens = 80;
           } else if (userInputs.messageLength === "long") {
               lengthConstraint = "تتراوح بين 45 و 60 كلمة";
               lengthDescription = "طويلة (حوالي 45-60 كلمة)";
               maxTokens = 120;
           }
           const dialectText = userInputs.messageDialect === "standard_arabic" ? "باللغة العربية الفصحى" : `باللهجة ${userInputs.messageDialectAr}`;
           temperature = 0.9; 

           let topicInstruction = userInputs.topic ? `حول موضوع "${userInputs.topic}"` : "في موضوع عشوائي ومتنوع تمامًا وجديد في كل مرة";

           instructionPrompt = `قم بتوليد رسالة ${lengthDescription} ${dialectText} ${topicInstruction}، ولكن يجب أن تكون مناسبة للتصنيف العام "${subCategoryName}". يجب أن تكون الرسالة مباشرة، واقعية، غنية بالمعنى ومختصرة نسبيًا لطولها المحدد (${lengthConstraint}). يجب أن يكون الناتج هو الرسالة مباشرة بدون أي مقدمات أو شرح إضافي.
مثال لرسالة "حب وغرام" قصيرة باللهجة المصرية (موضوع: عيونك): "عيونك بحر وأنا غرقان فيه. بحبك."
مثال لرسالة "تهنئة بالنجاح" متوسطة باللهجة السعودية (موضوع: ترقية عمل): "ألف مبروك على الترقية الجديدة يا كفو! تستاهل كل خير ومنها للأعلى بإذن الله."
مثال لرسالة "تحفيزية" طويلة بالفصحى (موضوع: تحدي الصعاب): "تذكر دائمًا أن كل عقبة هي فرصة للتعلم والنمو. لا تدع اليأس يتسلل إلى قلبك، فالنجاح ينتظر المثابرين الذين يؤمنون بقدراتهم ويواصلون السعي نحو أحلامهم بثقة وإصرار."`;
       } else if (categoryKey === "articles" && subCategoryName) {
           let lengthDescriptionArt = "";
           if (userInputs.messageLength === "brief") { 
               lengthDescriptionArt = "موجز (حوالي 1-2 فقرة، بحدود 100-200 كلمة)";
               maxTokens = 250; 
           } else if (userInputs.messageLength === "medium") {
               lengthDescriptionArt = "متوسط (حوالي 3-5 فقرات، بحدود 300-500 كلمة)";
               maxTokens = 600; 
           } else if (userInputs.messageLength === "detailed") {
               lengthDescriptionArt = "مفصل (أكثر من 5 فقرات، بحدود 700-1000 كلمة، مع مقدمة وجسم وخاتمة واضحة)";
               maxTokens = 1200; 
           }
           temperature = 0.8;
           let topicInstructionArt = userInputs.topic ? `حول موضوع "${userInputs.topic}"` : "في موضوع عشوائي ومثير للاهتمام";

           instructionPrompt = `قم بكتابة مقال ${lengthDescriptionArt} باللغة العربية الفصحى ${topicInstructionArt}، ضمن التصنيف العام "${subCategoryName}". يجب أن يكون المقال جيد البناء، غني بالمعلومات (إذا كان الموضوع يتطلب ذلك)، ومشوق للقارئ. يجب أن يكون الناتج هو المقال مباشرة بدون أي مقدمات أو شرح إضافي. تجنب أي محتوى غير لائق أو مسيء.
مثال لمقال "علمي" موجز (موضوع: أهمية الماء للحياة): "الماء هو سر الحياة، فهو يشكل النسبة الأكبر من أجسام الكائنات الحية ويدخل في جميع العمليات الحيوية. بدون الماء، تستحيل الحياة على كوكبنا، لذا الحفاظ عليه مسؤوليتنا جميعًا."`;
       }
        else { // Default for "art", "video", "explore", "community"
           instructionPrompt = `قم بصياغة طلب (prompt) إبداعي وملهم لنموذج ذكاء اصطناعي آخر، متخصص في توليد المحتوى للقسم: "${categoryName}".`;
           if (categoryKey === "video" && subCategoryName) { 
               instructionPrompt = `قم بصياغة طلب (prompt) إبداعي وملهم لنموذج ذكاء اصطناعي آخر، متخصص في توليد أفكار فيديو للقسم: "${categoryName}" من نوع "${subCategoryName}". يجب أن يكون الطلب (prompt) الناتج واضحًا ومفصلاً، ويصف مشهدًا أو مفهومًا بصريًا يمكن ترجمته إلى فيديو.
مثال لطلب جيد لفيديو "وثائقي عن الحياة البرية": "مشهد فيديو وثائقي يصور نسرًا يحلق فوق قمم جبال مغطاة بالثلوج، ثم ينقض بسرعة لاصطياد فريسة، مع لقطات بطيئة تبرز قوة ودقة النسر."
مثال لطلب جيد لفيديو "موسيقى بوب": "فكرة فيديو كليب لأغنية بوب راقصة، يتضمن مشاهد ملونة وحيوية في مواقع حضرية مختلفة، مع تصميم رقصات مبتكرة وأزياء عصرية."`;
           } else { 
                instructionPrompt += ` يجب أن يكون الطلب (prompt) الناتج:
               1.  واضحًا ومباشرًا، وقابلاً للتنفيذ بواسطة نموذج ذكاء اصطناعي آخر.
               2.  يهدف إلى إنتاج عمل إبداعي وممتاز عند استخدامه.
               3.  مكتوبًا باللغة العربية.
               4.  يمكن أن يتجاوز 20 كلمة إذا كان ذلك يخدم وضوح الطلب وجودته.
               مثال لطلب جيد لقسم "فن": "أنشئ لوحة فنية تصور مدينة مستقبلية تطفو في السماء، مع تفاصيل معمارية تجمع بين الطراز العربي القديم والتصميمات الفضائية المبتكرة، وأضواء نيون تعكس على أسطح معدنية لامعة."`;
           }
       }

       const payload = {
        prompt: instructionPrompt,  // نرسل الـ prompt فقط
        maxTokens: maxTokens,      // معاملات الجيل
        temperature: temperature
        // (اختياري) يمكن إضافة أي معاملات أخرى يحتاجها البروكسي
      };

       try {
           const response = await fetch('/api/gemini-proxy', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(payload)
           });

           if (!response.ok) {
               const errorData = await response.json();
               console.error("API Error:", errorData);
               throw new Error(`خطأ في الاتصال بالـ API: ${response.status} ${response.statusText}. التفاصيل: ${errorData?.error?.message || 'لا يوجد تفاصيل'}`);
           }
           const result = await response.json();
           if (result.candidates && result.candidates.length > 0 &&
               result.candidates[0].content && result.candidates[0].content.parts &&
               result.candidates[0].content.parts.length > 0) {
                const result = await response.json();
                return result.text || result.error || "No response from AI";
           } else {
               console.error("Unexpected API response structure:", result);
               throw new Error("لم يتمكن الذكاء الاصطناعي من توليد فكرة. حاول مرة أخرى.");
           }
       } catch (error) {
           console.error("Error fetching AI prompt:", error);
           return `حدث خطأ: ${error.message}. يرجى المحاولة مرة أخرى أو التأكد من إعدادات الـ API.`;
       } finally {
           loaderElement.classList.add('hidden');
           promptTextElement.classList.remove('hidden');
           generatePromptBtn.disabled = false;
           clearPromptBtn.disabled = false;
       }
   }

   async function displayPrompt() {
       let aiPrompt;
       let userInputs = {};

       if (currentCategory === 'short_messages') {
           userInputs.topic = shortMessageTopicInput.value.trim();
           const words = userInputs.topic.split(/\s+/).filter(Boolean);
           if (words.length > 5) {
               shortMessageTopicError.textContent = uiStrings.topicLengthErrorShort[currentLanguage];
               shortMessageTopicError.classList.remove('hidden');
               return; 
           }
           for (const keyword of forbiddenKeywords) {
               if (userInputs.topic.toLowerCase().includes(keyword.toLowerCase())) {
                   shortMessageTopicError.textContent = uiStrings.forbiddenKeywordError[currentLanguage];
                   shortMessageTopicError.classList.remove('hidden');
                   return; 
               }
           }
           shortMessageTopicError.classList.add('hidden'); 
           userInputs.messageLength = currentShortMessageLength;
           userInputs.messageDialect = currentShortMessageDialect;
           userInputs.messageDialectAr = currentShortMessageDialectArabic; // Keep Arabic for prompt
       } else if (currentCategory === 'articles') {
           userInputs.topic = articleTopicInput.value.trim();
           const words = userInputs.topic.split(/\s+/).filter(Boolean);
           if (words.length > 10) {
               articleTopicError.textContent = uiStrings.topicLengthErrorArticle[currentLanguage];
               articleTopicError.classList.remove('hidden');
               return; 
           }
            for (const keyword of forbiddenKeywords) {
               if (userInputs.topic.toLowerCase().includes(keyword.toLowerCase())) {
                   articleTopicError.textContent = uiStrings.forbiddenKeywordError[currentLanguage];
                   articleTopicError.classList.remove('hidden');
                   return; 
               }
           }
           articleTopicError.classList.add('hidden');
           userInputs.messageLength = currentArticleLength; 
       } else if (currentCategory === 'ad_images') {
           userInputs.productName = productNameInput.value.trim();
           userInputs.campaignName = campaignNameInput.value.trim();
       } else if (currentCategory === 'images') {
           userInputs.realism = currentPhotoRealism;
           userInputs.realism_ar = document.querySelector(`#photo-realism-options .filter-option-button[data-value="${currentPhotoRealism}"]`).dataset.textAr;
           userInputs.timeOfDay = currentPhotoTimeOfDay;
           userInputs.timeOfDay_ar = photoTimeOfDaySelect.options[photoTimeOfDaySelect.selectedIndex].dataset.textAr;
           userInputs.season = currentPhotoSeason;
           userInputs.season_ar = photoSeasonSelect.options[photoSeasonSelect.selectedIndex].dataset.textAr;
           userInputs.people = currentPhotoPeople;
           userInputs.people_ar = document.querySelector(`#photo-people-options .filter-option-button[data-value="${currentPhotoPeople}"]`).dataset.textAr;
           if (currentPhotoPeople === 'with_people') {
               userInputs.audience = currentPhotoAudience;
               userInputs.audience_ar = document.querySelector(`#photo-audience-options .filter-option-button[data-value="${currentPhotoAudience}"]`).dataset.textAr;
           }
           userInputs.cameraAngle = currentPhotoCameraAngle;
           userInputs.cameraAngle_ar = photoCameraAngleSelect.options[photoCameraAngleSelect.selectedIndex].dataset.textAr;
           userInputs.lighting = currentPhotoLighting;
           userInputs.lighting_ar = photoLightingSelect.options[photoLightingSelect.selectedIndex].dataset.textAr;
           userInputs.colors = currentPhotoColors;
           userInputs.colors_ar = photoColorsSelect.options[photoColorsSelect.selectedIndex].dataset.textAr;
           userInputs.styleMood = currentPhotoStyle;
           userInputs.styleMood_ar = photoStyleSelect.options[photoStyleSelect.selectedIndex].dataset.textAr;
       }

       const categoryNameForPrompt = currentLanguage === 'ar' ? currentCategoryArabic : currentCategoryEnglish;
       const subCategoryNameForPrompt = 
           currentCategory === 'images' ? (currentLanguage === 'ar' ? currentPhotographicImageSubCategoryArabic : currentPhotographicImageSubCategoryEnglish) :
           currentCategory === 'ad_images' ? (currentLanguage === 'ar' ? currentAdImageSubCategoryArabic : currentAdImageSubCategoryEnglish) :
           currentCategory === 'short_messages' ? (currentLanguage === 'ar' ? currentShortMessageSubCategoryArabic : currentShortMessageSubCategoryEnglish) :
           currentCategory === 'articles' ? (currentLanguage === 'ar' ? currentArticleSubCategoryArabic : currentArticleSubCategoryEnglish) :
           currentCategory === 'video' ? (currentLanguage === 'ar' ? currentVideoSubCategoryArabic : currentVideoSubCategoryEnglish) :
           null;


       if (['art', 'programming', 'random', 'explore', 'community'].includes(currentCategory) || 
           (currentCategory === 'video' && !subCategoryNameForPrompt) ) { // For main categories without sub-options yet or explore/community
            aiPrompt = await generateAIPrompt(currentCategory, categoryNameForPrompt, null, userInputs);
       } else {
            aiPrompt = await generateAIPrompt(currentCategory, categoryNameForPrompt, subCategoryNameForPrompt, userInputs);
       }


       promptTextElement.classList.remove('prompt-enter');
       void promptTextElement.offsetWidth;
       promptTextElement.classList.add('prompt-enter');
       promptTextElement.textContent = aiPrompt;
   }

   function updateActiveStyles() {
       // Update main UI elements based on language
       mainTitleElement.textContent = uiStrings.mainTitle[currentLanguage];
       mainSubtitleElement.textContent = uiStrings.mainSubtitle[currentLanguage];
       footerTextElement.innerHTML = uiStrings.footerText[currentLanguage].replace('{YEAR}', new Date().getFullYear());
       generateBtnText.textContent = uiStrings.generateBtnText[currentLanguage];
       clearBtnText.textContent = uiStrings.clearBtnText[currentLanguage];
       langBtnText.textContent = currentLanguage === 'ar' ? 'EN' : 'ع';
       document.documentElement.lang = currentLanguage;
       bodyElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
       bodyElement.classList.toggle('lang-en', currentLanguage === 'en');


       tabButtons.forEach(button => {
           const textSpan = button.querySelector('.tab-text');
           if (textSpan) {
               textSpan.textContent = button.dataset[`category${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}`];
           }
           button.classList.toggle('active', button.dataset.category === currentCategory);
           button.classList.toggle('text-blue-400', button.dataset.category === currentCategory);
       });
       
       // Update sub-category button texts
       document.querySelectorAll('.sub-category-button .sub-cat-text').forEach(span => {
           const parentButton = span.closest('.sub-category-button');
           if (parentButton) {
               span.textContent = parentButton.dataset[`subCategory${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}`];
           }
       });
       // Update length option button texts
        document.querySelectorAll('.length-option-button .len-opt-text').forEach(span => {
           const parentButton = span.closest('.length-option-button');
           if (parentButton) {
               span.textContent = parentButton.dataset[`length${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}`];
           }
       });
       // Update filter option button texts (for photo realism, people, audience)
       document.querySelectorAll('.filter-option-button').forEach(button => {
            button.textContent = button.dataset[`text${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}`];
       });
        // Update select options text
       document.querySelectorAll('select option').forEach(option => {
           if (option.dataset[`text${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}`]) {
               option.textContent = option.dataset[`text${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}`];
           }
       });
       // Update labels
       const labelsToUpdate = {
           'photo-type-label': uiStrings.photoTypeLabel,
           'ad-image-type-label': uiStrings.adImageTypeLabel,
           'message-type-label': uiStrings.messageTypeLabel,
           'article-type-label': uiStrings.articleTypeLabel,
           'video-type-label': uiStrings.videoTypeLabel,
           'product-name-label': uiStrings.productNameLabel,
           'campaign-name-label': uiStrings.campaignNameLabel,
           'message-length-label': uiStrings.messageLengthLabel,
           'message-dialect-label': uiStrings.messageDialectLabel,
           'message-topic-label': uiStrings.messageTopicLabel,
           'article-length-label': uiStrings.articleLengthLabel,
           'article-topic-label': uiStrings.articleTopicLabel,
           'photo-realism-label': uiStrings.photoRealismLabel,
           'photo-time-label': uiStrings.photoTimeLabel,
           'photo-season-filter-container': uiStrings.photoSeasonLabel, // The label is inside this container
           'photo-people-label': uiStrings.photoPeopleLabel,
           'photo-audience-label': uiStrings.photoAudienceLabel,
           'photo-angle-label': uiStrings.photoAngleLabel,
           'photo-lighting-label': uiStrings.photoLightingLabel,
           'photo-colors-label': uiStrings.photoColorsLabel,
           'photo-style-label': uiStrings.photoStyleLabel,
           'explore-title': uiStrings.exploreTitle,
           'explore-desc': uiStrings.exploreDesc,
           'community-title': uiStrings.communityTitle,
           'community-desc': uiStrings.communityDesc,
       };
       for (const id in labelsToUpdate) {
           const element = document.getElementById(id);
           if (element) {
               // For the season filter, the label is the first child of the container
               if (id === 'photo-season-filter-container') {
                   if (element.firstChild && element.firstChild.nodeType === Node.ELEMENT_NODE && element.firstChild.classList.contains('filter-label')) {
                        element.firstChild.textContent = labelsToUpdate[id][currentLanguage];
                   }
               } else {
                   element.textContent = labelsToUpdate[id][currentLanguage];
               }
           }
       }


       photographicImageSubcategoriesContainer.classList.toggle('hidden', currentCategory !== 'images');
       photoAdvancedFiltersContainer.classList.toggle('hidden', currentCategory !== 'images');
       adImageSubcategoriesContainer.classList.toggle('hidden', currentCategory !== 'ad_images');
       shortMessageSubcategoriesContainer.classList.toggle('hidden', currentCategory !== 'short_messages');
       articleSubcategoriesContainer.classList.toggle('hidden', currentCategory !== 'articles');
       videoSubcategoriesContainer.classList.toggle('hidden', currentCategory !== 'video');
       exploreContentContainer.classList.toggle('hidden', currentCategory !== 'explore');
       communityContentContainer.classList.toggle('hidden', currentCategory !== 'community');


       if (currentCategory === 'images') {
           photographicImageSubCategoryButtons.forEach(button => {
               button.classList.toggle('active', button.dataset.subCategory === currentPhotographicImageSubCategory);
           });
           photoRealismOptionButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.value === currentPhotoRealism));
           photoTimeOfDaySelect.value = currentPhotoTimeOfDay;
           photoSeasonSelect.value = currentPhotoSeason;
           photoPeopleOptionButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.value === currentPhotoPeople));
           photoAudienceFilterContainer.classList.toggle('hidden', currentPhotoPeople !== 'with_people');
           if(currentPhotoPeople === 'with_people') {
               photoAudienceOptionButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.value === currentPhotoAudience));
           }
           photoCameraAngleSelect.value = currentPhotoCameraAngle;
           photoLightingSelect.value = currentPhotoLighting;
           photoColorsSelect.value = currentPhotoColors;
           photoStyleSelect.value = currentPhotoStyle;

           const showSeasonFilter = ['nature', 'travel', 'cities'].includes(currentPhotographicImageSubCategory);
           photoSeasonFilterContainer.classList.toggle('hidden', !showSeasonFilter);


       } else if (currentCategory === 'ad_images') {
           adImageSubCategoryButtons.forEach(button => {
               button.classList.toggle('active', button.dataset.subCategory === currentAdImageSubCategory);
           });
           const placeholders = adImagePlaceholders[currentAdImageSubCategory] || { product: {ar: "مثال: اسم المنتج/الخدمة", en:"e.g., Product/Service Name"}, campaign: {ar: "مثال: اسم الحملة الإعلانية",  en:"e.g., Ad Campaign Name"} };
           productNameInput.placeholder = placeholders.product[currentLanguage];
           campaignNameInput.placeholder = placeholders.campaign[currentLanguage];

       } else if (currentCategory === 'short_messages') {
           shortMessageSubCategoryButtons.forEach(button => {
               button.classList.toggle('active', button.dataset.subCategory === currentShortMessageSubCategory);
           });
           shortMessageLengthOptionButtons.forEach(button => {
               button.classList.toggle('active', button.dataset.length === currentShortMessageLength);
           });
           shortMessageDialectSelect.value = currentShortMessageDialect;
           shortMessageTopicInput.placeholder = shortMessagePlaceholders[currentShortMessageSubCategory]?.[currentLanguage] || (currentLanguage === 'ar' ? "أدخل موضوع الرسالة (اختياري)" : "Enter message topic (optional)");
       } else if (currentCategory === 'articles') {
           articleSubCategoryButtons.forEach(button => {
               button.classList.toggle('active', button.dataset.subCategory === currentArticleSubCategory);
           });
           articleLengthOptionButtons.forEach(button => {
               button.classList.toggle('active', button.dataset.length === currentArticleLength);
           });
           articleTopicInput.placeholder = articlePlaceholders[currentArticleSubCategory]?.[currentLanguage] || (currentLanguage === 'ar' ? "أدخل موضوع المقال (اختياري)" : "Enter article topic (optional)");
       } else if (currentCategory === 'video') {
           videoSubCategoryButtons.forEach(button => { 
               button.classList.toggle('active', button.dataset.subCategory === currentVideoSubCategory);
           });
       }

       const activeTabButton = document.querySelector(`.tab-button[data-category="${currentCategory}"]`);
       let categoryTitleText = "";
       if (activeTabButton) {
            categoryTitleText = activeTabButton.dataset[`category${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}`];
       }
        categoryTitleElement.textContent = categoryTitleText;


       if (currentCategory === 'video') {
           const subCatText = currentLanguage === 'ar' ? currentVideoSubCategoryArabic : currentVideoSubCategoryEnglish;
           categoryDescriptionElement.textContent = uiStrings.videoCatDesc[currentLanguage].replace("{SUB_CAT_AR}", currentVideoSubCategoryArabic).replace("{SUB_CAT_EN}", currentVideoSubCategoryEnglish);
       } else if (currentCategory === 'images') {
            categoryDescriptionElement.textContent = uiStrings.photoCatDesc[currentLanguage];
       } else if (currentCategory === 'ad_images') {
           const subCatText = currentLanguage === 'ar' ? currentAdImageSubCategoryArabic : currentAdImageSubCategoryEnglish;
            categoryDescriptionElement.textContent = uiStrings.adImageCatDesc[currentLanguage].replace("{SUB_CAT_AR}", currentAdImageSubCategoryArabic).replace("{SUB_CAT_EN}", currentAdImageSubCategoryEnglish);
       } else if (currentCategory === 'short_messages') {
            categoryDescriptionElement.textContent = uiStrings.shortMessageCatDesc[currentLanguage];
       } else if (currentCategory === 'articles') {
            categoryDescriptionElement.textContent = uiStrings.articleCatDesc[currentLanguage];
       } else if (currentCategory === 'explore' || currentCategory === 'community') {
           categoryDescriptionElement.textContent = ""; // No specific description needed as content is placeholder
       }
       else {
           categoryDescriptionElement.textContent = uiStrings.defaultCatDesc[currentLanguage];
       }
   }

   function handleCategoryChange(event) {
       const selectedButton = event.target.closest('.tab-button');
       if (!selectedButton) return;

       currentCategory = selectedButton.dataset.category;
       currentCategoryArabic = selectedButton.dataset.categoryAr;
       currentCategoryEnglish = selectedButton.dataset.categoryEn;
       
       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       // Hide all specific content areas initially
       document.querySelectorAll('#app-content > div[id$="-container"]').forEach(container => {
           if (!container.id.includes('prompt-display-area')) { // Keep prompt display area always visible
               container.classList.add('hidden');
           }
       });
       
       // Show the relevant container for the selected category
       if (currentCategory === 'images') photographicImageSubcategoriesContainer.classList.remove('hidden');
       else if (currentCategory === 'ad_images') adImageSubcategoriesContainer.classList.remove('hidden');
       else if (currentCategory === 'short_messages') shortMessageSubcategoriesContainer.classList.remove('hidden');
       else if (currentCategory === 'articles') articleSubcategoriesContainer.classList.remove('hidden');
       else if (currentCategory === 'video') videoSubcategoriesContainer.classList.remove('hidden');
       else if (currentCategory === 'explore') exploreContentContainer.classList.remove('hidden');
       else if (currentCategory === 'community') communityContentContainer.classList.remove('hidden');

       updateActiveStyles();
   }

   function handlePhotographicImageSubCategoryChange(event) {
       const selectedButton = event.target.closest('.sub-category-button');
       if (!selectedButton) return;

       currentPhotographicImageSubCategory = selectedButton.dataset.subCategory;
       currentPhotographicImageSubCategoryArabic = selectedButton.dataset.subCategoryAr;
       currentPhotographicImageSubCategoryEnglish = selectedButton.dataset.subCategoryEn;


       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles(); 
   }
   
   function handlePhotoFilterChange(event, filterType) {
       const target = event.target;
       let value;
       let valueAr = "";
       let valueEn = "";

       if (target.tagName === 'BUTTON') {
           value = target.dataset.value;
           valueAr = target.dataset.textAr;
           valueEn = target.dataset.textEn;
       } else if (target.tagName === 'SELECT') {
           value = target.value;
           const selectedOption = target.options[target.selectedIndex];
           valueAr = selectedOption.dataset.textAr;
           valueEn = selectedOption.dataset.textEn;
       }
       if (!value) return;

       switch(filterType) {
           case 'realism': currentPhotoRealism = value; break;
           case 'time_of_day': currentPhotoTimeOfDay = value; break;
           case 'season': currentPhotoSeason = value; break;
           case 'people': currentPhotoPeople = value; break;
           case 'audience': currentPhotoAudience = value; break;
           case 'camera_angle': currentPhotoCameraAngle = value; break;
           case 'lighting': currentPhotoLighting = value; break;
           case 'colors': currentPhotoColors = value; break;
           case 'style_mood': currentPhotoStyle = value; break;
       }
       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles();
   }


   function handleAdImageSubCategoryChange(event) {
       const selectedButton = event.target.closest('.sub-category-button');
       if (!selectedButton) return;

       currentAdImageSubCategory = selectedButton.dataset.subCategory;
       currentAdImageSubCategoryArabic = selectedButton.dataset.subCategoryAr;
       currentAdImageSubCategoryEnglish = selectedButton.dataset.subCategoryEn;


       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles(); 
   }

   function handleShortMessageSubCategoryChange(event) {
       const selectedButton = event.target.closest('.sub-category-button');
       if (!selectedButton) return;

       currentShortMessageSubCategory = selectedButton.dataset.subCategory;
       currentShortMessageSubCategoryArabic = selectedButton.dataset.subCategoryAr;
       currentShortMessageSubCategoryEnglish = selectedButton.dataset.subCategoryEn;
       
       currentShortMessageLength = 'short';
       currentShortMessageLengthArabic = 'قصيرة';
       currentShortMessageLengthEnglish = 'Short';
       shortMessageDialectSelect.value = 'standard_arabic';
       currentShortMessageDialect = 'standard_arabic';
       currentShortMessageDialectArabic = 'العربية الفصحى';
       currentShortMessageDialectEnglish = 'Standard Arabic';

       shortMessageTopicInput.value = '';
       shortMessageTopicError.classList.add('hidden');


       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles(); 
   }
   
   function handleShortMessageLengthChange(event) {
       const selectedButton = event.target.closest('.length-option-button');
       if (!selectedButton) return;

       currentShortMessageLength = selectedButton.dataset.length;
       currentShortMessageLengthArabic = selectedButton.dataset.lengthAr;
       currentShortMessageLengthEnglish = selectedButton.dataset.lengthEn;

       
       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles();
   }

   function handleShortMessageDialectChange(event) {
       currentShortMessageDialect = event.target.value;
       const selectedOption = event.target.options[event.target.selectedIndex];
       currentShortMessageDialectArabic = selectedOption.dataset.textAr;
       currentShortMessageDialectEnglish = selectedOption.dataset.textEn;
       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles();
   }

   function handleShortMessageTopicInputChange() {
       const value = shortMessageTopicInput.value;
       const words = value.trim().split(/\s+/).filter(Boolean);
       if (words.length > 5) {
           shortMessageTopicError.textContent = uiStrings.topicLengthErrorShort[currentLanguage];
           shortMessageTopicError.classList.remove('hidden');
       } else {
           shortMessageTopicError.classList.add('hidden');
       }
   }

   function handleArticleSubCategoryChange(event) {
       const selectedButton = event.target.closest('.sub-category-button');
       if (!selectedButton) return;

       currentArticleSubCategory = selectedButton.dataset.subCategory;
       currentArticleSubCategoryArabic = selectedButton.dataset.subCategoryAr;
       currentArticleSubCategoryEnglish = selectedButton.dataset.subCategoryEn;

       
       currentArticleLength = 'brief';
       currentArticleLengthArabic = 'موجز';
       currentArticleLengthEnglish = 'Brief';
       articleTopicInput.value = '';
       articleTopicError.classList.add('hidden');


       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles();
   }

   function handleArticleLengthChange(event) {
       const selectedButton = event.target.closest('.length-option-button');
       if (!selectedButton) return;

       currentArticleLength = selectedButton.dataset.length;
       currentArticleLengthArabic = selectedButton.dataset.lengthAr;
       currentArticleLengthEnglish = selectedButton.dataset.lengthEn;

       
       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles();
   }

   function handleArticleTopicInputChange() {
       const value = articleTopicInput.value;
       const words = value.trim().split(/\s+/).filter(Boolean);
       if (words.length > 10) { 
           articleTopicError.textContent = uiStrings.topicLengthErrorArticle[currentLanguage];
           articleTopicError.classList.remove('hidden');
       } else {
           articleTopicError.classList.add('hidden');
       }
   }


   function handleVideoSubCategoryChange(event) {
       const selectedButton = event.target.closest('.sub-category-button');
       if (!selectedButton) return;

       currentVideoSubCategory = selectedButton.dataset.subCategory;
       currentVideoSubCategoryArabic = selectedButton.dataset.subCategoryAr;
       currentVideoSubCategoryEnglish = selectedButton.dataset.subCategoryEn;


       promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
       updateActiveStyles();
   }
   
   function initializeEventListeners() {
       tabButtons.forEach(button => {
           button.addEventListener('click', handleCategoryChange);
       });

       photographicImageSubCategoryButtons = document.querySelectorAll('#photographic-image-subcategories-container .sub-category-button');
       photographicImageSubCategoryButtons.forEach(button => {
           button.addEventListener('click', handlePhotographicImageSubCategoryChange);
       });
       
       photoRealismOptionButtons.forEach(btn => btn.addEventListener('click', (e) => handlePhotoFilterChange(e, 'realism')));
       photoTimeOfDaySelect.addEventListener('change', (e) => handlePhotoFilterChange(e, 'time_of_day'));
       photoSeasonSelect.addEventListener('change', (e) => handlePhotoFilterChange(e, 'season'));
       photoPeopleOptionButtons.forEach(btn => btn.addEventListener('click', (e) => handlePhotoFilterChange(e, 'people')));
       photoAudienceOptionButtons.forEach(btn => btn.addEventListener('click', (e) => handlePhotoFilterChange(e, 'audience')));
       photoCameraAngleSelect.addEventListener('change', (e) => handlePhotoFilterChange(e, 'camera_angle'));
       photoLightingSelect.addEventListener('change', (e) => handlePhotoFilterChange(e, 'lighting'));
       photoColorsSelect.addEventListener('change', (e) => handlePhotoFilterChange(e, 'colors'));
       photoStyleSelect.addEventListener('change', (e) => handlePhotoFilterChange(e, 'style_mood'));

       
       adImageSubCategoryButtons = document.querySelectorAll('#ad-image-subcategories-container .sub-category-button');
       adImageSubCategoryButtons.forEach(button => {
           button.addEventListener('click', handleAdImageSubCategoryChange);
       });

       shortMessageSubCategoryButtons = document.querySelectorAll('#short-message-subcategories-container .sub-category-button');
       shortMessageSubCategoryButtons.forEach(button => {
           button.addEventListener('click', handleShortMessageSubCategoryChange);
       });

       shortMessageLengthOptionButtons = document.querySelectorAll('#short-message-length-options .length-option-button');
       shortMessageLengthOptionButtons.forEach(button => {
           button.addEventListener('click', handleShortMessageLengthChange);
       });
       shortMessageDialectSelect.addEventListener('change', handleShortMessageDialectChange);
       shortMessageTopicInput.addEventListener('input', handleShortMessageTopicInputChange);

       articleSubCategoryButtons = document.querySelectorAll('#article-subcategories-container .sub-category-button');
       articleSubCategoryButtons.forEach(button => {
           button.addEventListener('click', handleArticleSubCategoryChange);
       });
       articleLengthOptionButtons = document.querySelectorAll('#article-length-options .length-option-button');
       articleLengthOptionButtons.forEach(button => {
           button.addEventListener('click', handleArticleLengthChange);
       });
       articleTopicInput.addEventListener('input', handleArticleTopicInputChange);


       videoSubCategoryButtons = document.querySelectorAll('#video-subcategories-container .sub-category-button'); 
       videoSubCategoryButtons.forEach(button => {
           button.addEventListener('click', handleVideoSubCategoryChange);
       });

       generatePromptBtn.addEventListener('click', () => {
           if (currentCategory === 'short_messages') {
               shortMessageTopicError.classList.add('hidden');
           }
           if (currentCategory === 'articles') {
               articleTopicError.classList.add('hidden');
           }
           if (currentCategory === 'images') { 
           }
           displayPrompt();
       });

       clearPromptBtn.addEventListener('click', () => {
           promptTextElement.textContent = uiStrings.clearedPromptText[currentLanguage];
           promptTextElement.classList.remove('prompt-enter'); 
           if (currentCategory === 'ad_images') {
               productNameInput.value = '';
               campaignNameInput.value = '';
           }
           if (currentCategory === 'short_messages') {
               shortMessageTopicInput.value = '';
               shortMessageTopicError.classList.add('hidden');
           }
           if (currentCategory === 'articles') {
               articleTopicInput.value = '';
               articleTopicError.classList.add('hidden');
           }
       });

       languageToggleButton.addEventListener('click', () => {
           currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
           updateActiveStyles(); // This will re-render all text elements
            // Update currently displayed prompt text to new language if it's a placeholder
           if (promptTextElement.textContent === uiStrings.initialPromptText.ar || promptTextElement.textContent === uiStrings.initialPromptText.en) {
               promptTextElement.textContent = uiStrings.initialPromptText[currentLanguage];
           } else if (promptTextElement.textContent === uiStrings.clearedPromptText.ar || promptTextElement.textContent === uiStrings.clearedPromptText.en) {
                promptTextElement.textContent = uiStrings.clearedPromptText[currentLanguage];
           }
       });

       userAccountButton.addEventListener('click', () => {
           // Placeholder for user account modal/logic
           // For now, just an alert or a simple message in the prompt area
           promptTextElement.textContent = uiStrings.userAccountModalDesc[currentLanguage];
           categoryTitleElement.textContent = uiStrings.userAccountModalTitle[currentLanguage];
           categoryDescriptionElement.textContent = "";
            // Hide all specific content containers
           document.querySelectorAll('#app-content > div[id$="-container"]').forEach(container => {
               if (!container.id.includes('prompt-display-area')) { 
                   container.classList.add('hidden');
               }
           });
           exploreContentContainer.classList.add('hidden');
           communityContentContainer.classList.add('hidden');
       });
   }

   // --- Initial Setup ---
   currentYearElement.textContent = new Date().getFullYear();
   const initialActiveButton = document.querySelector('.tab-button.active');
   if (initialActiveButton) {
       currentCategory = initialActiveButton.dataset.category;
       currentCategoryArabic = initialActiveButton.dataset.categoryAr;
       currentCategoryEnglish = initialActiveButton.dataset.categoryEn;
   }
   
   const initialActivePhotographicImageSubCategoryButton = document.querySelector('#photographic-image-subcategories-container .sub-category-button.active');
   if (initialActivePhotographicImageSubCategoryButton) {
       currentPhotographicImageSubCategory = initialActivePhotographicImageSubCategoryButton.dataset.subCategory;
       currentPhotographicImageSubCategoryArabic = initialActivePhotographicImageSubCategoryButton.dataset.subCategoryAr;
       currentPhotographicImageSubCategoryEnglish = initialActivePhotographicImageSubCategoryButton.dataset.subCategoryEn;
   }
   
   document.querySelector('#photo-realism-options .filter-option-button[data-value="realistic"]').classList.add('active');
   document.querySelector('#photo-people-options .filter-option-button[data-value="no_people"]').classList.add('active');
   document.querySelector('#photo-audience-options .filter-option-button[data-value="no_audience"]').classList.add('active');


   const initialActiveAdImageSubCategoryButton = document.querySelector('#ad-image-subcategories-container .sub-category-button.active');
   if (initialActiveAdImageSubCategoryButton) {
       currentAdImageSubCategory = initialActiveAdImageSubCategoryButton.dataset.subCategory;
       currentAdImageSubCategoryArabic = initialActiveAdImageSubCategoryButton.dataset.subCategoryAr;
       currentAdImageSubCategoryEnglish = initialActiveAdImageSubCategoryButton.dataset.subCategoryEn;
   }
   
   const firstShortMessageSubCategoryButton = document.querySelector('#short-message-subcategories-container .sub-category-button');
   if (firstShortMessageSubCategoryButton) {
       currentShortMessageSubCategory = firstShortMessageSubCategoryButton.dataset.subCategory;
       currentShortMessageSubCategoryArabic = firstShortMessageSubCategoryButton.dataset.subCategoryAr;
       currentShortMessageSubCategoryEnglish = firstShortMessageSubCategoryButton.dataset.subCategoryEn;

       document.querySelectorAll('#short-message-subcategories-container .sub-category-button').forEach(btn => btn.classList.remove('active'));
       firstShortMessageSubCategoryButton.classList.add('active');
   }
   const firstShortMessageLengthButton = document.querySelector('#short-message-length-options .length-option-button');
   if (firstShortMessageLengthButton) {
       currentShortMessageLength = firstShortMessageLengthButton.dataset.length;
       currentShortMessageLengthArabic = firstShortMessageLengthButton.dataset.lengthAr;
       currentShortMessageLengthEnglish = firstShortMessageLengthButton.dataset.lengthEn;

       document.querySelectorAll('#short-message-length-options .length-option-button').forEach(btn => btn.classList.remove('active'));
       firstShortMessageLengthButton.classList.add('active');
   }
   
   currentShortMessageDialect = shortMessageDialectSelect.value;
   const selectedDialectOptionSM = shortMessageDialectSelect.options[shortMessageDialectSelect.selectedIndex];
   currentShortMessageDialectArabic = selectedDialectOptionSM.dataset.textAr;
   currentShortMessageDialectEnglish = selectedDialectOptionSM.dataset.textEn;

   if (shortMessageTopicInput && shortMessagePlaceholders[currentShortMessageSubCategory]) {
        shortMessageTopicInput.placeholder = shortMessagePlaceholders[currentShortMessageSubCategory][currentLanguage];
   }

   const firstArticleSubCategoryButton = document.querySelector('#article-subcategories-container .sub-category-button');
   if (firstArticleSubCategoryButton) {
       currentArticleSubCategory = firstArticleSubCategoryButton.dataset.subCategory;
       currentArticleSubCategoryArabic = firstArticleSubCategoryButton.dataset.subCategoryAr;
       currentArticleSubCategoryEnglish = firstArticleSubCategoryButton.dataset.subCategoryEn;

       document.querySelectorAll('#article-subcategories-container .sub-category-button').forEach(btn => btn.classList.remove('active'));
       firstArticleSubCategoryButton.classList.add('active');
   }
   const firstArticleLengthButton = document.querySelector('#article-length-options .length-option-button');
   if (firstArticleLengthButton) {
       currentArticleLength = firstArticleLengthButton.dataset.length;
       currentArticleLengthArabic = firstArticleLengthButton.dataset.lengthAr;
       currentArticleLengthEnglish = firstArticleLengthButton.dataset.lengthEn;

       document.querySelectorAll('#article-length-options .length-option-button').forEach(btn => btn.classList.remove('active'));
       firstArticleLengthButton.classList.add('active');
   }
    if (articleTopicInput && articlePlaceholders[currentArticleSubCategory]) {
        articleTopicInput.placeholder = articlePlaceholders[currentArticleSubCategory][currentLanguage];
   }


   const firstVideoSubCategoryButton = document.querySelector('#video-subcategories-container .sub-category-button');
   if (firstVideoSubCategoryButton) {
       currentVideoSubCategory = firstVideoSubCategoryButton.dataset.subCategory;
       currentVideoSubCategoryArabic = firstVideoSubCategoryButton.dataset.subCategoryAr;
       currentVideoSubCategoryEnglish = firstVideoSubCategoryButton.dataset.subCategoryEn;

       document.querySelectorAll('#video-subcategories-container .sub-category-button').forEach(btn => btn.classList.remove('active'));
       firstVideoSubCategoryButton.classList.add('active');
   }
   
   initializeEventListeners(); 
   updateActiveStyles(); 