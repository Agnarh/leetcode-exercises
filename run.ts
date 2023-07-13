async function start() {
    const arg = process.argv[2];
    const fileName = !!arg.match(/^\.\\.+\.ts$/gi) ? arg : `./${process.argv[2]}.ts`;
    const { run } = await import(fileName);

    console.log(run());
}

start();
