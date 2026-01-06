import usePreferencesState from "@/state/preferences";
import Modal from "./Modal";
import Button from "./button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { maxFontSize, minFontSize } from "@/config";

export default function Preferences() {
  const { theme, setTheme, fontSize, setFontSize } = usePreferencesState();
  const [show, setShow] = useState(false);

  const themeList = [
    {
      label: "الوضع الافتراضي",
      value: "system",
      checked: theme === "system",
      onClick: (v: string) => setTheme(v as any),
    },
    {
      label: "الداكن",
      value: "dark",
      checked: theme === "dark",
      onClick: (v: string) => setTheme(v as any),
    },
    {
      label: "الفاتح",
      value: "light",
      checked: theme === "light",
      onClick: (v: string) => setTheme(v as any),
    },
  ];

  const decrementFontSize = () => {
    if (fontSize > minFontSize) {
      setFontSize(fontSize - 1);
    }
  };

  const incrementFontSize = () => {
    if (fontSize < maxFontSize) {
      setFontSize(fontSize + 1);
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        color="secondary"
        size="sm"
        rounded="full"
        onClick={() => setShow(true)}
        // onTruncate
        icon={GoGear}
        iconProps={{
          className:
            "transition-all duration-1000 ease-in-out group-hover:fill-accent group-hover:rotate-180",
        }}
      />
      <Modal
        show={show}
        onClose={() => setShow(false)}
        closeButton
        className="min-w-[80vw] md:min-w-[50vw] lg:min-w-[40vw]"
      >
        <div className="flex flex-col items-center gap-4 w-full *:w-full">
          <h2 className="text-xl font-semibold text-center text-secondary">التفضيلات</h2>

          {/* Theme Toggler */}
          <div className="flex items-center justify-between gap-8">
            <p className="text-secondary">اللون</p>
            <div className="border border-secondary/50 rounded divide-x divide-secondary/50">
              {themeList.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className={cn("p-1.5 px-3 bg-accent hover:bg-primary text-primary hover:text-secondary", {
                    "bg-primary text-secondary": item.checked,
                  })}
                  onClick={() => item.onClick(item.value as any)}
                  disabled={item.checked}
                  title={item.label}
                  aria-label={`Chose ${item.label} theme`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Size Toggler */}
          <div className="flex items-center justify-between gap-8">
            <div className="flex-center gap-4">
              <p className="text-secondary">حجم الخط</p>
              {fontSize !== 16 && (
                <Button variant={"outline"} onClick={() => setFontSize(16)}>
                  الافتراضي (16)
                </Button>
              )}
            </div>
            <div className="flex-center gap-2">
              <button
                type="button"
                className=""
                disabled={fontSize <= minFontSize}
                onClick={decrementFontSize}
              >
                <IoIosArrowDown size={20} className="text-secondary" />
              </button>
              <span className="px-3 py-1 border border-secondary rounded-lg">
                {fontSize}
              </span>
              <button
                type="button"
                className=""
                disabled={fontSize >= maxFontSize}
                onClick={incrementFontSize}
              >
                <IoIosArrowUp size={20} className="text-secondary" />
              </button>
            </div>
          </div>
          <Button
            variant={"outline"}
            icon="arrow"
            color="accent"
            onClick={() => setShow(false)}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};
