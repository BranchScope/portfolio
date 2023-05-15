import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import logo from "./assets/logo.png";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#projects" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="https://github.com/BranchScope/portfolio" className="flex items-center">
          Source Code
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          About me
        </a>
      </Typography>
    </ul>
  );

  const projects = (
    <div className="mx-auto flex flex-col md:flex-row items-center max-w-fit gap-6 py-4">
      <Card className="mt-6 w-96 bg-white dark:bg-[#001a2c]">
        <CardBody>
          <Typography variant="h5" className="mb-2 text-black dark:text-white">
            GTradBot
          </Typography>
          <Typography className="text-black dark:text-white opacity-70">
            A Telegram bot that helps you to translate your messages in any
            language you want.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="https://t.me/GTradBot"><Button>Read More</Button></a>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 bg-white dark:bg-[#001a2c]">
        <CardBody>
          <Typography variant="h5" className="mb-2 text-black dark:text-white">
            Spotify-TGBio
          </Typography>
          <Typography className="text-black dark:text-white opacity-70">
            Automatically change your Telegram bio to show what you are listening to on Spotify.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="https://github.com/BranchScope/Spotify-TGBio"><Button>Read More</Button></a>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 bg-white dark:bg-[#001a2c]">
        <CardBody>
          <Typography variant="h5" className="mb-2 text-black dark:text-white">
            MusicStream
          </Typography>
          <Typography className="text-black dark:text-white opacity-70">
            Streaming music on YouTube with ffmpeg
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="https://github.com/BranchScope/MusicStream"><Button>Read More</Button></a>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className={`${darkMode ? "dark" : ""}`}>
        <Navbar className="sticky inset-0 z-10 h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 bg-white dark:bg-[#00111c] border-gray-200 dark:border-[#001a2c] text-blue-gray dark:text-white">
          <div className="flex items-center justify-between">
            <Avatar src={logo} alt="avatar" size="sm" />
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <img
                alt="dark mode toggle"
                className="w-6 h-6 self-center"
                onClick={toggleDarkMode}
                src={darkMode ? sun : moon}
              />
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav}>
            {navList}
          </Collapse>
        </Navbar>
        <div className="mx-auto flex flex-col items-center max-w-screen-md py-12">
          <Avatar src={logo} alt="avatar" size="xxl" />
          <Typography variant="h3" className="mt-4">
            BranchScope
          </Typography>
          <Typography className="font-normal py-2 opacity-70">
            Developer, Musician, Photographer
          </Typography>
          <div className="flex flex-row gap-4">
            <a href="https://github.com/BranchScope">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://t.me/BranchScope">
              <i className="fab fa-telegram fa-2x"></i>
            </a>
            <a href="https://instagram.com/branchscope">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://twitter.com/BranchScope">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://linkedin.com/in/branchscope">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <div className="flex flex-col items-center py-4" id="projects">
          <Typography variant="h3">
            Projects
          </Typography>
          <Typography className="mb-4 font-normal opacity-70">
            Here are some of my projects
          </Typography>
        </div>
        {projects}
        <hr className="my-8 border-blue-gray-50" />
        <div className="mx-auto flex flex-col items-center max-w-md md:max-w-fit" id="about">
          <Typography variant="h3">
            About me
          </Typography>
          <Typography variant="lead" className="font-normal text-center opacity-70">
          I'm an 18-year-old Italian developer with a passion for coding. <br />
          I'm constantly seeking out new challenges and opportunities to learn and grow in my field. <br />
          I'm studying at a high school level and have a some knowledges in programming languages such as PHP, Node.js, and Python. <br />
          I'm also actively expanding my knowledge by learning new technologies like React.js and Flutter. <br />
          But don't get me wrong, I'm not just a tech nerd! I'm also a musician and a photographer, and I love motors.
          </Typography>
        </div>
        <footer className="w-full p-8">
          <hr className="my-8 border-blue-gray-50" />
          <Typography className="text-center font-normal">
            Made with <span className="text-red-500">&hearts;</span> using <a href="https://react.dev/">React.js</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a><br />
            &copy; 2023 BranchScope
          </Typography>
        </footer>
      </div>
    </>
  );
}