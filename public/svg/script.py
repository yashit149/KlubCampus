svg_code = '''
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  strokeWidth="4"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="text-black"
>
  <polyline points="8,40 8,8 40,8" stroke="currentColor" fill="none" />
  <polyline points="8,40 20,28 28,36 40,24" stroke="currentColor" fill="none" />
  <polygon points="36,20 44,24 36,28 38,24" fill="currentColor" />
</svg>
'''

file_name = "climbing_arrow.svg"

with open(file_name, "w") as f:
    f.write(svg_code)

file_name
