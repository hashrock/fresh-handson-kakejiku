const kv = await Deno.openKv();
const res = await kv.set(["word"], "実質ゼロカロリー");
console.log(res);
