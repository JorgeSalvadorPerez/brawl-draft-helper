import pathlib
from collections import Counter
text = pathlib.Path('Brawlers.js').read_text(encoding='utf-8')
keys = []
for line in text.splitlines():
    stripped = line.lstrip()
    if stripped and stripped.endswith('{') and ':' in stripped:
        key = stripped.split(':', 1)[0].strip().strip('"')
        keys.append(key)
for name, count in Counter(keys).items():
    if count > 1:
        print(name, count)
