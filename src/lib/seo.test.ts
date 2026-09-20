import { absoluteUrl, createMetadata } from "./seo";

describe("seo helpers", () => {
  it("builds absolute URLs from the site URL", () => {
    expect(absoluteUrl("/radiologie/ai")).toMatch(/^https:\/\/.+\/radiologie\/ai$/);
    expect(absoluteUrl("/")).toMatch(/^https:\/\/[^/]+\/$/);
  });

  it("creates canonical, Open Graph and Twitter metadata", () => {
    const metadata = createMetadata({
      title: "Nexrad AI",
      description: "Description",
      path: "/radiologie/ai",
    });
    expect(metadata.alternates?.canonical).toBe(absoluteUrl("/radiologie/ai"));
    expect(metadata.openGraph?.title).toBe("Nexrad AI | NEXRAD");
    expect(metadata.twitter?.description).toBe("Description");
  });

  it("supports absolute titles and noindex", () => {
    const metadata = createMetadata({
      title: "NEXRAD",
      description: "d",
      path: "/",
      absoluteTitle: true,
      noIndex: true,
    });
    expect(metadata.title).toEqual({ absolute: "NEXRAD" });
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});
