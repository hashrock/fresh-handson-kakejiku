const db = await Deno.openKv();
const v = await db.get<string>(["word"]);
console.log(v);
