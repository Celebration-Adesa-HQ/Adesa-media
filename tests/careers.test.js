import assert from "node:assert/strict";
import test from "node:test";

import { careersConfig } from "../config/careers.js";
import {
  buildApplicationMailto,
  buildPositionMailto,
  createJobPostingSchema,
  getCareerListingsState,
} from "../lib/careers.js";

test("the initial careers configuration renders the intentional empty state", () => {
  assert.equal(getCareerListingsState(careersConfig.openPositions), "empty");
  assert.deepEqual(careersConfig.openPositions, []);
});

test("a verified position switches the listing state and creates its application subject", () => {
  const positions = [
    {
      id: "media-planner",
      title: "Media Planner",
      department: "Media",
      location: "Lagos",
      employmentType: "FULL_TIME",
      summary: "Plan accountable campaigns across channels.",
    },
  ];

  assert.equal(getCareerListingsState(positions), "available");

  const mailto = new URL(
    buildPositionMailto(careersConfig.applicationEmail, positions[0].title),
  );
  assert.equal(mailto.protocol, "mailto:");
  assert.equal(mailto.pathname, careersConfig.applicationEmail);
  assert.equal(
    mailto.searchParams.get("subject"),
    "Adesa Media Application — Media Planner",
  );
});

test("the general application mailto contains the complete approved template", () => {
  const mailto = new URL(
    buildApplicationMailto(
      careersConfig.applicationEmail,
      careersConfig.generalApplicationSubject,
      careersConfig.generalApplicationBody,
    ),
  );

  assert.equal(mailto.pathname, "admcareer@adesahq.com");
  assert.equal(
    mailto.searchParams.get("subject"),
    "Adesa Media General Application — [Your Desired Role]",
  );
  assert.equal(
    mailto.searchParams.get("body"),
    careersConfig.generalApplicationBody,
  );
  assert.match(mailto.searchParams.get("body"), /I have attached my CV/);
});

test("JobPosting schema is created from a configured real position", () => {
  const position = {
    id: "media-planner",
    title: "Media Planner",
    department: "Media",
    location: "Lagos",
    employmentType: "FULL_TIME",
    summary: "Plan accountable campaigns across channels.",
  };
  const schema = createJobPostingSchema(position, {
    name: "Adesa Media",
    url: "https://www.adesamedia.com",
    logo: "/Adesa-media-logo-black.png",
  });

  assert.equal(schema["@type"], "JobPosting");
  assert.equal(schema.title, "Media Planner");
  assert.equal(schema.jobLocation.address.addressLocality, "Lagos");
});
