import { Input } from "@/components/ui/input";
import { Container, Flex } from "@radix-ui/themes";
import Select from "react-tailwindcss-select";
import Link from "next/link";

import themes from "@/helper";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setTheme, setUsername, setYear } from "@/redux/slices/stats-info";

const GenerateStats = () => {
  const getThemes = () => {
    return Object.keys(themes).map((theme: string) => {
      return {
        value: theme,
        label: theme.replace("_", " "),
      };
    });
  };

  const getYears = () => {
    const endYear = new Date().getFullYear();
    const years = [];
    let startYear = new Date().getFullYear() - 10;
    while (startYear <= endYear) {
      years.push(startYear++);
    }

    return years.map((year: number) => {
      return {
        value: year.toString(),
        label: year.toString(),
      };
    });
  };

  const {username, theme, year} = useAppSelector((state) => state.statsInfo)
  const dispatch = useAppDispatch()


  return (
    <>
      <nav className="shadow-sm py-8 px-8 md:px-4">
        <Container>
          <Flex justify="between">
            <Link href="/generate-stats" className="font-bold text-lg">
              {" "}
              Blog stats{" "}
            </Link>
            <Link href="/" className="text-gray-900">
              {" "}
              Homepage{" "}
            </Link>
          </Flex>
        </Container>
      </nav>
      <Container className="mt-10">
        <h1 className="text-3xl font-bold mb-10">Generate your blog stats</h1>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-10">
          <div className="col-span-1">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {" "}
                  Dev.to username{" "}
                </label>
                <Input type="text" placeholder="Dev.to Username" value={username} onChange={(e: any) => dispatch(setUsername(e.target.value)) }/>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {" "}
                  Choose a theme{" "}
                </label>

                <Select
                  options={getThemes()}
                  onChange={(value) => dispatch(setTheme(value))}
                  value={theme}
                  primaryColor={""}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {" "}
                  Choose a year{" "}
                </label>

                <Select
                  options={getYears()}
                  onChange={(value) => dispatch(setYear(value))}
                  value={year}
                  primaryColor={""}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default GenerateStats;
