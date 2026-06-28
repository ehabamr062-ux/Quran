import json
import os

transcript_path = r"C:\Users\Test\.gemini\antigravity-ide\brain\fe8d9388-8eae-4b68-af07-c62c2790ab53\.system_generated\logs\transcript_full.jsonl"
out_path = r"c:\Users\Test\Desktop\QURAN APP  V.1\load_surah_def.txt"

print("Checking if transcript exists:", os.path.exists(transcript_path))
found = []
try:
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line in f:
            data = json.loads(line)
            content = data.get('content', '')
            if 'function loadSurahText' in content:
                found.append(f"Step {data.get('step_index')}:\n{content}\n" + "="*50 + "\n")
    with open(out_path, "w", encoding="utf-8") as out:
        out.writelines(found)
    print("Done. Found items:", len(found))
except Exception as e:
    print("Error:", e)
