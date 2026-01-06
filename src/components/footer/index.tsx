import Button from "../button";

export default function Footer() {
  return (
    <footer className="self-end mt-auto w-full flex-center py-4 text-center">
      {/* <p>Footer</p> */}
      <p className="flex-center">للتواصل والأقتراحات والمساعدة يمكنك التواصل معي على الواتساب (<Button href={"https://api.whatsapp.com/send?phone=+201157190687"} target="_blank" variant={"link"} icon={"arrow"}>01157190687</Button>)</p>
    </footer>
  );
};
