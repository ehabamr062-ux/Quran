import urllib.request
import json
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

print("📥 جاري تحميل المصحف والتفسير كاملاً بالتوازي (سرعة فائقة)...")
print("(ستنتهي العملية خلال ثوانٍ معدودة بفضل التحميل المتوازي)\n")

surah_names = [
    "الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف",
    "الأنفال","التوبة","يونس","هود","يوسف","الرعد","إبراهيم","الحجر",
    "النحل","الإسراء","الكهف","مريم","طه","الأنبياء","الحج","المؤمنون",
    "النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان",
    "السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر",
    "فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح",
    "الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة",
    "الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون",
    "التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح",
    "الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات",
    "عبس","التكوير","الإنفطار","المطففين","الانشقاق","البروج","الطارق",
    "الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح",
    "التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر",
    "العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر",
    "المسد","الإخلاص","الفلق","الناس"
]

quran_data = {}
failed = []

def download_surah(surah_num):
    text_url = f"https://api.alquran.cloud/v1/surah/{surah_num}/ar.alafasy"
    tafseer_url = f"https://api.alquran.cloud/v1/surah/{surah_num}/ar.muyassar"
    
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    
    # 1. Download Text
    req_text = urllib.request.Request(text_url, headers=headers)
    with urllib.request.urlopen(req_text, timeout=20) as response:
        text_data = json.loads(response.read().decode('utf-8'))
        ayahs = [a['text'] for a in text_data['data']['ayahs']]
        
    # 2. Download Tafseer
    req_tafseer = urllib.request.Request(tafseer_url, headers=headers)
    with urllib.request.urlopen(req_tafseer, timeout=20) as response:
        tafseer_data = json.loads(response.read().decode('utf-8'))
        tafseer = [a['text'] for a in tafseer_data['data']['ayahs']]
        
    return surah_num, ayahs, tafseer

# Run download tasks concurrently
start_time = time.time()
with ThreadPoolExecutor(max_workers=20) as executor:
    future_to_surah = {executor.submit(download_surah, i): i for i in range(1, 115)}
    
    for future in as_completed(future_to_surah):
        surah_num = future_to_surah[future]
        try:
            num, ayahs, tafseer = future.result()
            quran_data[str(num)] = {
                "name": surah_names[num - 1],
                "ayahs": ayahs,
                "tafseer": tafseer,
                "count": len(ayahs)
            }
            print(f"  ✅ سورة {num:3d} - {surah_names[num-1]} (تم تحميل النص والتفسير)")
        except Exception as e:
            print(f"  ❌ فشل تحميل سورة {surah_num}: {e}")
            failed.append(surah_num)

# Retry failed surahs if any
if failed:
    print(f"\n🔄 جاري إعادة محاولة تحميل السور التي فشلت {failed}...")
    retry_list = list(failed)
    failed.clear()
    
    # Retry sequentially with small delays to be safe
    for surah_num in retry_list:
        try:
            num, ayahs, tafseer = download_surah(surah_num)
            quran_data[str(num)] = {
                "name": surah_names[num - 1],
                "ayahs": ayahs,
                "tafseer": tafseer,
                "count": len(ayahs)
            }
            print(f"  ✅ [إعادة محاولة] سورة {num:3d} - {surah_names[num-1]} (تم بنجاح)")
        except Exception as e:
            print(f"  ❌ [إعادة محاولة] فشل تحميل سورة {surah_num} مجدداً: {e}")
            failed.append(surah_num)
        time.sleep(1)

# Write output file
output_path = r"c:\Users\Test\Desktop\QURAN APP  V.1\quran_data.js"

# Sort dictionary keys to maintain correct order in output file
sorted_data = {str(k): quran_data[str(k)] for k in sorted(int(x) for x in quran_data.keys())}

json_str = json.dumps(sorted_data, ensure_ascii=False, separators=(',', ':'))
js_content = f"// المصحف الكريم - بيانات مضمنة مع التفسير الميسر\n// تم التوليد تلقائياً - {len(sorted_data)} سورة\nconst QURAN_DATA = {json_str};\n"

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

elapsed_time = time.time() - start_time
import os
size_mb = os.path.getsize(output_path) / (1024 * 1024)

print("\n🎉 تم إنشاء الملف quran_data.js بنجاح!")
print(f"📁 الحجم: {size_mb:.2f} MB")
print(f"⏱️ الوقت المستغرق: {elapsed_time:.1f} ثانية")
if failed:
    print(f"⚠️ تنبيه: فشل تحميل السور التالية نهائياً: {failed}")
else:
    print("✨ تم تحميل كامل المصحف والتفسير 100% بنجاح!")
