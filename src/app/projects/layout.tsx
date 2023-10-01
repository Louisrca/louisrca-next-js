export default function ProjecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen flex justify-center items-center flex-col">
      {children}
    </section>
  );
}
