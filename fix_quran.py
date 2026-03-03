
# -*- coding: utf-8 -*-
# REBUILD corrupted index.html - insert missing structural HTML + <script> tags
FILE = r'c:\Users\Test\Desktop\New folder (3)\index.html'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# ── Parts we know are good ─────────────────────────────────────
# 1. CSS block: from start to </style> (line 2071)
idx_style = content.find('</style>')
css_and_head = content[:idx_style + len('</style>')]

# 2. JS + closing: from checkPromoVisibility to end
# Skip the 4 broken lines between </style> and the real JS
idx_js = content.find('\n        function checkPromoVisibility()')
js_body = content[idx_js:]  # includes all JS up to </body></html>

# The JS block currently ends with:
#   </script>\n</body>\n\n</html>
# We need to wrap JS in <script> tag, and add HTML pages before it

print(f"CSS+head part: {idx_style + 8} chars, {css_and_head.count(chr(10))+1} lines")
print(f"JS part: {len(js_body)} chars, {js_body.count(chr(10))+1} lines")
print(f"JS starts with: {js_body[:60]}")
print(f"JS ends with: {repr(js_body[-60:])}")

# Check if js_body ends properly
assert '</body>' in js_body, "Missing </body>"
assert '</html>' in js_body, "Missing </html>"

# Find where </body> is in js_body
idx_close_body = js_body.rfind('</script>')
print(f"</script> in js_body at relative pos: {idx_close_body}, char {idx_js+idx_close_body}")
js_line = js_body.count(chr(10), 0, idx_close_body)
print(f"That's around JS line {js_line}")
