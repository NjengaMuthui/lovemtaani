function getLorem(): string {
  return (
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore doloribus natus ullam eaque dolore voluptates corporis sunt voluptatem minus, architecto facere omnis incidunt reiciendis blanditiis deserunt earum non adipisci beatae." +
    "Voluptate ducimus nisi alias labore animi numquam assumenda ipsa voluptatem eius. Illum deleniti adipisci velit ea dicta, dolores neque aliquam molestias in, magnam quod consectetur nihil impedit dolorum ab fuga."
  );
}
function formatNumberWithCommas(num: number): string {
  return num.toLocaleString();
}
export { getLorem, formatNumberWithCommas };
