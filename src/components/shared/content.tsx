export const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </main>
    );
};
