interface SectionProps {
    label: string;
    children: React.ReactNode;
    className?: string;
}

const Section = ({ label, children, className }: SectionProps) => (
    <section className={className}>
        <h2 className="text-xl font-medium mb-6">{label}</h2>
        {children}
    </section>
)

export default Section;