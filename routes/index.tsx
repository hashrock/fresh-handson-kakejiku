export default async function Home() {
  const db = await Deno.openKv();
  const word = await db.get<string>(["word"]);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap"
        rel="stylesheet"
      >
      </link>
      <style>
        {`h1 {font-family: 'Yuji Syuku', sans-serif;}`}
      </style>
      <h1 class="text-9xl flex justify-center items-center h-screen">
        {word.value}
      </h1>
    </div>
  );
}
