async function start() {
    const { run } = await import(`./${process.argv[2]}.ts`);

    console.log(run());
}

start();
