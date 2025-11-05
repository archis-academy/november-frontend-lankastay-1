import styles from "./welcome.module.scss";

function Welcome() {
  // prettier-ignore
  const packages = [
    "react",
    "sass",
    "react-router",
    "classnames"
  ];

  const preConfigs = [
    "Base project structure",
    "Routing with react router",
    "Path aliases",
    "Default Sass Files",
  ];

  return (
    <header className={styles.welcomeHeader}>
      <img src="/archis-logo.svg" alt="Archis Logo" />
      <h1>Welcome to Archis</h1>

      <div>
        <h3>Installed Packages</h3>
        <ul>
          {packages.map((pkg) => (
            <li key={pkg}>{pkg}</li>
          ))}
        </ul>

        <br />

        <h3>Pre-Configurations</h3>
        <ul>
          {preConfigs.map((cfg) => (
            <li key={cfg}>{cfg}</li>
          ))}
        </ul>
      </div>

      <em>Copyright &copy; {new Date().getFullYear()}</em>
    </header>
  );
}

export default Welcome;
