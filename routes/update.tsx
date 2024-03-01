import { FreshContext, Handlers } from "$fresh/server.ts";
const kv = await Deno.openKv();

export const handler: Handlers = {
  async POST(req: Request, _ctx: FreshContext) {
    const form = await req.formData();
    const word = form.get("word");
    const res = await kv.set(["word"], word);
    return new Response("Success");
  },
};

export default function Update() {
  return (
    <div>
      <form action="/update" method="post" class="p-8">
        <input name="word" class="border p-2" />
        <button type="submit" class="border p-2">Submit</button>
      </form>
    </div>
  );
}
