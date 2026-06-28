import json
import os

transcript_path = r"C:\Users\Test\.gemini\antigravity-ide\brain\fe8d9388-8eae-4b68-af07-c62c2790ab53\.system_generated\logs\transcript_full.jsonl"
out_path = r"c:\Users\Test\Desktop\QURAN APP  V.1\extracted_step_96.txt"

print("Checking if transcript exists:", os.path.exists(transcript_path))
try:
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line in f:
            data = json.loads(line)
            if data.get('step_index') == 96:
                content = data.get('content', '')
                with open(out_path, "w", encoding="utf-8") as out:
                    out.write(content)
                print("Extracted step 96 successfully.")
                break
except Exception as e:
    print("Error:", e)
