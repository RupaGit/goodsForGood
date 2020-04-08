import React from "react";
import { Feed } from "semantic-ui-react";

// export  function GFGFeed({children}) {
//     return <Feed> {children}</Feed>;
// }

// export function GFGFeedContent({children}) {
//     return <Feed.Content> {children}</Feed.Content>;
// }

// export function GFGFeedSummary({children}) {
//     return <Feed.Summary> {children}</Feed.Summary>;
// }

export default function GFGFeed({ children }) {
    return <Feed> {children}</Feed>;
}