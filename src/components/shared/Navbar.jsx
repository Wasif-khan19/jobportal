import { Button } from "../ui/button";

function Navbar() {
  const user = true;
  return (
    <div className="">
      <div className="flex justify-between items-center max-w-7xl mx-auto h-14">
        {/* left side */}
        <div className="">
          <h1 className="text-xl font-semibold">
            Job<span className="px-1">Portal</span>
          </h1>
        </div>

        {/* right side */}
        <div className="flex gap-8 items-center">
          {!user ? (
            <div className="space-x-2">
              <Button variant="link">Log in</Button>
              <Button variant="secondary">Sign up</Button>
            </div>
          ) : (
            <div>
              <div>
                <ul className="flex gap-2 text-lg">
                  <li>Home</li>
                  <li>Jobs</li>
                  <li>Browse</li>
                </ul>
              </div>
              <div>
                
              </div>

            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
