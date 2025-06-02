declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"ship": {
"experimented-svelte-5-runes-new-api.mdx": {
	id: "experimented-svelte-5-runes-new-api.mdx";
  slug: "experimented-svelte-5-runes-new-api";
  body: string;
  collection: "ship";
  data: InferEntrySchema<"ship">
} & { render(): Render[".mdx"] };
"fresh-look-sticai-prompts.mdx": {
	id: "fresh-look-sticai-prompts.mdx";
  slug: "fresh-look-sticai-prompts";
  body: string;
  collection: "ship";
  data: InferEntrySchema<"ship">
} & { render(): Render[".mdx"] };
"how-the-sticai-prompt-builder-saves-you-time-and-effort.mdx": {
	id: "how-the-sticai-prompt-builder-saves-you-time-and-effort.mdx";
  slug: "how-the-sticai-prompt-builder-saves-you-time-and-effort";
  body: string;
  collection: "ship";
  data: InferEntrySchema<"ship">
} & { render(): Render[".mdx"] };
"introducing-spotlight.mdx": {
	id: "introducing-spotlight.mdx";
  slug: "introducing-spotlight";
  body: string;
  collection: "ship";
  data: InferEntrySchema<"ship">
} & { render(): Render[".mdx"] };
"launching-my-personal-website.mdx": {
	id: "launching-my-personal-website.mdx";
  slug: "launching-my-personal-website";
  body: string;
  collection: "ship";
  data: InferEntrySchema<"ship">
} & { render(): Render[".mdx"] };
"seo-win-fixing-my-astro-sitemap.mdx": {
	id: "seo-win-fixing-my-astro-sitemap.mdx";
  slug: "seo-win-fixing-my-astro-sitemap";
  body: string;
  collection: "ship";
  data: InferEntrySchema<"ship">
} & { render(): Render[".mdx"] };
};
"thought": {
"ai-is-learning-taste.mdx": {
	id: "ai-is-learning-taste.mdx";
  slug: "ai-is-learning-taste";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"ai-never-sleeps.mdx": {
	id: "ai-never-sleeps.mdx";
  slug: "ai-never-sleeps";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"design-lessons-chinese-tea-cups.mdx": {
	id: "design-lessons-chinese-tea-cups.mdx";
  slug: "design-lessons-chinese-tea-cups";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"dont-ask-what-to-learn.mdx": {
	id: "dont-ask-what-to-learn.mdx";
  slug: "dont-ask-what-to-learn";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"screenshots-or-it-didnt-happen.mdx": {
	id: "screenshots-or-it-didnt-happen.mdx";
  slug: "screenshots-or-it-didnt-happen";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"slow-software-is-rude.mdx": {
	id: "slow-software-is-rude.mdx";
  slug: "slow-software-is-rude";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"stop-asking-for-design-feedback.mdx": {
	id: "stop-asking-for-design-feedback.mdx";
  slug: "stop-asking-for-design-feedback";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"the-next-thing.mdx": {
	id: "the-next-thing.mdx";
  slug: "the-next-thing";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"unpopular-bond-in-opensource.mdx": {
	id: "unpopular-bond-in-opensource.mdx";
  slug: "unpopular-bond-in-opensource";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
"why-greatness-cannot-be-planned.mdx": {
	id: "why-greatness-cannot-be-planned.mdx";
  slug: "why-greatness-cannot-be-planned";
  body: string;
  collection: "thought";
  data: InferEntrySchema<"thought">
} & { render(): Render[".mdx"] };
};
"whoami": {
"intro.md": {
	id: "intro.md";
  slug: "intro";
  body: string;
  collection: "whoami";
  data: InferEntrySchema<"whoami">
} & { render(): Render[".md"] };
};
"writing": {
"building-side-projects.mdx": {
	id: "building-side-projects.mdx";
  slug: "building-side-projects";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] };
"sanju's-internet-space.mdx": {
	id: "sanju's-internet-space.mdx";
  slug: "sanjus-internet-space";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
