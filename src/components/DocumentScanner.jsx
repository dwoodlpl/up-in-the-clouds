import React from "react";
import { IntlProvider } from "react-intl";
import ContentExplorer from "box-ui-elements/es/elements/content-explorer";
import ContentUploader from "box-ui-elements/es/elements/content-uploader";
import messages from "box-ui-elements/i18n/en-US";
import dev_secure from "../data/secure.js";
// import dev_secure from "./data/dev_secure.js";

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
      <ContentUploader
        language="en-US"
        messages={messages}
        token={dev_secure.devToken}
      />
    </div>
  );
}

export default DocumentScanner;
