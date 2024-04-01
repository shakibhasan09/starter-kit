import { Navbar } from "@/components/shared/navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-full">
            <Navbar />
            <div className="py-10">{children}</div>
        </div>
    );
};
