export const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </header>
    );
};
