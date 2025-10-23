const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} John Doe. Built with passion using React & TypeScript.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Designed and developed with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
