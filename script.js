const pageName = "flyer_landing_test";

window.dataLayer = window.dataLayer || [];

function pushAnalyticsEvent(eventName, detail = {}) {
  const payload = {
    event: eventName,
    page_name: pageName,
    timestamp: new Date().toISOString(),
    ...detail,
  };

  window.dataLayer.push(payload);
  console.info("[ADX Flyer Test]", payload);
}

pushAnalyticsEvent("flyer_page_view", {
  source_hint: "flyer",
});

document.querySelectorAll("[data-track]").forEach((target) => {
  target.addEventListener("click", () => {
    pushAnalyticsEvent("flyer_site_interaction", {
      action: target.dataset.track,
      label: target.textContent.trim().replace(/\s+/g, " "),
    });
  });
});
