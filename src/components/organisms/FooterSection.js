export default function FooterSection() {
    return (
      <footer className="bg-blue-900 text-white px-6 py-16 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-center md:text-left">
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <img src="/log2.png" alt="Whitepace logo" className="h-8 mx-auto md:mx-0" />
            <p className="mt-4">
              whitepace was created for the new ways we live and work. We make beautifully designed
              around the world.
            </p>
          </div>
  
          {/* Navigation Columns */}
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
  
          {/* CTA Column */}
          <div>
            <h4 className="font-semibold mb-2">Try It Today</h4>
            <p>
              Get started for free. <br />
              Add your whole team as your needs grow.
            </p>
            <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
              Start today →
            </button>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="border-t border-blue-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <span>English</span>
            <span>Terms & privacy</span>
            <span>Security</span>
            <span>Status</span>
            <span>©2021 Whitepace LLC.</span>
          </div>
  
          <div>
            <img
              src="/Social Icon.png"
              alt="Social media icons"
              className="h-4 w-auto"
            />
          </div>
        </div>
      </footer>
    );
  }
  