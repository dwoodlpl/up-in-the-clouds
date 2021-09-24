import React from "react";
import { IntlProvider } from "react-intl";
import ContentExplorer from "box-ui-elements/es/elements/content-explorer";
import messages from "box-ui-elements/i18n/en-US";
import dev_secure from "../data/dev_secure";

function DocumentScanner(props) {
  return (
    <div>
      <ContentExplorer
        language="en-US"
        messages={messages}
        token={dev_secure.devToken}
        contentPreviewProps={{
          contentSidebarProps: {
            hasActivityFeed: true,
            hasSkills: true,
            hasMetadata: true,
            detailsSidebarProps: {
              hasProperties: true,
              hasNotices: true,
              hasAccessStats: true,
              hasVersions: true,
            },
          },
        }}
      />
    </div>
  );
}

export default DocumentScanner;
