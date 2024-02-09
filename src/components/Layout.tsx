type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-20 bg-gray-300">Header</header>
      <div className="bg-blue-100 flex-1">{children}</div>
      <footer className="h-20 bg-gray-300">Footer</footer>
    </div>
  );
};

export default Layout;
