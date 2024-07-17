import { useSection } from "deco/hooks/useSection.ts";
import type { AppContext } from "../apps/site.ts";

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
}

export async function action(
  props: Props,
  req: Request,
  ctx: AppContext
): Promise<Props> {
  return { ...props, title: "Hello" };
}

export function loader(props: Props) {
  return props;
}

export default function HelloSection({ title = "" }: Props) {
  const generateSectionUrl = (props: Props, otherProps: { href?: string } = {}) => {
    const sectionProps = {
      ...otherProps,
      props,
    };
    return useSection(sectionProps);
  };

  return (
    <section>
      <div class="container mx-auto py-12">
        <h2 class="text-3xl font-bold mb-4">{title}</h2>
        <button
          class="btn btn-primary"
          hx-get={generateSectionUrl({ title: "Hello" })}
          hx-target="closest section"
          hx-swap="innerHTML"
        >
          Click me
        </button>
      </div>
    </section>
  );
}