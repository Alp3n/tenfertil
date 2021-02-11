const color = {
  white: "#ffffff",
  contrast: "#f8f8f8",
  "blue-1": "#1C94B4",
  "blue-2": "#1E88CB",
  "blue-3": "#2064D1",
  "blue-4": "#151070",
  "portrait-1": "#F8FAFD",
  "portrait-2": "#E1E8F7",
  "portrait-3": "#E3F0F8",
  hover: "#509EB4",
  button: "#00B4AA",
  "button-hover": "#5EAAA5",
  background: "#E9EDF9",
}

const typography = {
  "text-p": "22px",
  "text-p2": "18px",
  "text-p3": "12px",
  "text-h1": "68px",
  "text-h2": "56px",
  "text-h3": "34px",
  "text-h4": "28px",
}

const size = {
  xs: `320px`,
  sm: `768px`,
  lg: `1200px`,
}
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
}

export default { size, device, color, typography }
