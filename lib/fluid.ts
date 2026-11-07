/**
 * The design was drawn on a 2560px-wide frame.
 * fluid(20) === exactly 20px at 2560px wide, scaling down proportionally
 * on smaller screens, never below `minPx` (keeps text readable on laptops/phones).
 */
export const fluid = (designPx: number, minPx = 0): string =>
  `clamp(${minPx}px, ${((designPx / 2560) * 100).toFixed(4)}vw, ${designPx}px)`;

/** Horizontal page gutter (design: 154px on a 2560px frame). */
export const GUTTER = 'max(16px, 6vw)';

/**
 * ONE place to control the vertical padding inside the content sections
 * (categories, shop by category, how it works, trusted teams, quote).
 * Gap between two neighbouring sections = SECTION_PB of the upper + SECTION_PT of the lower.
 * Make these smaller to tighten the whole page, larger to loosen it.
 */
export const SECTION_PT = { xs: 7, sm: 8, lg: fluid(100, 56) };
export const SECTION_PB = { xs: 7, sm: 8, lg: fluid(100, 56) };