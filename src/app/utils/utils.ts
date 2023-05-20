
export const presetColors = [
  "#EB4040", // 'var(--red)'
  "#E91F64", // 'var(--pink)'
  "#9C28B1", // 'var(--purple)'
  "#7241CC", // 'var(--purple-2)'
  "#4052B6", // 'var(--indigo)'
  "#048BF6", // 'var(--blue)'
  "#00B1FF", // 'var(--blue-2)'
  "#00C6D5", // 'var(--teal)'
  "#05ACB7", // 'var(--cyan)'
  "#53B67D", // 'var(--green)'
  "#8BC248", // 'var(--green-2)'
  "#C7D048", // 'var(--green-3)'
  "#FABF2B", // 'var(--yellow)'
  "#FF9700", // 'var(--orange)'
  "#FF5C00", // 'var(--orange-2)'
  "#795547" // 'var(--brown)'
];

export function getRandomVariablePresetColor(): string {
  return presetColors[Math.floor(Math.random() * 16)];
}
