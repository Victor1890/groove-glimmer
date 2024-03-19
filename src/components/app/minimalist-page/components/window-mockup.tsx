export function WindowMockup() {
    return (
        <section className="px-6 py-4 flex gap-2 border-1 ">
            <span className="w-5 h-5 inline-block rounded-xl " />
            <span className={classes.windowDot} />
            <span className={classes.windowDot} />
        </section>
    );
}