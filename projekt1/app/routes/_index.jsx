export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        color: "green",
      }}
    >
      <h1>Hello oscar!</h1>
    </div>
  );
}
