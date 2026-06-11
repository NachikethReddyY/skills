# Components
---
title: "Charts"
source: "https://developer.apple.com/design/human-interface-guidelines/charts"
author:
published:
created: 2026-06-11
description: "Organize data in a chart to communicate information with clarity and visual appeal."
tags:
  - "clippings"
---
![A stylized representation of a bar chart. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/6bb7599ca11e8ab3039e67cf6f4afba8/components-charts-intro~dark%402x.png)

An effective chart highlights a few key pieces of information in a dataset, helping people gain insights and make decisions. For example, people might use a chart to:

- Learn how upcoming weather conditions might affect their plans.
- Analyze stock prices to understand past performance and discover trends.
- Review fitness data to monitor their progress and set new goals.

To learn about designing charts to enhance your experience, see [Charting data](https://developer.apple.com/design/human-interface-guidelines/charting-data); for developer guidance, see [Creating a chart using Swift Charts](https://developer.apple.com/documentation/Charts/Creating-a-chart-using-Swift-Charts).

## Anatomy

A chart comprises several graphical elements that depict the values in a dataset and convey information about them.

![A bar chart with callouts that identify chart components, such as axes, grid lines, marks, ticks, axis value labels, and the overall plot area.](https://docs-assets.developer.apple.com/published/3de26e58edfbccc8bd375ae49b52c856/charts-anatomy~dark%402x.png)

A *mark* is a visual representation of a data value. You create a chart by supplying one or more series of data values, assigning each value to a mark. To specify the style of chart you want to display — such as bar chart, line chart, or scatter plot — you choose a mark type, such as bar, line, or point (for guidance, see [Marks](https://developer.apple.com/design/human-interface-guidelines/charts#Marks)). The general task of depicting individual data values in a chart is called *plotting*, and the area that contains the marks is called the *plot area*.

To depict a value, each type of mark uses visual attributes that are determined by a scale, which maps data values like numbers, dates, or categories to visual characteristics like position, color, or height. For example, a bar mark can use a particular height to represent the magnitude of a value and a particular position to represent the time at which the value occurred.

To give people the context they need to interpret a chart’s visual characteristics, you supply descriptive content that can take a few different forms.

You can use an *axis* to help define a frame of reference for the data represented by a set of marks. Many charts display a pair of axes at the edges of the plot area — one horizontal and one vertical — where each axis represents a variable like time, amount, or category.

An axis can include *ticks*, which are reference points that help people visually locate the position of important values along the axis, such as a 0, 50%, and 100%. Many charts display *grid lines* that each extend from a tick across the plot area to help people visually estimate a data value when its mark isn’t near an axis.

You also have multiple ways to describe chart elements to help people interpret the data and to highlight the key information you want to communicate. For example, you can supply *labels* that name items like axes, grid lines, ticks, or marks, and *accessibility labels* that describe chart elements for people who use assistive technologies. To provide context and additional details, you can create descriptive titles, subtitles, and annotations. When needed, you can also create a legend, which describes chart properties that aren’t related to a mark’s position, such as the use of color or shape to denote different value categories.

Clear, accurate descriptions can help make a chart more approachable and accessible; to learn about additional ways to improve the accessibility of your chart, see [Enhancing the accessibility of a chart](https://developer.apple.com/design/human-interface-guidelines/charts#Enhancing-the-accessibility-of-a-chart).

## Marks

**Choose a mark type based on the information you want to communicate about the data.** Some of the most familiar mark types are bar, line, and point; for developer guidance on these and other mark types, see [Swift Charts](https://developer.apple.com/documentation/Charts).

*Bar* marks work well in charts that help people compare values in different categories or view the relative proportions of various parts in a whole. When used to help people understand data that changes over time, bar charts work especially well when each value can represent a sum, like the total number of steps taken in a day.

![A bar chart that depicts the number of steps for each day in a month.](https://docs-assets.developer.apple.com/published/39f4f8c192efd1d33a906e39bea73dce/charts-bar-marks~dark%402x.png)

*Line* marks can also show how values change over time. In a line chart, a line connects all data values in one series of data. The slope of the line reveals the magnitude of change between data values and can help people visualize overall trends.

![A line chart that depicts the performance of a stock over a five-year period.](https://docs-assets.developer.apple.com/published/10fe773a728ec3c01df501add3c279d1/charts-line-marks~dark%402x.png)

*Point* marks help you depict individual data values as visually distinct marks. A set of point marks can show how two different properties of your data relate to each other, helping people inspect individual data values and identify outliers and clusters.

![A point-mark chart that depicts per-day readings of heartbeats per minute over a 5 1/2-month period.](https://docs-assets.developer.apple.com/published/7825c884455b8ad307bd7915398cd117/charts-point-marks~dark%402x.png)

**Consider combining mark types when it adds clarity to your chart.** For example, if you use a line chart to show a change over time, you might want to add point marks on top of the line to highlight individual data points. By combining points with a line, you can help people understand the overall trend while also drawing their attention to individual values.

## Axes

**Use a fixed or dynamic axis range depending on the meaning of your chart.** In a *fixed* range, the upper and lower bounds of the axis never change, whereas in a *dynamic* range, the upper and lower bounds can vary with the current data. Consider using a fixed range when specific minimum and maximum values are meaningful for all possible data values. For example, people expect a chart that shows a battery’s current charge to have a minimum value of 0% (completely empty) and a maximum value of 100% (completely full).

![An illustration of Battery Settings, which uses a chart to depict battery charge over time, where the charge can vary within a fixed range from 0% to 100%.](https://docs-assets.developer.apple.com/published/d6612be1eb9a6669dbe0fe35371381af/charts-fixed-range-axis~dark%402x.png)

In contrast, consider using a dynamic range when the possible data values can vary widely and you want the marks to fill the available plot area. For example, the upper bound of the Y axis range in the Health app’s Steps chart varies so that the largest number of steps in a particular time period is close to the top of the chart.

![An illustration of the Steps chart in the Health app, which shows the average number of steps per day for a single week.](https://docs-assets.developer.apple.com/published/3883d2286156ff2b936be780465fb866/charts-dynamic-range-axis-small~dark%402x.png)

Weekly range

![An illustration of the Steps chart in the Health app, which shows the average number of steps per day in a one-month period.](https://docs-assets.developer.apple.com/published/24b79e1217cd2652e04e7e62a3e812d0/charts-dynamic-range-axis-large~dark%402x.png)

Monthly range

**Define the value of the lower bound based on mark type and chart usage.** For example, bar charts can work well when you use zero for the lower bound of the Y axis, because doing so lets people visually compare the relative heights of individual bars to get a reasonable estimate of their values. In contrast, defining a lower bound of zero can sometimes make meaningful differences between values more difficult to discern. For example, a heart rate chart that always uses zero for the lower bound could obscure important differences between resting and active readings because the differences occur in a range that’s far from zero.

**Prefer familiar sequences of values in the tick and grid-line labels for an axis.** For example, if you use a common number sequence like 0, 5, 10, etc., people are likely to know at a glance that each tick value equals the previous value plus five. Even though a sequence like 1, 6, 11, etc., follows the same rule, it’s not common, so most people are likely to spend extra time thinking about the interval between values.

**Tailor the appearance of grid lines and labels to a chart’s use cases.** Too many grid lines can be visually overwhelming, distracting people from the data; too few grid lines can make it difficult to estimate a mark’s value. To help you determine the appropriate density and visual weight of these elements, consider a chart’s context in the interface, the interactions you support, and the tasks people can do in the chart. For example, if people can inspect individual data points by interacting with a chart, you might use fewer grid lines and light label colors to ensure the data remains visually prominent.

## Descriptive content

**Write descriptions that help people understand what a chart does before they view it.** When you provide information-rich titles and labels that describe the purpose and functionality of a chart, you give people the context they need before they dive in and examine the details. Providing context in this way is especially important for VoiceOver users and those with certain types of cognitive disabilities because they rely on your descriptions to understand the purpose and primary message of your chart before they decide to investigate it further.

**Summarize the main message of your chart to help make it approachable and useful for everyone.** Although a primary reason to use a chart is to display the data that supports the main message, it’s essential to summarize key information so that people can grasp it quickly. For example, Weather provides a title and subtitle that succinctly describe the expected precipitation for the next hour, giving people the most important information without requiring them to examine the details of the chart.

![An illustration of the rain forecast for the next hour in the Weather app, which uses succinct, plain language to describe the expected precipitation.](https://docs-assets.developer.apple.com/published/28ee38d191d2f9816ded3e735bfee4a7/charts-descriptive-content%402x.png)

## Best practices

**Establish a consistent visual hierarchy that helps communicate the relative importance of various chart elements.** Typically, you want the data itself to be most prominent, while letting the descriptions and axes provide additional context without competing with the data.

**In a compact environment, maximize the width of the plot area to give people enough space to comfortably examine a chart.** To help important data fit well in a given width, ensure that labels on a vertical axis are as short as possible without losing clarity. You might also consider describing units in other areas of the chart, such as in a title, and placing a longer axis label, such as a category name, inside the plot area when doing so doesn’t obscure important information.

**Make every chart in your app accessible.** Charts — like all infographics — need to be fully accessible to everyone, regardless of how they perceive content. For example, it’s essential to support VoiceOver, which describes onscreen content to help people get information and navigate without needing to see the screen (to learn more about VoiceOver, see [Vision](https://www.apple.com/accessibility/vision/)). In addition to supplying accessibility labels that describe the components of your chart, you can enhance the VoiceOver experience by also using Audio Graphs. [Audio graphs](https://developer.apple.com/documentation/Accessibility/audio-graphs) provides chart information to VoiceOver, which constructs a set of tones that audibly represent a chart’s data values and their trend; it also lets you present high-level text summaries that provide additional context. For guidance, see [Enhancing the accessibility of a chart](https://developer.apple.com/design/human-interface-guidelines/charts#Enhancing-the-accessibility-of-a-chart).

**Let people interact with the data when it makes sense, but don’t require interaction to reveal critical information.** In Stocks, for example, people are often most interested in a stock’s performance over time, so the app displays a line graph that depicts performance during the time period people choose, such as one day, three months, or five years. If people want to explore additional details, they can drag a vertical indicator through the line graph, revealing the value at the selected time.

**Make it easy for everyone to interact with a chart.** Sometimes, chart marks are too small to target with a finger or a pointer, making your chart hard to use for people with reduced motor control and uncomfortable for everyone. When this is the case, consider expanding the hit target to include the entire plot area, letting people scrub across the area to reveal various values.

**Make an interactive chart easy to navigate when using keyboard commands (including full keyboard access) or Switch Control.** By default, these input types tend to visit individual onscreen elements in a linear sequence, such as the sequence of values in a data file. If you want to provide a custom navigation experience in your chart, here are two main ways to do so. The first way is to use accessibility APIs (such as [`accessibilityRespondsToUserInteraction(_:)`](https://developer.apple.com/documentation/SwiftUI/View/accessibilityRespondsToUserInteraction\(_:\))) to specify a logical and predictable path through your chart’s information. For example, you might want to let people navigate along the X axis instead of jumping back and forth. The second way — which is particularly useful if you need to present a very large dataset — is to let people move focus among subsets of values instead of navigating through all individual data points. Note that both of these customizations can also enhance the VoiceOver experience, even when your chart isn’t interactive. For guidance, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility).

**Help people notice important changes in a chart.** For example, if people don’t notice when marks or axes change, they can misread a chart. Animating such changes can help people notice them, but you need to highlight the changes in other ways, too, to ensure that VoiceOver users and people who turn off animations know about them. For developer guidance, see [`UIAccessibility.Notification`](https://developer.apple.com/documentation/UIKit/UIAccessibility/Notification) (UIKit) or [`NSAccessibility.Notification`](https://developer.apple.com/documentation/AppKit/NSAccessibility-swift.struct/Notification) (AppKit).

**Align a chart with surrounding interface elements.** For example, it often works well to align the leading edge of a chart with the leading edge of other views in a screen. One way to maintain a clean leading edge in a chart is to display the label for each vertical grid line on its trailing side. You might also consider shifting the Y axis to the trailing side of the chart so that its tick labels don’t protrude past the chart’s leading edge. If you end up with a label that doesn’t appear to be associated with anything, you can use a tick to anchor it to a grid line.

## Color

As in all other parts of your interface, using color in a chart can help you clarify information, evoke your brand, and provide visual continuity. For general guidance on using color in ways that everyone can appreciate, see [Inclusive color](https://developer.apple.com/design/human-interface-guidelines/color#Inclusive-color).

**Avoid relying solely on color to differentiate between different pieces of data or communicate essential information in a chart.** Using meaningful color in a chart works well to highlight differences and elevate key details, but it’s crucial to include alternative ways to convey this information so that people can use your chart regardless of whether they can discern colors. One way to supplement color is to use different shapes or patterns to depict different parts of data. For example, in addition to using red and black or red and white colors, Health uses two different shapes in the point marks that represent the two components of blood pressure.

![An illustration of a blood pressure chart in the Health app that uses a red circle to represent systolic values and a black or white diamond to represent diastolic values.](https://docs-assets.developer.apple.com/published/73a60c22eff270485906352366bda147/charts-colors~dark%402x.png)

**Aid comprehension by adding visual separation between contiguous areas of color.** For example, in a bar chart that stacks marks in a single row or column, it’s common to assign a different color to each mark. In this design, adding separators between the marks can help people distinguish individual ones.

![An illustration of iPhone Storage Settings, which uses a single bar mark containing several segments of different colors to show the relative space taken by items such as music, apps, and photos. The bar includes a narrow strip of empty space between each pair of segments.](https://docs-assets.developer.apple.com/published/c974923cbeed1e9559edc5bd098cd289/charts-colors-stacked~dark%402x.png)

## Enhancing the accessibility of a chart

When you use Swift Charts to create a chart, you get a default implementation of [Audio graphs](https://developer.apple.com/documentation/Accessibility/audio-graphs), in addition to a default accessibility element for each mark (or group of marks) that describes its value.

**Consider using Audio Graphs to give VoiceOver users more information about your chart.** You can customize the default Audio Graphs implementation that Swift Charts provides by supplying a chart title and descriptive summary that VoiceOver speaks to help people understand the purpose and main features of your chart. If you don’t use Audio Graphs, you need to provide an overview of the chart’s structure and purpose. For example, you need to identify the chart’s type — such as bar or line — explain what each axis represents, and describe details like the upper and lower axis bounds.

**Write accessibility labels that support the purpose of your chart.** For example, Maps shows elevation for a cycling route using a chart that represents the change in elevation over the course of the route. The purpose of the chart is to give people a sense of the terrain for the entire route, not to provide individual elevations. For this reason, Maps provides accessibility labels that summarize the elevation changes over a portion of the route, rather than providing labels for each individual moment. In contrast, Health offers an accessibility label for each bar in the Steps chart, because the purpose of the chart is to give people their actual step count for each tracking period.

![An illustration of a chart in Maps that shows the range of elevations over the total distance of the trip. A VoiceOver focus indicator is visible on top of the chart, containing approximately one-fifth of the total distance and elevation.](https://docs-assets.developer.apple.com/published/60800b6f28846f4d56e9300a98190161/charts-bar-chart-with-voiceover-focus~dark%402x.png)

For the focused section of this cycling elevation chart, VoiceOver provides information about that portion of the route, including distance and elevation changes.

The following guidelines can help you write useful accessibility labels for chart elements.

- **Prioritize clarity and comprehensiveness.** In general, it’s rarely enough to merely report a data value unless you also include context that helps people understand it, like the date or location that’s associated with it. Aim to concisely describe the context for a value without repeating information that people can get in other ways, like an axis name that Audio Graphs or your overview provides. Follow context-setting information with a succinct description of the element’s details.
- **Avoid using subjective terms.** Subjective words — like rapidly, gradually, and almost — communicate your interpretation of the data. To help people form their own interpretations, use actual values in your descriptions.
- **Maximize clarity in data descriptions by avoiding potentially ambiguous formats and abbreviations.** For example, using “June 6” is clearer than using “6/6”; similarly, spelling out “60 minutes” or “60 meters” is clearer than using the abbreviation “60m.”
- **Describe what the chart’s details represent, not what they look like.** Consider a chart that uses red and blue colors to help people visually distinguish two different data series. It’s crucial to create accessibility labels that identify what each series represents, but describing the colors that visually represent them can add unnecessary information and be distracting.
- **Be consistent throughout your app when referring to a specific axis.** For example, if you always mention the X axis first, people can spend less time figuring out which axis is relevant in a description.

**Hide visible text labels for axes and ticks from assistive technologies.** Axis and tick labels help people visually assess trends in a chart and estimate mark values. VoiceOver users can get mark values and trend information through accessibility labels and Audio Graphs, so they don’t generally need the content in the visible labels.

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS.*

### watchOS

**In general, avoid requiring complex chart interactions in your watchOS app.** As much as possible, prefer displaying useful information people can get at a glance and supporting simple interactions when they add value. If you also offer a version of your app in another platform, consider using it to display more details and to support additional interactions with your chart. For example, Heart Rate in watchOS displays a chart of the wearer’s heart-rate data for the current day, whereas the Health app on iPhone displays heart-rate data for several different periods of time and lets people examine individual marks.

## Resources

#### Related

[Charting data](https://developer.apple.com/design/human-interface-guidelines/charting-data)

#### Developer documentation

[Swift Charts](https://developer.apple.com/documentation/Charts)

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| September 23, 2022 | New page. |


---


---
title: "Image views"
source: "https://developer.apple.com/design/human-interface-guidelines/image-views"
author:
published:
created: 2026-06-11
description: "An image view displays a single image — or in some cases, an animated sequence of images — on a transparent or opaque background."
tags:
  - "clippings"
---
![A stylized representation of a photo. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/9b7bd4cdf8b0902c9432643236c14fec/components-image-view-intro~dark%402x.png)

Within an image view, you can stretch, scale, size to fit, or pin the image to a specific location. Image views are typically not interactive.

## Best practices

**Use an image view when the primary purpose of the view is simply to display an image.** In rare cases where you might want an image to be interactive, configure a system-provided [button](https://developer.apple.com/design/human-interface-guidelines/buttons) to display the image instead of adding button behaviors to an image view.

**If you want to display an icon in your interface, consider using a symbol or interface icon instead of an image view.** [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) provides a large library of streamlined, vector-based images that you can render with various colors and opacities. An [icon](https://developer.apple.com/design/human-interface-guidelines/icons) (also called a glyph or template image) is typically a bitmap image in which the nontransparent pixels can receive color. Both symbols and interface icons can use the accent colors people choose.

## Content

An image view can contain rich image data in various formats, like PNG, JPEG, and PDF. For more guidance, see [Images](https://developer.apple.com/design/human-interface-guidelines/images).

**Take care when overlaying text on images.** Compositing text on top of images can decrease both the clarity of the image and the legibility of the text. To help improve the results, ensure the text contrasts well with the image, and consider ways to make the text object stand out, like adding a text shadow or background layer.

**Aim to use a consistent size for all images in an animated sequence.** When you prescale images to fit the view, the system doesn’t have to perform any scaling. In cases where the system must do the scaling, performance is generally better when all images are the same size and shape.

## Platform considerations

*No additional considerations for iOS or iPadOS.*

### macOS

**If your app needs an editable image view, use an image well.** An [image well](https://developer.apple.com/design/human-interface-guidelines/image-wells) is an image view that supports copying, pasting, dragging, and using the Delete key to clear its content.

**Use an image button instead of an image view to make a clickable image.** An [image button](https://developer.apple.com/design/human-interface-guidelines/buttons#Image-buttons) contains an image or icon, appears in a view, and initiates an instantaneous app-specific action.

### tvOS

Many tvOS images combine multiple layers with transparency to create a feeling of depth. For guidance, see [Layered images](https://developer.apple.com/design/human-interface-guidelines/images#Layered-images).

### visionOS

Windows in visionOS apps and games can use image views to display 2D and stereoscopic images, as well as spatial photos. If your app uses RealityKit, you can also display images of any type outside of image views next to 3D content, or generate a spatial scene from an existing 2D image. For design guidance, see [Images > visionOS](https://developer.apple.com/design/human-interface-guidelines/images#visionOS); for developer guidance, see [`ImagePresentationComponent`](https://developer.apple.com/documentation/RealityKit/ImagePresentationComponent).

For guidance on presenting other 3D content in a window or volume, see [Windows > visionOS](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS).

### watchOS

**Use SwiftUI to create animations when possible.** Alternatively, you can use WatchKit to animate a sequence of images within an image element if necessary. For developer guidance, see [`WKImageAnimatable`](https://developer.apple.com/documentation/WatchKit/WKImageAnimatable).

## Resources

#### Related

[Images](https://developer.apple.com/design/human-interface-guidelines/images)

[Image wells](https://developer.apple.com/design/human-interface-guidelines/image-wells)

[Image buttons](https://developer.apple.com/design/human-interface-guidelines/buttons#Image-buttons)

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols)

#### Developer documentation

[`Image`](https://developer.apple.com/documentation/SwiftUI/Image) — SwiftUI

[`UIImageView`](https://developer.apple.com/documentation/UIKit/UIImageView) — UIKit

[`NSImageView`](https://developer.apple.com/documentation/AppKit/NSImageView) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 21, 2023 | Updated to include guidance for visionOS. |


---


---
title: "Text views"
source: "https://developer.apple.com/design/human-interface-guidelines/text-views"
author:
published:
created: 2026-06-11
description: "A text view displays multiline, styled text content, which can optionally be editable."
tags:
  - "clippings"
---
![A stylized representation of a field containing text. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/7a55be05566e0365a6f370a163c33e56/components-text-view-intro~dark%402x.png)

Text views can be any height and allow scrolling when the content extends outside of the view. By default, content within a text view is aligned to the leading edge and uses the system label color. In iOS, iPadOS, and visionOS, if a text view is editable, a keyboard appears when people select the view.

## Best practices

**Use a text view when you need to display text that’s long, editable, or in a special format.** Text views differ from [text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields) and [labels](https://developer.apple.com/design/human-interface-guidelines/labels) in that they provide the most options for displaying specialized text and receiving text input. If you need to display a small amount of text, it’s simpler to use a label or — if the text is editable — a text field.

**Keep text legible.** Although you can use multiple fonts, colors, and alignments in creative ways, it’s essential to maintain the readability of your content. It’s a good idea to adopt Dynamic Type so your text still looks good if people change text size on their device. Be sure to test your content with accessibility options turned on, such as bold text. For guidance, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) and [Typography](https://developer.apple.com/design/human-interface-guidelines/typography).

**Make useful text selectable.** If a text view contains useful information such as an error message, a serial number, or an IP address, consider letting people select and copy it for pasting elsewhere.

## Platform considerations

*No additional considerations for macOS, visionOS, or watchOS.*

### iOS, iPadOS

**Show the appropriate keyboard type.** Several different keyboard types are available, each designed to facilitate a different type of input. To streamline data entry, the keyboard you display when editing a text view needs to be appropriate for the type of content. For guidance, see [Virtual keyboards](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards).

### tvOS

You can display text in tvOS using a text view. Because text input in tvOS is minimal by design, tvOS uses [text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields) for editable text instead.

## Resources

#### Related

[Labels](https://developer.apple.com/design/human-interface-guidelines/labels)

[Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields)

[Combo boxes](https://developer.apple.com/design/human-interface-guidelines/combo-boxes)

#### Developer documentation

[`Text`](https://developer.apple.com/documentation/SwiftUI/Text) — SwiftUI

[`UITextView`](https://developer.apple.com/documentation/UIKit/UITextView) — UIKit

[`NSTextView`](https://developer.apple.com/documentation/AppKit/NSTextView) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 5, 2023 | Updated guidance to reflect changes in watchOS 10. |


---

---
title: "Web views"
source: "https://developer.apple.com/design/human-interface-guidelines/web-views"
author:
published:
created: 2026-06-11
description: "A web view loads and displays rich web content, such as embedded HTML and websites, directly within your app."
tags:
  - "clippings"
---
![A stylized representation of a compass icon. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/c173ae37f21b7f0ea59e6a5b71e5f91c/components-web-view-intro~dark%402x.png)

For example, Mail uses a web view to show HTML content in messages.

## Best practices

**Support forward and back navigation when appropriate.** Web views support forward and back navigation, but this behavior isn’t available by default. If people are likely to use your web view to visit multiple pages, allow forward and back navigation, and provide corresponding controls to initiate these features.

**Avoid using a web view to build a web browser.** Using a web view to let people briefly access a website without leaving the context of your app is fine, but Safari is the primary way people browse the web. Attempting to replicate the functionality of Safari in your app is unnecessary and discouraged.

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, or visionOS. Not supported in tvOS or watchOS.*

## Resources

#### Related

[Webkit.org](https://webkit.org/)

#### Developer documentation

[`WKWebView`](https://developer.apple.com/documentation/WebKit/WKWebView) — WebKit

--

# Layout and organization
---
title: "Boxes"
source: "https://developer.apple.com/design/human-interface-guidelines/boxes"
author:
published:
created: 2026-06-11
description: "A box creates a visually distinct group of logically related information and components."
tags:
  - "clippings"
---
![A stylized representation of a group of interface elements within a rounded rectangle. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/13f1f682eb5fc6ed6cfbb846c9402d8f/components-box-intro~dark%402x.png)

By default, a box uses a visible border or background color to separate its contents from the rest of the interface. A box can also include a title.

## Best practices

**Prefer keeping a box relatively small in comparison with its containing view.** As a box’s size gets close to the size of the containing window or screen, it becomes less effective at communicating the separation of grouped content, and it can crowd other content.

**Consider using padding and alignment to communicate additional grouping within a box.** A box’s border is a distinct visual element — adding nested boxes to define subgroups can make your interface feel busy and constrained.

## Content

**Provide a succinct introductory title if it helps clarify the box’s contents.** The appearance of a box helps people understand that its contents are related, but it might make sense to provide more detail about the relationship. Also, a title can help VoiceOver users predict the content they encounter within the box.

**If you need a title, write a brief phrase that describes the contents.** Use sentence-style capitalization. Avoid ending punctuation unless you use a box in a settings pane, where you append a colon to the title.

## Platform considerations

*No additional considerations for visionOS. Not supported in tvOS or watchOS.*

### iOS, iPadOS

By default, iOS and iPadOS use the secondary and tertiary background [colors](https://developer.apple.com/design/human-interface-guidelines/color) in boxes.

### macOS

By default, macOS displays a box’s title above it.

## Resources

#### Related

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[`GroupBox`](https://developer.apple.com/documentation/SwiftUI/GroupBox) — SwiftUI

[`NSBox`](https://developer.apple.com/documentation/AppKit/NSBox) — AppKit

---


---
title: "Collections"
source: "https://developer.apple.com/design/human-interface-guidelines/collections"
author:
published:
created: 2026-06-11
description: "A collection manages an ordered set of content and presents it in a customizable and highly visual layout."
tags:
  - "clippings"
---
![A stylized representation of eight image icons, separated into two rows of four. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/e5f3e73381ccffd60042ceeae8a5c025/components-collection-view-intro~dark%402x.png)

Generally speaking, collections are ideal for showing image-based content.

## Best practices

**Use the standard row or grid layout whenever possible.** Collections display content by default in a horizontal row or a grid, which are simple, effective appearances that people expect. Avoid creating a custom layout that might confuse people or draw undue attention to itself.

**Consider using a table instead of a collection for text.** It’s generally simpler and more efficient to view and digest textual information when it’s displayed in a scrollable list.

**Make it easy to choose an item.** If it’s too difficult to get to an item in your collection, people will get frustrated and lose interest before reaching the content they want. Use adequate padding around images to keep focus or hover effects easy to see and prevent content from overlapping.

**Add custom interactions when necessary.** By default, people can tap to select, touch and hold to edit, and swipe to scroll. If your app requires it, you can add more gestures for performing custom actions.

**Consider using animations to provide feedback when people insert, delete, or reorder items.** Collections support standard animations for these actions, and you can also use custom animations.

## Platform considerations

*No additional considerations for macOS, tvOS, or visionOS. Not supported in watchOS.*

### iOS, iPadOS

**Use caution when making dynamic layout changes.** The layout of a collection can change dynamically. Be sure any changes make sense and are easy to track. If possible, try to avoid changing the layout while people are viewing and interacting with it, unless it’s in response to an explicit action.

## Resources

#### Related

[Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

[Image views](https://developer.apple.com/design/human-interface-guidelines/image-views)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[`UICollectionView`](https://developer.apple.com/documentation/UIKit/UICollectionView) — UIKit

[`NSCollectionView`](https://developer.apple.com/documentation/AppKit/NSCollectionView) — AppKit

---

---
title: "Column views"
source: "https://developer.apple.com/design/human-interface-guidelines/column-views"
author:
published:
created: 2026-06-11
description: "A column view — also called a browser — lets people view and navigate a data hierarchy using a series of vertical columns."
tags:
  - "clippings"
---
![A stylized representation of three columns containing a list of folders, images, and file information. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/58d169a528523497121284002be4668a/components-column-view-intro~dark%402x.png)

Each column represents one level of the hierarchy and contains horizontal rows of data items. Within a column, any parent item that contains nested child items is marked with a triangle icon. When people select a parent, the next column displays its children. People can continue navigating in this way until they reach an item with no children, and can also navigate back up the hierarchy to explore other branches of data.

## Best practices

Consider using a column view when you have a deep data hierarchy in which people tend to navigate back and forth frequently between levels, and you don’t need the sorting capabilities that a [list or table](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables) provides. For example, Finder offers a column view (in addition to icon, list, and gallery views) for navigating directory structures.

**Show the root level of your data hierarchy in the first column.** People know they can quickly scroll back to the first column to begin navigating the hierarchy from the top again.

**Consider showing information about the selected item when there are no nested items to display.** The Finder, for example, shows a preview of the selected item and information like the creation date, modification date, file type, and size.

**Let people resize columns.** This is especially important if the names of some data items are too long to fit within the default column width.

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

[Outline views](https://developer.apple.com/design/human-interface-guidelines/outline-views)

[Split views](https://developer.apple.com/design/human-interface-guidelines/split-views)

#### Developer documentation

[`NSBrowser`](https://developer.apple.com/documentation/AppKit/NSBrowser) — AppKit


---

---
title: "Disclosure controls"
source: "https://developer.apple.com/design/human-interface-guidelines/disclosure-controls"
author:
published:
created: 2026-06-11
description: "Disclosure controls reveal and hide information and functionality related to specific controls or views."
tags:
  - "clippings"
---
![A stylized representation of collapsed and expanded disclosure buttons. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/f561b6ecd5f4ba1b8aa55742f2de7eeb/components-disclosure-control-intro~dark%402x.png)

## Best practices

**Use a disclosure control to hide details until they’re relevant.** Place controls that people are most likely to use at the top of the disclosure hierarchy so they’re always visible, with more advanced functionality hidden by default. This organization helps people quickly find the most essential information without overwhelming them with too many detailed options.

## Disclosure triangles

A disclosure triangle shows and hides information and functionality associated with a view or a list of items. For example, Keynote uses a disclosure triangle to show advanced options when exporting a presentation, and the Finder uses disclosure triangles to progressively reveal hierarchy when navigating a folder structure in list view.

A disclosure triangle points inward from the leading edge when its content is hidden and down when its content is visible. Clicking or tapping the disclosure triangle switches between these two states, and the view expands or collapses accordingly to accommodate the content.

**Provide a descriptive label when using a disclosure triangle.** Make sure your labels indicate what is disclosed or hidden, like “Advanced Options.”

For developer guidance, see [`NSButton.BezelStyle.disclosure`](https://developer.apple.com/documentation/AppKit/NSButton/BezelStyle-swift.enum/disclosure).

## Disclosure buttons

A disclosure button shows and hides functionality associated with a specific control. For example, the macOS Save sheet shows a disclosure button next to the Save As text field. When people click or tap this button, the Save dialog expands to give advanced navigation options for selecting an output location for their document.

A disclosure button points down when its content is hidden and up when its content is visible. Clicking or tapping the disclosure button switches between these two states, and the view expands or collapses accordingly to accommodate the content.

**Place a disclosure button near the content that it shows and hides.** Establish a clear relationship between the control and the expanded choices that appear when a person clicks or taps a button.

**Use no more than one disclosure button in a single view.** Multiple disclosure buttons add complexity and can be confusing.

For developer guidance, see [`NSButton.BezelStyle.pushDisclosure`](https://developer.apple.com/documentation/AppKit/NSButton/BezelStyle-swift.enum/pushDisclosure).

## Platform considerations

*No additional considerations for macOS. Not supported in tvOS or watchOS.*

### iOS, iPadOS, visionOS

Disclosure controls are available in iOS, iPadOS, and visionOS with the SwiftUI [`DisclosureGroup`](https://developer.apple.com/documentation/SwiftUI/DisclosureGroup) view.

## Resources

#### Related

[Outline views](https://developer.apple.com/design/human-interface-guidelines/outline-views)

[Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

[Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

#### Developer documentation

[`DisclosureGroup`](https://developer.apple.com/documentation/SwiftUI/DisclosureGroup) — SwiftUI

[`NSButton.BezelStyle.disclosure`](https://developer.apple.com/documentation/AppKit/NSButton/BezelStyle-swift.enum/disclosure) — AppKit

[`NSButton.BezelStyle.pushDisclosure`](https://developer.apple.com/documentation/AppKit/NSButton/BezelStyle-swift.enum/pushDisclosure) — AppKit


---

---
title: "Labels"
source: "https://developer.apple.com/design/human-interface-guidelines/labels"
author:
published:
created: 2026-06-11
description: "A label is a static piece of text that people can read and often copy, but not edit."
tags:
  - "clippings"
---
![A stylized representation of a text label. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/af5711f5ac5d0122883a60c34e074724/components-label-intro~dark%402x.png)

Labels display text throughout the interface, in buttons, menu items, and views, helping people understand the current context and what they can do next.

The term *label* refers to uneditable text that can appear in various places. For example:

- Within a button, a label generally conveys what the button does, such as Edit, Cancel, or Send.
- Within many lists, a label can describe each item, often accompanied by a symbol or an image.
- Within a view, a label might provide additional context by introducing a control or describing a common action or task that people can perform in the view.

The guidance below can help you use a label to display text. In some cases, guidance for specific components — such as [action buttons](https://developer.apple.com/design/human-interface-guidelines/buttons), [menus](https://developer.apple.com/design/human-interface-guidelines/menus), and [lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables) — includes additional recommendations for using text.

## Best practices

**Use a label to display a small amount of text that people don’t need to edit.** If you need to let people edit a small amount of text, use a [text field](https://developer.apple.com/design/human-interface-guidelines/text-fields). If you need to display a large amount of text, and optionally let people edit it, use a [text view](https://developer.apple.com/design/human-interface-guidelines/text-views).

**Prefer system fonts.** A label can display plain or styled text, and it supports Dynamic Type (where available) by default. If you adjust the style of a label or use custom fonts, make sure the text remains legible.

**Use system-provided label colors to communicate relative importance.** The system defines four label colors that vary in appearance to help you give text different levels of visual importance. For additional guidance, see [Color](https://developer.apple.com/design/human-interface-guidelines/color).

| System color | Example usage | iOS, iPadOS, tvOS, visionOS | macOS |
| --- | --- | --- | --- |
| Label | Primary information | [`label`](https://developer.apple.com/documentation/UIKit/UIColor/label) | [`labelColor`](https://developer.apple.com/documentation/AppKit/NSColor/labelColor) |
| Secondary label | A subheading or supplemental text | [`secondaryLabel`](https://developer.apple.com/documentation/UIKit/UIColor/secondaryLabel) | [`secondaryLabelColor`](https://developer.apple.com/documentation/AppKit/NSColor/secondaryLabelColor) |
| Tertiary label | Text that describes an unavailable item or behavior | [`tertiaryLabel`](https://developer.apple.com/documentation/UIKit/UIColor/tertiaryLabel) | [`tertiaryLabelColor`](https://developer.apple.com/documentation/AppKit/NSColor/tertiaryLabelColor) |
| Quaternary label | Watermark text | [`quaternaryLabel`](https://developer.apple.com/documentation/UIKit/UIColor/quaternaryLabel) | [`quaternaryLabelColor`](https://developer.apple.com/documentation/AppKit/NSColor/quaternaryLabelColor) |

**Make useful label text selectable.** If a label contains useful information — like an error message, a location, or an IP address — consider letting people select and copy it for pasting elsewhere.

## Platform considerations

*No additional considerations for iOS, iPadOS, tvOS, or visionOS.*

### macOS

### watchOS

Date and time text components (shown below on the left) display the current date, the current time, or a combination of both. You can configure a date text component to use a variety of formats, calendars, and time zones. A countdown timer text component (shown below on the right) displays a precise countdown or count-up timer. You can configure a timer text component to display its count value in a variety of formats.

![An illustration of date and time text components on Apple Watch, with the date aligned to the leading edge and the time aligned to the trailing edge.](https://docs-assets.developer.apple.com/published/3cedf27f398b6683c78d37a325f26c33/labels-date-time-text-component%402x.png)

Date and time labels

![An illustration of a countdown timer text component on Apple Watch, with the time value at the center.](https://docs-assets.developer.apple.com/published/bc3014364c7bc508ff68d21d79c15441/labels-countdown-timer-text-component%402x.png)

Timer label

When you use the system-provided date and timer text components, watchOS automatically adjusts the label’s presentation to fit the available space. The system also updates the content without further input from your app.

Consider using date and timer components in complications. For design guidance, see [Complications](https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/complications); for developer guidance, see [`Text`](https://developer.apple.com/documentation/SwiftUI/Text).

## Resources

#### Related

[Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields)

[Text views](https://developer.apple.com/design/human-interface-guidelines/text-views)

#### Developer documentation

[`Label`](https://developer.apple.com/documentation/SwiftUI/Label) — SwiftUI

[`Text`](https://developer.apple.com/documentation/SwiftUI/Text) — SwiftUI

[`UILabel`](https://developer.apple.com/documentation/UIKit/UILabel) — UIKit

[`NSTextField`](https://developer.apple.com/documentation/AppKit/NSTextField) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 5, 2023 | Updated guidance to reflect changes in watchOS 10. |


---


---
title: "Lists and tables"
source: "https://developer.apple.com/design/human-interface-guidelines/lists-and-tables"
author:
published:
created: 2026-06-11
description: "Lists and tables present data in one or more columns of rows."
tags:
  - "clippings"
---
![A stylized representation of a three-row table with header and footer text. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/3f8a1cde5880e6291c15f8238ab1e45e/components-lists-and-tables-intro~dark%402x.png)

A table or list can represent data that’s organized in groups or hierarchies, and it can support user interactions like selecting, adding, deleting, and reordering. Apps and games in all platforms can use tables to present content and options; many apps use lists to express an overall information hierarchy and help people navigate it. For example, iOS Settings uses a hierarchy of lists to help people choose options, and several apps — such as Mail in iPadOS and macOS — use a table within a [split view](https://developer.apple.com/design/human-interface-guidelines/split-views).

Sometimes, people need to work with complex data in a multicolumn table or a spreadsheet. Apps that offer productivity tasks often use a table to represent various characteristics or attributes of the data in separate, sortable columns.

## Best practices

**Prefer displaying text in a list or table.** A table can include any type of content, but the row-based format is especially well suited to making text easy to scan and read. If you have items that vary widely in size — or you need to display a large number of images — consider using a [collection](https://developer.apple.com/design/human-interface-guidelines/collections) instead.

**Let people edit a table when it makes sense.** People appreciate being able to reorder a list, even if they can’t add or remove items. In iOS and iPadOS, people must enter an edit mode before they can select table items.

**Provide appropriate feedback when people select a list item.** The feedback can vary depending on whether selecting the item reveals a new view or toggles the item’s state. In general, a table that helps people navigate through a hierarchy persistently highlights the selected row to clarify the path people are taking. In contrast, a table that lists options often highlights a row only briefly before adding an image — such as a checkmark — indicating that the item is selected.

## Content

**Keep item text succinct so row content is comfortable to read.** Short, succinct text can help minimize truncation and wrapping, making text easier to read and scan. If each item consists of a large amount of text, consider alternatives that help you avoid displaying over-large table rows. For example, you could list item titles only, letting people choose an item to reveal its content in a detail view.

**Consider ways to preserve readability of text that might otherwise get clipped or truncated.** When a table is narrow — for example, if people can vary its width — you want content to remain recognizable and easy to read. Sometimes, an ellipsis in the middle of text can make an item easier to distinguish because it preserves both the beginning and the end of the content.

**Use descriptive column headings in a multicolumn table.** Use nouns or short noun phrases with [title-style capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64), and don’t add ending punctuation. If you don’t include a column heading in a single-column table view, use a label or a header to help people understand the context.

## Style

**Choose a table or list style that coordinates with your data and platform.** Some styles use visual details to help communicate grouping and hierarchy or to provide specific experiences. In iOS and iPadOS, for example, the grouped style uses headers, footers, and additional space to separate groups of data; the elliptical style available in watchOS makes items appear as if they’re rolling off a rounded surface as people scroll; and macOS defines a bordered style that uses alternating row backgrounds to help make large tables easier to use. For developer guidance, see [`ListStyle`](https://developer.apple.com/documentation/SwiftUI/ListStyle).

**Choose a row style that fits the information you need to display.** For example, you might need to display a small image in the leading end of a row, followed by a brief explanatory label. Some platforms provide built-in row styles you can use to arrange content in list rows, such as the [`UIListContentConfiguration`](https://developer.apple.com/documentation/UIKit/UIListContentConfiguration-swift.struct) API you can use to lay out content in a list’s rows, headers, and footers in iOS, iPadOS, and tvOS.

## Platform considerations

### iOS, iPadOS, visionOS

**Use an info button only to reveal more information about a row’s content.** An info button — called a *detail disclosure button* when it appears in a list row — doesn’t support navigation through a hierarchical table or list. If you need to let people drill into a list or table row’s subviews, use a disclosure indicator accessory control. For developer guidance, see [`UITableViewCell.AccessoryType.disclosureIndicator`](https://developer.apple.com/documentation/UIKit/UITableViewCell/AccessoryType-swift.enum/disclosureIndicator).

![An illustration of a grouped list of rows. Each list item includes an info button at the trailing end of the row.](https://docs-assets.developer.apple.com/published/c6d94902720357c265d3d61e354c4e73/info-button-in-list~dark%402x.png)

An info button shows details about a list item; it doesn’t support navigation.

![An illustration of a grouped list of rows. Each list item includes a right-pointing chevron at the trailing end of the row.](https://docs-assets.developer.apple.com/published/77544da65ba6bba87cd3e0ec7f124224/disclosure-indicator-in-list~dark%402x.png)

A disclosure indicator reveals the next level in a hierarchy; it doesn’t show details about the item.

**Avoid adding an index to a table that displays controls — like disclosure indicators — in the trailing ends of its rows.** An *index* typically consists of the letters in an alphabet, displayed vertically at the trailing side of a list. People can jump to a specific section in the list by choosing the index letter that maps to it. Because both the index and elements like disclosure indicators appear on the trailing side of a list, it can be difficult for people to use one element without activating the other.

### macOS

**When it provides value, let people click a column heading to sort a table view based on that column**. If people click the heading of a column that’s already sorted, re-sort the data in the opposite direction.

**Let people resize columns.** Data displayed in a table view often varies in width. People appreciate resizing columns to help them concentrate on different areas or reveal clipped data.

**Consider using alternating row colors in a multicolumn table.** Alternating colors can help people track row values across columns, especially in a wide table.

**Use an outline view instead of a table view to present hierarchical data.** An [outline view](https://developer.apple.com/design/human-interface-guidelines/outline-views) looks like a table view, but includes disclosure triangles for exposing nested levels of data. For example, an outline view might display folders and the items they contain.

### tvOS

**Confirm that images near a table still look good as each row highlights and slightly increases in size when it becomes focused.** A focused row’s corners can also become rounded, which may affect the appearance of images on either side of it. Account for this effect as you prepare images, and don’t add your own masks to round the corners.

### watchOS

**When possible, limit the number of rows.** Short lists are easier for people to scan, but sometimes people expect a long list of items. For example, if people subscribe to a large number of podcasts, they might think something’s wrong if they can’t view all their items. You can help make a long list more manageable by listing the most relevant items and providing a way for people to view more.

**Constrain the length of detail views if you want to support vertical page-based navigation.** People use vertical page-based navigation to swipe vertically among the detail items of different list rows. Navigating in this way saves time because people don’t need to return to the list to tap a new detail item, but it works only when detail views are short. If your detail views scroll, people won’t be able to use vertical page-based navigation to swipe among them.

## Resources

#### Related

[Collections](https://developer.apple.com/design/human-interface-guidelines/collections)

[Outline views](https://developer.apple.com/design/human-interface-guidelines/outline-views)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[`List`](https://developer.apple.com/documentation/SwiftUI/List) — SwiftUI

[Tables](https://developer.apple.com/documentation/SwiftUI/Tables) — SwiftUI

[`UITableView`](https://developer.apple.com/documentation/UIKit/UITableView) — UIKit

[`NSTableView`](https://developer.apple.com/documentation/AppKit/NSTableView) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 21, 2023 | Updated to include guidance for visionOS. |
| June 5, 2023 | Updated guidance to reflect changes in watchOS 10. |


---


---
title: "Lockups"
source: "https://developer.apple.com/design/human-interface-guidelines/lockups"
author:
published:
created: 2026-06-11
description: "Lockups combine multiple separate views into a single, interactive unit."
tags:
  - "clippings"
---
![A stylized representation of a person icon above a line of headline text and a line of footnote text. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/934b6f43607eaa5023d1b823e7801e62/components-lockups-intro~dark%402x.png)

Each lockup consists of a content view, a header, and a footer. Headers appear above the main content for a lockup, and footers appear below the main content. All three views expand and contract together as the lockup gets focus.

According to the needs of your app, you can combine four types of lockup: cards, caption buttons, monograms, and posters.

## Best practices

**Allow adequate space between lockups.** A focused lockup expands in size, so leave enough room between lockups to avoid overlapping or displacing other lockups. For guidance, see [Layout](https://developer.apple.com/design/human-interface-guidelines/layout).

![An illustration showing three rows of five equally spaced lockups. In each row, the middle lockup is in focus and slightly larger than the others.](https://docs-assets.developer.apple.com/published/e80ddfafdbd9a59cf960d37573ea3864/lockups-generic~dark%402x.png)

**Use consistent lockup sizes within a row or group.** A group of buttons or a row of content images is more visually appealing when the widths and heights of all elements match.

For developer guidance, see [`TVLockupView`](https://developer.apple.com/documentation/TVUIKit/TVLockupView) and [`TVLockupHeaderFooterView`](https://developer.apple.com/documentation/TVUIKit/TVLockupHeaderFooterView).

## Cards

A card combines a header, footer, and content view to present ratings and reviews for media items.

![An illustration of an Apple TV screen that contains several cards, one of which is highlighted. Inside the highlighted card from the top, placeholder content shows the position of a rating and multiple lines of text.](https://docs-assets.developer.apple.com/published/80f9424fbccaba108aab286ac27d4511/lockups-background~dark%402x.png)

For developer guidance, see [`TVCardView`](https://developer.apple.com/documentation/TVUIKit/TVCardView).

## Caption buttons

A caption button can include a title and a subtitle beneath the button. A caption button can contain either an image or text.

Make sure that when people focus on them, caption buttons tilt with the motion that they swipe. When aligned vertically, caption buttons tilt up and down. When aligned horizontally, caption buttons tilt left and right. When displayed in a grid, caption buttons tilt both vertically and horizontally.

![An illustration of an Apple TV screen highlighted to show four caption buttons in a row. The leftmost button is focused, making it expand slightly and appear to float above the background.](https://docs-assets.developer.apple.com/published/fd32589fdbeb138404933482c7c27abb/lockups-caption-button~dark%402x.png)

For developer guidance, see [`TVCaptionButtonView`](https://developer.apple.com/documentation/TVUIKit/TVCaptionButtonView).

## Monograms

Monograms identify people, usually the cast and crew for a media item. Each monogram consists of a circular picture of the person and their name. If an image isn’t available, the person’s initials appear in place of an image.

**Prefer images over initials.** An image of a person creates a more intimate connection than text.

![An illustration of an Apple TV screen that contains a row of several monograms, of which the leftmost one is highlighted. Each monogram contains the person symbol. Below each monogram is placeholder content that represents two lines of text.](https://docs-assets.developer.apple.com/published/e8723b67c32f86897d908c0bd32380ed/lockups-monogram~dark%402x.png)

For developer guidance, see [`TVMonogramContentView`](https://developer.apple.com/documentation/TVUIKit/TVMonogramContentView).

## Posters

Posters consist of an image and an optional title and subtitle, which are hidden until the poster comes into focus. Posters can be any size, but the size needs to be appropriate for their content. For related guidance, see [Image views](https://developer.apple.com/design/human-interface-guidelines/image-views).

![An illustration of an Apple TV screen that shows a row of several posters near the bottom edge. One poster is focused and below it is placeholder content that represents a line of text.](https://docs-assets.developer.apple.com/published/076fb3d7947bafb01d8c16e2a303639b/lockups-poster~dark%402x.png)

For developer guidance, see [`TVPosterView`](https://developer.apple.com/documentation/TVUIKit/TVPosterView).

## Platform considerations

*Not supported in iOS, iPadOS, macOS, visionOS, or watchOS.*

## Resources

#### Related

[Designing for tvOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[`TVLockupView`](https://developer.apple.com/documentation/TVUIKit/TVLockupView) — TVUIKit

[`TVLockupHeaderFooterView`](https://developer.apple.com/documentation/TVUIKit/TVLockupHeaderFooterView) — TVUIKit


---

---
title: "Outline views"
source: "https://developer.apple.com/design/human-interface-guidelines/outline-views"
author:
published:
created: 2026-06-11
description: "An outline view presents hierarchical data in a scrolling list of cells that are organized into columns and rows."
tags:
  - "clippings"
---
![A stylized representation of a list of folders and images, displayed in an outline view containing four columns: [Name], [Date Modified], [Size], and [Kind]. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/8a05f467a0487937f0de54166a42ef36/components-outline-view-intro~dark%402x.png)

An outline view includes at least one column that contains primary hierarchical data, such as a set of parent containers and their children. You can add columns, as needed, to display attributes that supplement the primary data; for example, sizes and modification dates. Parent containers have disclosure triangles that expand to reveal their children.

Finder windows offer an outline view for navigating the file system.

## Best practices

Outline views work well to display text-based content and often appear in the leading side of a [split view](https://developer.apple.com/design/human-interface-guidelines/split-views), with related content on the opposite side.

**Use a table instead of an outline view to present data that’s not hierarchical.** For guidance, see [Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables).

**Expose data hierarchy in the first column only.** Other columns can display attributes that apply to the hierarchical data in the primary column.

**Use descriptive column headings to provide context.** Use nouns or short noun phrases with [title-style capitalization](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64) and no punctuation; in particular, avoid adding a trailing colon. Always provide column headings in a multi-column outline view. If you don’t include a column heading in a single-column outline view, use a label or other means to make sure there’s enough context.

**Consider letting people click column headings to sort an outline view.** In a sortable outline view, people can click a column heading to perform an ascending or descending sort based on that column. You can implement additional sorting based on secondary columns behind the scenes, if necessary. If people click the primary column heading, sorting occurs at each hierarchy level. For example, in the Finder, all top-level folders are sorted, then the items within each folder are sorted. If people click the heading of a column that’s already sorted, the folders and their contents are sorted again in the opposite direction.

**Let people resize columns.** Data displayed in an outline view often varies in width. It’s important to let people adjust column width as needed to reveal data that’s wider than the column.

**Make it easy for people to expand or collapse nested containers.** For example, clicking a disclosure triangle for a folder in a Finder window expands only that folder. However, Option-clicking the disclosure triangle expands all of its subfolders.

**Retain people’s expansion choices.** If people expand various levels of an outline view to reach a specific item, store the state so you can display it again the next time. This way, people won’t need to navigate back to the same place again.

**Consider using alternating row colors in multi-column outline views.** Alternating colors can make it easier for people to track row values across columns, especially in wide outline views.

**Let people edit data if it makes sense in your app.** In an editable outline view cell, people expect to be able to single-click a cell to edit its contents. Note that a cell can respond differently to a double click. For example, an outline view listing files might let people single-click a file’s name to edit it, but double-click a file’s name to open the file. You can also let people reorder, add, and remove rows if it would be useful.

**Consider using a centered ellipsis to truncate cell text instead of clipping it.** An ellipsis in the middle preserves the beginning and end of the cell text, which can make the content more distinct and recognizable than clipped text.

**Consider offering a search field to help people find values quickly in a lengthy outline view.** Windows with an outline view as the primary feature often include a search field in the toolbar. For guidance, see [Search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields).

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Column views](https://developer.apple.com/design/human-interface-guidelines/column-views)

[Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

[Split views](https://developer.apple.com/design/human-interface-guidelines/split-views)

#### Developer documentation

[`OutlineGroup`](https://developer.apple.com/documentation/SwiftUI/OutlineGroup) — SwiftUI

[`NSOutlineView`](https://developer.apple.com/documentation/AppKit/NSOutlineView) — AppKit


---

---
title: "Split views"
source: "https://developer.apple.com/design/human-interface-guidelines/split-views"
author:
published:
created: 2026-06-11
description: "A split view manages the presentation of multiple adjacent panes of content, each of which can contain a variety of components, including tables, collections, images, and custom views."
tags:
  - "clippings"
---
![A stylized representation of a window consisting of three areas: a sidebar, a canvas, and an inspector. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/f3ebae3ef9105f332f4ae4aab449f505/components-split-view-intro~dark%402x.png)

Typically, you use a split view to show multiple levels of your app’s hierarchy at once and support navigation between them. In this scenario, selecting an item in the view’s primary pane displays the item’s contents in the secondary pane. Similarly, a split view can display a tertiary pane if items in the secondary pane contain additional content.

It’s common to use a split view to display a [sidebar](https://developer.apple.com/design/human-interface-guidelines/sidebars) for navigation, where the leading pane lists the top-level items or collections in an app, and the secondary and optional tertiary panes can present child collections and item details. Rarely, you might also use a split view to provide groups of functionality that supplement the primary view — for example, Keynote in macOS uses split view panes to present the slide navigator, the presenter notes, and the inspector pane in areas that surround the main slide canvas.

## Best practices

**To support navigation, persistently highlight the current selection in each pane that leads to the detail view.** The selected appearance clarifies the relationship between the content in various panes and helps people stay oriented.

**Consider letting people drag and drop content between panes.** Because a split view provides access to multiple levels of hierarchy, people can conveniently move content from one part of your app to another by dragging items to different panes. For guidance, see [Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop).

## Platform considerations

### iOS

**Prefer using a split view in a regular — not a compact — environment.** A split view needs horizontal space in which to display multiple panes. In a compact environment, such as iPhone in portrait orientation, it’s difficult to display multiple panes without wrapping or truncating the content, making it less legible and harder to interact with.

### iPadOS

In iPadOS, a split view can include either two vertical panes, like Mail, or three vertical panes, like Keynote.

**Account for narrow, compact, and intermediate window widths.** Since iPad windows are fluidly resizable, it’s important to consider the design of a split view layout at multiple widths. In particular, ensure that it’s possible to navigate between the various panes in a logical way. For guidance, see [Layout](https://developer.apple.com/design/human-interface-guidelines/layout). For developer guidance, see [`NavigationSplitView`](https://developer.apple.com/documentation/SwiftUI/NavigationSplitView) and [`UISplitViewController`](https://developer.apple.com/documentation/UIKit/UISplitViewController).

### macOS

In macOS, you can arrange the panes of a split view vertically, horizontally, or both. A split view includes dividers between panes that can support dragging to resize them. For developer guidance, see [`VSplitView`](https://developer.apple.com/documentation/SwiftUI/VSplitView) and [`HSplitView`](https://developer.apple.com/documentation/SwiftUI/HSplitView).

**Set reasonable defaults for minimum and maximum pane sizes.** If people can resize the panes in your app’s split view, make sure to use sizes that keep the divider visible. If a pane gets too small, the divider can seem to disappear, becoming difficult to use.

**Consider letting people hide a pane when it makes sense.** If your app includes an editing area, for example, consider letting people hide other panes to reduce distractions or allow more room for editing — in Keynote, people can hide the navigator and presenter notes panes when they want to edit slide content.

**Provide multiple ways to reveal hidden panes.** For example, you might provide a toolbar button or a menu command — including a keyboard shortcut — that people can use to restore a hidden pane.

**Prefer the thin divider style.** The thin divider measures one point in width, giving you maximum space for content while remaining easy for people to use. Avoid using thicker divider styles unless you have a specific need. For example, if both sides of a divider present table rows that use strong linear elements that might make a thin divider hard to distinguish, it might work to use a thicker divider. For developer guidance, see [`NSSplitView.DividerStyle`](https://developer.apple.com/documentation/AppKit/NSSplitView/DividerStyle-swift.enum).

### tvOS

In tvOS, a split view can work well to help people filter content. When people choose a filter category in the primary pane, your app can display the results in the secondary pane.

**Choose a split view layout that keeps the panes looking balanced.** By default, a split view devotes a third of the screen width to the primary pane and two-thirds to the secondary pane, but you can also specify a half-and-half layout.

**Display a single title above a split view, helping people understand the content as a whole.** People already know how to use a split view to navigate and filter content; they don’t need titles that describe what each pane contains.

**Choose the title’s alignment based on the type of content the secondary pane contains.** Specifically, when the secondary pane contains a content collection, consider centering the title in the window. In contrast, if the secondary pane contains a single main view of important content, consider placing the title above the primary view to give the content more room.

### visionOS

**To display supplementary information, prefer a split view instead of a new window.** A split view gives people convenient access to more information without leaving the current context, whereas a new window may confuse people who are trying to navigate or reposition content. Opening more windows also requires you to carefully manage the relationship between views in your app or game. If you need to request a small amount of information or present a simple task that someone must complete before returning to their main task, use a [sheet](https://developer.apple.com/design/human-interface-guidelines/sheets).

### watchOS

In watchOS, the split view displays either the list view or a detail view as a full-screen view.

**Automatically display the most relevant detail view.** When your app launches, show people the most pertinent information. For example, display information relevant to their location, the time, or their recent actions.

**If your app displays multiple detail pages, place the detail views in a vertical [tab view](https://developer.apple.com/design/human-interface-guidelines/tab-views).** People can then use the Digital Crown to scroll between the detail view’s tabs. watchOS also displays a page indicator next to the Digital Crown, indicating the number of tabs and the currently selected tab.

![A screenshot showing a detail view with a vertical tab on Apple Watch. The page indicator next to the Digital Crown shows that the fifth tab is currently selected.](https://docs-assets.developer.apple.com/published/3f36258648d54880e800568e88b5076b/split-view-watch-vertical-tab%402x.png)

## Resources

#### Related

[Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars)

[Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[`NavigationSplitView`](https://developer.apple.com/documentation/SwiftUI/NavigationSplitView) — SwiftUI

[`UISplitViewController`](https://developer.apple.com/documentation/UIKit/UISplitViewController) — UIKit

[`NSSplitViewController`](https://developer.apple.com/documentation/AppKit/NSSplitViewController) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 9, 2025 | Added iOS and iPadOS platform considerations. |
| December 5, 2023 | Added guidance for split views in visionOS. |
| June 5, 2023 | Added guidance for split views in watchOS. |


---

---
title: "Tab views"
source: "https://developer.apple.com/design/human-interface-guidelines/tab-views"
author:
published:
created: 2026-06-11
description: "A tab view presents multiple mutually exclusive panes of content in the same area, which people can switch between using a tabbed control."
tags:
  - "clippings"
---
![A stylized representation of a view with three labeled tabs, the first of which is selected. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/91f9c53bf4c655720f8cf837508fa019/components-tab-view-intro~dark%402x.png)

## Best practices

**Use a tab view to present closely related areas of content.** The appearance of a tab view provides a strong visual indication of enclosure. People expect each tab to display content that is in some way similar or related to the content in the other tabs.

**Make sure the controls within a pane affect content only in the same pane.** Panes are mutually exclusive, so ensure they’re fully self-contained.

**Provide a label for each tab that describes the contents of its pane.** A good label helps people predict the contents of a pane before clicking or tapping its tab. In general, use nouns or short noun phrases for tab labels. A verb or short verb phrase may make sense in some contexts. Use title-style capitalization for tab labels.

**Avoid using a pop-up button to switch between tabs.** A tabbed control is efficient because it requires a single click or tap to make a selection, whereas a pop-up button requires two. A tabbed control also presents all choices onscreen at the same time, whereas people must click a pop-up button to see its choices. Note that a pop-up button can be a reasonable alternative in cases where there are too many panes of content to reasonably display with tabs.

**Avoid providing more than six tabs in a tab view.** Having more than six tabs can be overwhelming and create layout issues. If you need to present six or more tabs, consider another way to implement the interface. For example, you could instead present each tab as a view option in a pop-up button menu.

For developer guidance, see [`NSTabView`](https://developer.apple.com/documentation/AppKit/NSTabView).

## Anatomy

The tabbed control appears on the top edge of the content area. You can choose to hide the control, which is appropriate for an app that switches between panes programmatically.

![An illustration of a window in which a three-tab tabbed control is centered on the top edge of the content view.](https://docs-assets.developer.apple.com/published/af1834447a85722fbf57e054102b7a7c/tab-views-top~dark%402x.png)

When you hide the tabbed control, the content area can be borderless, bezeled, or bordered with a line. A borderless view can be solid or transparent.

**In general, inset a tab view by leaving a margin of window-body area on all sides of a tab view.** This layout looks clean and leaves room for additional controls that aren’t directly related to the contents of the tab view. You can extend a tab view to meet the window edges, but this layout is unusual.

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, or visionOS.*

### iOS, iPadOS

For similar functionality, consider using a [segmented control](https://developer.apple.com/design/human-interface-guidelines/segmented-controls) instead.

### watchOS

watchOS displays tab views using [page controls](https://developer.apple.com/design/human-interface-guidelines/components/presentation/page-controls). For developer guidance, see [`TabView`](https://developer.apple.com/documentation/SwiftUI/TabView).

![An illustration showing the page control next to the Digital Crown on Apple Watch. The current dot is enlarged, indicating that people can scroll through the current content, as well as scroll between pages.](https://docs-assets.developer.apple.com/published/10938a94cb663210f148e0fbce431e70/tab-view-watch-vertical%402x.png)

## Resources

#### Related

[Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

[Segmented controls](https://developer.apple.com/design/human-interface-guidelines/segmented-controls)

#### Developer documentation

[`TabView`](https://developer.apple.com/documentation/SwiftUI/TabView) — SwiftUI

[`NSTabView`](https://developer.apple.com/documentation/AppKit/NSTabView) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 5, 2023 | Added guidance for using tab views in watchOS. |

---

# Menus and actions
---
title: "Activity views"
source: "https://developer.apple.com/design/human-interface-guidelines/activity-views"
author:
published:
created: 2026-06-11
description: "An activity view — often called a share sheet — presents a range of tasks that people can perform in the current context."
tags:
  - "clippings"
---
![A stylized representation of an activity view or share sheet. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/1bb5f9b78b69d1cd02c358d43aa9dd21/components-activity-view-intro~dark%402x.png)

Activity views present sharing activities like messaging and actions like Copy and Print, in addition to quick access to frequently used apps. People typically reveal a share sheet by choosing an Action button while viewing a page or document, or after they’ve selected an item. An activity view can appear as a sheet or a popover, depending on the device and orientation.

You can provide app-specific activities that can appear in a share sheet when people open it within your app or game. For example, Photos provides app-specific actions like Copy Photo, Add to Album, and Adjust Location. By default, the system lists app-specific actions before actions — such as Add to Files or AirPlay — that are available in multiple apps or throughout the system. People can edit the list of actions to ensure that it displays the ones they use most and to add new ones.

You can also create app extensions to provide custom share and action activities that people can use in other apps. (An *app extension* is code you provide that people can install and use outside of your app.) For example, you might create a custom share activity that people can install to help them share a webpage with a specific social media service. Even though macOS doesn’t provide an activity view, you can create share and action app extensions that people can use on a Mac. For guidance, see [Share and action extensions](https://developer.apple.com/design/human-interface-guidelines/activity-views#Share-and-action-extensions).

## Best practices

**Avoid creating duplicate versions of common actions that are already available in the activity view.** For example, providing a duplicate Print action is unnecessary and confusing because people wouldn’t know how to distinguish your action from the system-provided one. If you need to provide app-specific functionality that’s similar to an existing action, give it a custom title. For example, if you let people use custom formatting to print a bank transaction, use a title that helps people understand what your print activity does, like “Print Transaction.”

**Consider using a symbol to represent your custom activity.** [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) provides a comprehensive set of configurable symbols you can use to communicate items and concepts in an activity view. If you need to create a custom interface icon, center it in an area measuring about 70x70 pixels. For guidance, see [Icons](https://developer.apple.com/design/human-interface-guidelines/icons).

**Write a succinct, descriptive title for each custom action you provide.** If a title is too long, the system wraps it and may truncate it. Prefer a single verb or a brief verb phrase that clearly communicates what the action does. Avoid including your company or product name in an action title. In contrast, the share sheet displays the title of a share activity — typically a company name — below the icon that represents it.

**Make sure activities are appropriate for the current context.** Although you can’t reorder system-provided tasks in an activity view, you can exclude tasks that aren’t applicable to your app. For example, if it doesn’t make sense to print from within your app, you can exclude the Print activity. You can also identify which custom tasks to show at any given time.

**Use the Share button to display an activity view.** People are accustomed to accessing system-provided activities when they choose the Share button. Avoid confusing people by providing an alternative way to do the same thing.

![A screenshot of the Notes app on iPhone, with an open Notes document titled Nature Walks. The top toolbar includes a Share button grouped with a More button on its trailing edge.](https://docs-assets.developer.apple.com/published/19285bca9f90bfc4afb5b9bac4e5b0d0/activity-views-share-button~dark%402x.png)

![A screenshot of the Notes app on iPhone, with an open Notes document titled Nature Walks. An activity view is open from the Share button, including controls for sharing the document with contacts or other apps, and copying, exporting, or adding markup to the document.](https://docs-assets.developer.apple.com/published/243fc2d1acfc30bc83838d0b1f52ed0b/activity-views-share-sheet~dark%402x.png)

## Share and action extensions

Share extensions give people a convenient way to share information from the current context with apps, social media accounts, and other services. Action extensions let people initiate content-specific tasks — like adding a bookmark, copying a link, editing an inline image, or displaying selected text in another language — without leaving the current context.

The system presents share and action extensions differently depending on the platform:

- In iOS and iPadOS, share and action extensions are displayed in the share sheet that appears when people choose an Action button.
- In macOS, people access share extensions by clicking a Share button in the toolbar or choosing Share in a context menu. People can access an action extension by holding the pointer over certain types of embedded content — like an image they add to a Mail compose window — clicking a toolbar button, or choosing a quick action in a Finder window.

**If necessary, create a custom interface that feels familiar to people.** For a share extension, prefer the system-provided composition view because it provides a consistent sharing experience that people already know. For an action extension, include your app name. If you need to present an interface, include elements of your app’s interface to help people understand that your extension and your app are related.

**Streamline and limit interaction.** People appreciate extensions that let them perform a task in just a few steps. For example, a share extension might immediately post an image to a social media account with a single tap or click.

**Avoid placing a modal view above your extension.** By default, the system displays an extension within a modal view. While it might be necessary to display an alert above an extension, avoid displaying additional modal views.

**If necessary, provide an image that communicates the purpose of your extension.** A share extension automatically uses your app icon, helping give people confidence that your app provided the extension. For an action extension, prefer using a [symbol](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) or creating an interface [icon](https://developer.apple.com/design/human-interface-guidelines/icons) that clearly identifies the task.

**Use your main app to denote the progress of a lengthy operation.** An activity view dismisses immediately after people complete the task in your share or action extension. If a task is time-consuming, continue it in the background, and give people a way to check the status in your main app. Although you can use a notification to tell people about a problem, don’t notify them simply because the task completes.

## Platform considerations

*No additional considerations for iOS, iPadOS, or visionOS. Not supported in macOS, tvOS, or watchOS.*

## Resources

#### Related

[Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)

[Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers)

#### Developer documentation

[`UIActivityViewController`](https://developer.apple.com/documentation/UIKit/UIActivityViewController) — UIKit

[`UIActivity`](https://developer.apple.com/documentation/UIKit/UIActivity) — UIKit

[App Extension Support](https://developer.apple.com/documentation/Foundation/app-extension-support) — Foundation

---

---
title: "Buttons"
source: "https://developer.apple.com/design/human-interface-guidelines/buttons"
author:
published:
created: 2026-06-11
description: "A button initiates an instantaneous action."
tags:
  - "clippings"
---
![A stylized representation of two horizontally aligned buttons. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/98b3ce8765137bf3c979ac6acb856794/components-buttons-intro~dark%402x.png)

Versatile and highly customizable, buttons give people simple, familiar ways to do tasks in your app. In general, a button combines three attributes to clearly communicate its function:

- **Style.** A visual style based on size, color, and shape.
- **Content.** A symbol (or icon), text label, or both that a button displays to convey its purpose.
- **Role.** A system-defined role that identifies a button’s semantic meaning and can affect its appearance.

There are also many button-like components that have distinct appearances and behaviors for specific use cases, like [toggles](https://developer.apple.com/design/human-interface-guidelines/toggles), [pop-up buttons](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons), and [segmented controls](https://developer.apple.com/design/human-interface-guidelines/segmented-controls).

## Best practices

When buttons are instantly recognizable and easy to understand, an app tends to feel intuitive and well designed.

**Make buttons easy for people to use.** It’s essential to include enough space around a button so that people can visually distinguish it from surrounding components and content. Giving a button enough space is also critical for helping people select or activate it, regardless of the method of input they use. As a general rule, a button needs a hit region of at least 44x44 pt — in visionOS, 60x60 pt — to ensure that people can select it easily, whether they use a fingertip, a pointer, their eyes, or a remote.

**Always include a press state for a custom button.** Without a press state, a button can feel unresponsive, making people wonder if it’s accepting their input.

## Style

System buttons offer a range of styles that support customization while providing built-in interaction states, accessibility support, and appearance adaptation. Different platforms define different styles that help you communicate hierarchies of actions in your app.

**In general, use a button that has a prominent visual style for the most likely action in a view.** To draw people’s attention to a specific button, use a prominent button style so the system can apply an accent color to the button’s background. Buttons that use color tend to be the most visually distinctive, helping people quickly identify the actions they’re most likely to use. Keep the number of prominent buttons to one or two per view. Presenting too many prominent buttons increases cognitive load, requiring people to spend more time considering options before making a choice.

**Use style — not size — to visually distinguish the preferred choice among multiple options.** When you use buttons of the same size to offer two or more options, you signal that the options form a coherent set of choices. By contrast, placing two buttons of different sizes near each other can make the interface look confusing and inconsistent. If you want to highlight the preferred or most likely option in a set, use a more prominent button style for that option and a less prominent style for the remaining ones.

**Avoid applying a similar color to button labels and content layer backgrounds.** If your app already has bright, colorful content in the content layer, prefer using the default monochromatic appearance of button labels. For more guidance, see [Liquid Glass color](https://developer.apple.com/design/human-interface-guidelines/color#Liquid-Glass-color).

## Content

**Ensure that each button clearly communicates its purpose.** Depending on the platform, a button can contain a symbol (or icon), a text label, or both to help people understand what it does.

**Try to associate familiar actions with familiar icons.** For example, people can predict that a button containing the `square.and.arrow.up` symbol will help them perform share-related activities. If it makes sense to use an icon in your button, consider using an existing or customized [symbol](https://developer.apple.com/design/human-interface-guidelines/sf-symbols). For a list of symbols that represent common actions, see [Standard icons](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons).

**Consider using text when a short label communicates more clearly than an icon.** To use text, write a few words that succinctly describe what the button does. Using [title-style capitalization](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64), consider starting the label with a verb to help convey the button’s action — for example, a button that lets people add items to their shopping cart might use the label “Add to Cart.”

## Role

A system button can have one of the following roles:

- **Normal.** No specific meaning.
- **Primary.** The button is the default button — the button people are most likely to choose.
- **Cancel.** The button cancels the current action.
- **Destructive.** The button performs an action that can result in data destruction.

A button’s role can have additional effects on its appearance. For example, a primary button uses an app’s accent color, whereas a destructive button uses the system red color.

![An example alert with three system buttons, labeled Primary, Destructive, and Cancel. The primary button uses a blue accent color, the destructive button uses text in the system red color, and the cancel button appears as a standard button.](https://docs-assets.developer.apple.com/published/c922ff03f6b57ddb7c847335a1419f54/buttons-roles-alert~dark%402x.png)

**Assign the primary role to the button people are most likely to choose.** When a primary button responds to the Return key, it makes it easy for people to quickly confirm their choice. In addition, when the button is in a temporary view — like a [sheet](https://developer.apple.com/design/human-interface-guidelines/sheets), an editable view, or an [alert](https://developer.apple.com/design/human-interface-guidelines/alerts) — assigning it the primary role means that the view can automatically close when people press Return.

**Don’t assign the primary role to a button that performs a destructive action, even if that action is the most likely choice.** Because of its visual prominence, people sometimes choose a primary button without reading it first. Help people avoid losing content by assigning the primary role to nondestructive buttons.

## Platform considerations

*No additional considerations for tvOS.*

### iOS, iPadOS

**Configure a button to display an activity indicator when you need to provide feedback about an action that doesn’t instantly complete.** Displaying an activity indicator within a button can save space in your user interface while clearly communicating the reason for the delay. To help clarify what’s happening, you can also configure the button to display a different label alongside the activity indicator. For example, the label “Checkout” could change to “Checking out…” while the activity indicator is visible. When a delay occurs after people click or tap your configured button, the system displays the activity indicator next to the original or alternative label, hiding the button image, if there is one.

![An illustration of a button labeled Checkout.](https://docs-assets.developer.apple.com/published/35f5b1a355512e79cc65b4746778856f/button-activity-indicator-hidden~dark%402x.png)

![An illustration of a button labeled Checking out, with an activity indicator on the leading side of the label.](https://docs-assets.developer.apple.com/published/06d69e7ac52dc8a9c9608ffbb57f054c/button-activity-indicator-visible~dark%402x.png)

### macOS

Several specific button types are unique to macOS.

#### Push buttons

The standard button type in macOS is known as a *push button*. You can configure a push button to display text, a symbol, an icon, or an image, or a combination of text and image content. Push buttons can act as the default button in a view and you can tint them.

**Use a flexible-height push button only when you need to display tall or variable height content.** Flexible-height buttons support the same configurations as regular push buttons — and they use the same corner radius and content padding — so they look consistent with other buttons in your interface. If you need to present a button that contains two lines of text or a tall icon, use a flexible-height button; otherwise, use a standard push button. For developer guidance, see [`NSButton.BezelStyle.flexiblePush`](https://developer.apple.com/documentation/AppKit/NSButton/BezelStyle-swift.enum/flexiblePush).

**Append a trailing ellipsis to the title when a push button opens another window, view, or app.** Throughout the system, an ellipsis in a control title signals that people can provide additional input. For example, the Edit buttons in the AutoFill pane of Safari Settings include ellipses because they open other views that let people modify autofill values.

**Consider supporting spring loading.** On systems with a Magic Trackpad, *spring loading* lets people activate a button by dragging selected items over it and force clicking — that is, pressing harder — without dropping the selected items. After force clicking, people can continue dragging the items, possibly to perform additional actions.

#### Square buttons

A *square button* (also known as a *gradient button*) initiates an action related to a view, like adding or removing rows in a table.

Square buttons contain symbols or icons — not text — and you can configure them to behave like push buttons, toggles, or pop-up buttons. The buttons appear in close proximity to their associated view — usually within or beneath it — so people know which view the buttons affect.

**Use square buttons in a view, not in the window frame.** Square buttons aren’t intended for use in toolbars or status bars. If you need a button in a [toolbar](https://developer.apple.com/design/human-interface-guidelines/toolbars), use a toolbar item.

**Prefer using a symbol in a square button.** [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) provides a wide range of symbols that automatically receive appropriate coloring in their default state and in response to user interaction.

**Avoid using labels to introduce square buttons.** Because square buttons are closely connected with a specific view, their purpose is generally clear without the need for descriptive text.

For developer guidance, see [`NSButton.BezelStyle.smallSquare`](https://developer.apple.com/documentation/AppKit/NSButton/BezelStyle-swift.enum/smallSquare).

#### Help buttons

A *help button* appears within a view and opens app-specific help documentation.

Help buttons are circular, consistently sized buttons that contain a question mark. For guidance on creating help documentation, see [Offering help](https://developer.apple.com/design/human-interface-guidelines/offering-help).

**Use the system-provided help button to display your help documentation.** People are familiar with the appearance of the standard help button and know that choosing it opens help content.

**When possible, open the help topic that’s related to the current context.** For example, the help button in the Rules pane of Mail settings opens the Mail User Guide to a help topic that explains how to change these settings. If no specific help topic applies directly to the current context, open the top level of your app’s help documentation when people choose a help button.

**Include no more than one help button per window.** Multiple help buttons in the same context make it hard for people to predict the result of clicking one.

**Position help buttons where people expect to find them.** Use the following locations for guidance.

| View style | Help button location |
| --- | --- |
| Dialog with dismissal buttons (like OK and Cancel) | Lower corner, opposite to the dismissal buttons and vertically aligned with them |
| Dialog without dismissal buttons | Lower-left or lower-right corner |
| Settings window or pane | Lower-left or lower-right corner |

**Use a help button within a view, not in the window frame.** For example, avoid placing a help button in a toolbar or status bar.

**Avoid displaying text that introduces a help button.** People know what a help button does, so they don’t need additional descriptive text.

#### Image buttons

An *image button* appears in a view and displays an image, symbol, or icon. You can configure an image button to behave like a push button, toggle, or pop-up button.

**Use an image button in a view, not in the window frame.** For example, avoid placing an image button in a toolbar or status bar. If you need to use an image as a button in a toolbar, use a toolbar item. See [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars).

**Include about 10 pixels of padding between the edges of the image and the button edges.** An image button’s edges define its clickable area even when they aren’t visible. Including padding ensures that a click registers correctly even if it’s not precisely within the image. In general, avoid including a system-provided border in an image button; for developer guidance, see [`isBordered`](https://developer.apple.com/documentation/AppKit/NSButton/isBordered).

**If you need to include a label, position it below the image button.** For related guidance, see [Labels](https://developer.apple.com/design/human-interface-guidelines/labels).

### visionOS

A visionOS button typically includes a visible background that can help people see it, and the button plays sound to provide feedback when people interact with it.

<video width="934" controls=""><source src="https://docs-assets.developer.apple.com/published/903604027461d87db17614a241d220a5/visionos-button-styles-animation.mp4"></video> [Play](#)

There are three standard button shapes in visionOS. Typically, an icon-only button uses a [`circle`](https://developer.apple.com/documentation/SwiftUI/ButtonBorderShape/circle) shape, a text-only button uses a [`roundedRectangle`](https://developer.apple.com/documentation/SwiftUI/ButtonBorderShape/roundedRectangle) or [`capsule`](https://developer.apple.com/documentation/SwiftUI/ButtonBorderShape/capsule) shape, and a button that includes both an icon and text uses the capsule shape.

visionOS buttons use different visual styles to communicate four different interaction states.

![An image of a circular button that contains an icon of an outlined square with rounded corners. The button background is dark and the dashed outline is white.](https://docs-assets.developer.apple.com/published/aed0b1c313448f088dd1ee24663db11e/visionos-button-state-idle%402x.png)

Idle

![An image of a circular button that contains an icon of an outlined square with rounded corners. The button background is medium dark and the outline is white.](https://docs-assets.developer.apple.com/published/29d708fd7985184cbee9d90d7684da92/visionos-button-state-hover%402x.png)

Hover

![An image of a circular button that contains an icon of an outlined square with rounded corners. The button background is white and the outline is black.](https://docs-assets.developer.apple.com/published/0b94e710605235dfca19ef853499cf26/visionos-button-state-selected%402x.png)

Selected

![An image of a circular button that contains an icon of an outlined square with rounded corners. The button background is very dark and the outline is light.](https://docs-assets.developer.apple.com/published/737120252765e5427161af32bb17e7fb/visionos-button-state-unavailable%402x.png)

Unavailable

In addition to the four states shown above, a button can also reveal a tooltip when people look at it for a brief time. In general, buttons that contain text don’t need to display a tooltip because the button’s descriptive label communicates what it does.

<video width="747" controls=""><source src="https://docs-assets.developer.apple.com/published/a2ca615bed663efa69fa7747a74c2e7f/visionos-button-dwell-tooltip.mp4"></video> [Play](#)

In visionOS, buttons can have the following sizes.

| Shape | Mini (28 pt) | Small (32 pt) | Regular (44 pt) | Large (52 pt) | Extra large (64 pt) |
| --- | --- | --- | --- | --- | --- |
| Circular | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) |
| Capsule (text only) |  | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) |  |
| Capsule (text and icon) |  |  | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) |  |
| Rounded rectangle |  | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) | ![A checkmark denoting availability.](https://docs-assets.developer.apple.com/published/f8895e190f6982b85fdc825337ca7f28/table-availability-checkmark~dark%402x.png) |  |

**Prefer buttons that have a discernible background shape and fill.** It tends to be easier for people to see a button when it’s enclosed in a shape that uses a contrasting background fill. The exception is a button in a toolbar, context menu, alert, or [ornament](https://developer.apple.com/design/human-interface-guidelines/ornaments) where the shape and material of the larger component make the button comfortably visible. The following guidelines can help you ensure that a button looks good in different contexts:

- When a button appears on top of a glass [window](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS), use the [`thin`](https://developer.apple.com/documentation/SwiftUI/Material/thin) material as the button’s background.
- When a button appears floating in space, use the [glass material](https://developer.apple.com/design/human-interface-guidelines/materials#visionOS) for its background.

**Avoid creating a custom button that uses a white background fill and black text or icons.** The system reserves this visual style to convey the toggled state.

**In general, prefer circular or capsule-shape buttons.** People’s eyes tend to be drawn toward the corners in a shape, making it difficult to keep looking at the shape’s center. The more rounded a button’s shape, the easier it is for people to look steadily at it. When you need to display a button by itself, prefer a capsule-shape button.

**Provide enough space around a button to make it easy for people to look at it.** Aim to place buttons so their centers are always at least 60 pts apart. If your buttons measure 60 pts or larger, add 4 pts of padding around them to keep the hover effect from overlapping. Also, it’s usually best to avoid displaying small or mini buttons in a vertical stack or horizontal row.

**Choose the right shape if you need to display text-labeled buttons in a stack or row.** Specifically, prefer the rounded-rectangle shape in a vertical stack of buttons and prefer the capsule shape in a horizontal row of buttons.

**Use standard controls to take advantage of the audible feedback sounds people already know.** Audible feedback is especially important in visionOS, because the system doesn’t play haptics.

### watchOS

watchOS displays all inline buttons using the [`capsule`](https://developer.apple.com/documentation/SwiftUI/ButtonBorderShape/capsule) button shape. When you place a button inline with content, it gains a material effect that contrasts with the background to ensure legibility.

![An illustration that represents a screen on Apple Watch, which includes capsule-shaped Primary and Secondary buttons.](https://docs-assets.developer.apple.com/published/79565402ab107166de9aa0fe6eab4e6d/buttons-watch-full-width%402x.png)

**Use a toolbar to place buttons in the corners.** The system automatically moves the time and title to accommodate toolbar buttons. The system also applies the [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) appearance to toolbar buttons, providing a clear visual distinction from the content beneath them.

![An illustration showing toolbar buttons in the top leading and trailing corners, as well as three toolbar buttons across the bottom of the screen.](https://docs-assets.developer.apple.com/published/28835a2c6f34513eb0758beef1f6015d/buttons-watch-toolbar-corners%402x.png)

**Prefer buttons that span the width of the screen for primary actions in your app.** Full-width buttons look better and are easier for people to tap. If two buttons must share the same horizontal space, use the same height for both, and use images or short text titles for each button’s content.

**Use toolbar buttons to provide either navigation to related areas or contextual actions for the view’s content.** These buttons provide access to additional information or secondary actions for the view’s content.

**Use the same height for vertical stacks of one- and two-line text buttons.** As much as possible, use identical button heights for visual consistency.

## Resources

#### Related

[Pop-up buttons](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)

[Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

[Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles)

[Segmented controls](https://developer.apple.com/design/human-interface-guidelines/segmented-controls)

[Location button](https://developer.apple.com/design/human-interface-guidelines/privacy#Location-button)

#### Developer documentation

[`Button`](https://developer.apple.com/documentation/SwiftUI/Button) — SwiftUI

[`UIButton`](https://developer.apple.com/documentation/UIKit/UIButton) — UIKit

[`NSButton`](https://developer.apple.com/documentation/AppKit/NSButton) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| December 16, 2025 | Updated guidance for Liquid Glass. |
| June 9, 2025 | Updated guidance for button styles and content. |
| February 2, 2024 | Noted that visionOS buttons don’t support custom hover effects. |
| December 5, 2023 | Clarified some terminology and guidance for buttons in visionOS. |
| June 21, 2023 | Updated to include guidance for visionOS. |
| June 5, 2023 | Updated guidance for using buttons in watchOS. |

---

---
title: "Context menus"
source: "https://developer.apple.com/design/human-interface-guidelines/context-menus"
author:
published:
created: 2026-06-11
description: "A context menu provides access to functionality that’s directly related to an item, without cluttering the interface."
tags:
  - "clippings"
---
![A stylized representation of a contextual menu beneath a clicking pointer. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/9f6b0259748a5692f6f43edc9a8e9ebf/components-context-menu-intro~dark%402x.png)

Although a context menu provides convenient access to frequently used items, it’s hidden by default, so people might not know it’s there. To reveal a context menu, people generally choose a view or select some content and then perform an action, using the input modes their current configuration supports. For example:

- The system-defined touch or pinch and hold gesture in visionOS, iOS, and iPadOS
- Pressing the Control key while clicking a pointing device in macOS and iPadOS
- Using a secondary click on a Magic Trackpad in macOS or iPadOS

## Best practices

**Prioritize relevancy when choosing items to include in a context menu.** A context menu isn’t for providing advanced or rarely used items; instead, it helps people quickly access the commands they’re most likely to need in their current context. For example, the context menu for a Mail message in the Inbox includes commands for replying and moving the message, but not commands for editing message content, managing mailboxes, or filtering messages.

**Aim for a small number of menu items.** A context menu that’s too long can be difficult to scan and scroll.

**Support context menus consistently throughout your app.** If you provide context menus for items in some places but not in others, people won’t know where they can use the feature and may think there’s a problem.

**Always make context menu items available in the main interface, too.** For example, in Mail in iOS and iPadOS, the context menu items that are available for a message in the Inbox are also available in the toolbar of the message view. In macOS, an app’s menu bar menus list all the app’s commands, including those in various context menus.

**If you need to use submenus to manage a menu’s complexity, keep them to one level.** A submenu is a menu item that reveals a secondary menu of logically related commands. Although submenus can shorten a context menu and clarify its commands, more than one level of submenu complicates the experience and can be difficult for people to navigate. If you need to include a submenu, give it an intuitive title that helps people predict its contents without opening it. For guidance, see [Submenus](https://developer.apple.com/design/human-interface-guidelines/menus#Submenus).

**Hide unavailable menu items, don’t dim them.** Unlike a regular menu, which helps people discover actions they can perform even when the action isn’t available, a context menu displays only the actions that are relevant to the currently selected view or content. In macOS, the exceptions are the Cut, Copy, and Paste menu items, which may appear unavailable if they don’t apply to the current context.

**Aim to place the most frequently used menu items where people are likely to encounter them first.** When a context menu opens, people often read it starting from the part that’s closest to where their finger or pointer revealed it. Depending on the location of the selected content, a context menu might open above or below it, so you might also need to reverse the order of items to match the position of the menu.

**Show keyboard shortcuts in your app’s main menus, not in context menus.** Context menus already provide a shortcut to task-specific commands, so it’s redundant to display keyboard shortcuts too.

**Follow best practices for using separators.** As with other types of menus, you can use separators to group items in a context menu and help people scan the menu more quickly. In general, you don’t want more than about three groups in a context menu. For guidance, see [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

**In iOS, iPadOS, and visionOS, warn people about context menu items that can destroy data.** If you need to include potentially destructive items in your context menu — such as Delete or Remove — list them at the end of the menu and identify them as destructive (for developer guidance, see [`destructive`](https://developer.apple.com/documentation/UIKit/UIMenuElement/Attributes/destructive)). The system can display a destructive menu item using a red text color.

## Content

A context menu seldom displays a title. In contrast, each item in a context menu needs to display a short label that clearly describes what it does. For guidance, see [Menus > Labels](https://developer.apple.com/design/human-interface-guidelines/menus#Labels).

**Include a title in a context menu only if doing so clarifies the menu’s effect.** For example, when people select multiple Mail messages and tap the Mark toolbar button in iOS and iPadOS, the resulting context menu displays a title that states the number of selected messages, reminding people that the command they choose affects all the messages they selected.

**Represent menu item actions with familiar icons.** Icons help people recognize common actions throughout your app. Use the same icons as the system to represent actions such as Copy, Share, and Delete, wherever they appear. For a list of icons that represent common actions, see [Standard icons](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons). For additional guidance, see [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

## Platform considerations

*No additional considerations for tvOS. Not supported in watchOS.*

### iOS, iPadOS

**Provide either a context menu or an edit menu for an item, but not both.** If you provide both features for the same item, it can be confusing to people — and difficult for the system to detect their intent. See [Edit menus](https://developer.apple.com/design/human-interface-guidelines/edit-menus).

**In iPadOS, consider using a context menu to let people create a new object in your app.** iPadOS lets you reveal a context menu when people perform a long press on the touchscreen or use a secondary click with an attached trackpad or keyboard. For example, Files lets people create a new folder by revealing a context menu in an area between existing files and folders.

In iOS and iPadOS, a context menu can display a preview of the current content near the list of commands. People can choose a command in the menu or — in some cases — they can tap the preview to open it or drag it to another area.

**Prefer a graphical preview that clarifies the target of a context menu’s commands.** For example, when people reveal a context menu on a list item in Notes or Mail, the preview shows a condensed version of the actual content to help people confirm that they’re working with the item they intend.

**Ensure that your preview looks good as it animates.** As people reveal a context menu on an onscreen object, the system animates the preview image as it emerges from the content, dimming the screen behind the preview and the menu. It’s important to adjust the preview’s clipping path to match the shape of the preview image so that its contours, such as the rounded corners, don’t appear to change during animation. For developer guidance, see [`UIContextMenuInteractionDelegate`](https://developer.apple.com/documentation/UIKit/UIContextMenuInteractionDelegate).

### macOS

On a Mac, a context menu is sometimes called a *contextual* menu.

### visionOS

**Consider using a context menu instead of a panel or inspector window to present frequently used functionality.** Minimizing the number of separate views or windows your app opens can help people keep their space uncluttered.

**In general, avoid letting a context menu’s height exceed the height of the window.** In visionOS, a window includes system-provided components above and below its top and bottom edges, such as window-management controls and the Share menu, so a context menu that’s too tall could obscure them. As you consider the number of items to include, be guided by the ways people are likely to use your app. For example, people who use an app to accomplish in-depth, specialist tasks often expect to spend time learning a large number of sophisticated commands and might appreciate contextual access to them. On the other hand, people who use an app to perform a few simple actions may appreciate short contextual menus that are quick to scan and use.

## Resources

#### Related

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

[Edit menus](https://developer.apple.com/design/human-interface-guidelines/edit-menus)

[Pop-up buttons](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)

[Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

#### Developer documentation

[`contextMenu(menuItems:)`](https://developer.apple.com/documentation/SwiftUI/View/contextMenu\(menuItems:\)) — SwiftUI

[`UIContextMenuInteraction`](https://developer.apple.com/documentation/UIKit/UIContextMenuInteraction) — UIKit

[`popUpContextMenu(_:with:for:)`](https://developer.apple.com/documentation/AppKit/NSMenu/popUpContextMenu\(_:with:for:\)) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| December 5, 2023 | Added guidance on hiding unavailable menu items. |
| June 21, 2023 | Updated to include guidance for visionOS. |
| September 14, 2022 | Refined guidance on including a submenu and added a guideline on using a context menu to support object creation in an iPadOS app. |


---

---
title: "Dock menus"
source: "https://developer.apple.com/design/human-interface-guidelines/dock-menus"
author:
published:
created: 2026-06-11
description: "On a Mac, people can secondary click an app’s or game’s icon in the Dock to reveal a Dock menu, which presents both system-provided and custom items."
tags:
  - "clippings"
---
![A stylized representation of a menu extending from an icon in the Dock. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/8a9bbbe5548d75e3b9fea9f3d53f7f0e/components-dock-menu-intro~dark%402x.png)

The system-provided Dock menu items can vary depending on whether the app is open. For example, the Dock menu for Safari includes menu items for actions like viewing a current window or creating a new window.

## Best practices

As with all menus, you need to label Dock menu items succinctly and organize them logically. For guidance, see [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

**Make custom Dock menu items available in other places, too.** Not everyone uses a Dock menu, so it’s important to offer the same commands elsewhere, like in your menu bar menus or within your interface.

**Prefer high-value custom items for your Dock menu.** For example, a Dock menu can list all currently or recently open windows, making it a convenient way to jump to the window people want. Also consider listing a few of the actions that are most likely to be useful when your app isn’t frontmost or when there are no open windows. For example, Mail includes items for getting new mail and composing a new message in addition to listing all open windows.

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

[Home Screen quick actions](https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions)

#### Developer documentation

[`applicationDockMenu(_:)`](https://developer.apple.com/documentation/AppKit/NSApplicationDelegate/applicationDockMenu\(_:\)) — AppKit

---
---
title: "Edit menus"
source: "https://developer.apple.com/design/human-interface-guidelines/edit-menus"
author:
published:
created: 2026-06-11
description: "An edit menu lets people make changes to selected content in the current view, in addition to offering related commands like Copy, Select, Translate, and Look Up."
tags:
  - "clippings"
---
![A stylized representation of an edit menu extending from selected text. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/bce8928c8f3ac503bfe241fd3de75263/components-edit-menu-intro~dark%402x.png)

In addition to text, an edit menu’s commands can apply to many types of selectable content, such as images, files, and objects like contact cards, charts, or map locations. In iOS, iPadOS, and visionOS, the system automatically detects the data type of a selected item, which can result in the addition of a related action to the edit menu. For example, selecting an address can add an item like *Get directions* to the edit menu.

Edit menus can look and behave slightly differently in different platforms.

- In iOS, the edit menu displays commands in a compact, horizontal list that appears when people touch and hold or double-tap to select content in a view. People can tap a chevron on the trailing edge to expand it into a [context menu](https://developer.apple.com/design/human-interface-guidelines/context-menus).
- In iPadOS, the edit menu looks different depending on how people reveal it. When people use touch interactions to reveal the menu, it uses the compact, horizontal appearance. In contrast, when people use a keyboard or pointing device to reveal it, the edit menu opens directly in a context menu.
- In macOS, people can access editing commands in a context menu they can reveal while in an editing task, as well as through the app’s [Edit menu](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Edit-menu) in the menu bar.
- In visionOS, people use the standard [pinch and hold](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures) gesture to open the edit menu as a horizontal bar, or they can open it in a context menu.

Editing content is rare in tvOS and watchOS experiences, so the system doesn’t provide an edit menu in these platforms.

## Best practices

**Prefer the system-provided edit menu.** People are familiar with the contents and behavior of the system-provided component, so creating a custom menu that presents the same commands is redundant and likely to be confusing. For a list of standard edit menu commands, see [`UIResponderStandardEditActions`](https://developer.apple.com/documentation/UIKit/UIResponderStandardEditActions).

**Let people reveal an edit menu using the system-defined interactions they already know.** For example, people expect to touch and hold on a touchscreen, pinch and hold in visionOS, or use a secondary click with an attached trackpad or keyboard. Although the interactions to reveal an edit menu can differ based on platform, people don’t appreciate having to learn a custom interaction to perform a standard task.

**Offer commands that are relevant in the current context, removing or dimming commands that don’t apply.** For example, if nothing is selected, avoid showing options that require a selection, such as Copy or Cut. Similarly, avoid showing a Paste option when there’s nothing to paste.

**List custom commands near relevant system-provided ones.** For example, if you offer custom formatting commands, you can help maintain the ordering people expect by listing them after the system-provided commands in the format section. Avoid overwhelming people with too many custom commands.

**When it makes sense, let people select and copy noneditable text.** People appreciate being able to paste static content — such as an image caption or social media status — into a message, note, or web search. In general, let people copy content text, but not control labels.

**Support undo and redo when possible.** Like all menus, an edit menu doesn’t require confirmation before performing its actions, so people can easily use undo and redo to recover a previous state. For guidance, see [Undo and redo](https://developer.apple.com/design/human-interface-guidelines/undo-and-redo).

**In general, avoid implementing other controls that perform the same functions as edit menu items.** People typically expect to choose familiar edit commands in an edit menu, or use standard keyboard shortcuts. Offering redundant controls can crowd your interface, giving you less space for presenting actions that people might not already know about.

**Differentiate different types of deletion commands when necessary.** For example, a Delete menu item behaves the same as pressing a Delete key, but a Cut menu item copies the selected content to the system pasteboard before deleting it.

## Content

**Create short labels for custom commands.** Use verbs or short verb phrases that succinctly describe the action your command performs. For guidance, see [Labels](https://developer.apple.com/design/human-interface-guidelines/labels).

## Platform considerations

*No additional considerations for visionOS. Not supported in tvOS or watchOS.*

### iOS, iPadOS

**Ensure your edit menu works well in both styles.** The system displays the compact, horizontal style when people use Multi-Touch gestures to reveal the edit menu, and the vertical style when people use a keyboard or pointing device to reveal it. For guidance using the vertical menu layout, see [Menus > iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/menus#iOS-iPadOS).

**Adjust an edit menu’s placement, if necessary.** Depending on available space, the default menu position is above or below the insertion point or selection. The system also displays a visual indicator that points to the targeted content. Although you can’t change the shape of the menu or its pointer, you can change the menu’s position. For example, you might need to move the menu to prevent it from covering important content or parts of your interface.

### macOS

To learn about the order of items in a macOS app’s Edit menu, see [Edit menu](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Edit-menu).

## Resources

#### Related

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

[Context menus](https://developer.apple.com/design/human-interface-guidelines/context-menus)

[The menu bar](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar)

[Undo and redo](https://developer.apple.com/design/human-interface-guidelines/undo-and-redo)

#### Developer documentation

[`UIEditMenuInteraction`](https://developer.apple.com/documentation/UIKit/UIEditMenuInteraction) — UIKit

[`NSMenu`](https://developer.apple.com/documentation/AppKit/NSMenu) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 21, 2023 | Updated to include guidance for visionOS. |
| September 14, 2022 | Added guidance on supporting both edit-menu styles in iPadOS. |

---

---
title: "Home Screen quick actions"
source: "https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions"
author:
published:
created: 2026-06-11
description: "Home Screen quick actions give people a way to perform app-specific actions from the Home Screen."
tags:
  - "clippings"
---
![A stylized representation of a set of menu items extending up from an app icon. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/88377b734369e54b9ec9780a18657ab7/components-home-screen-quick-actions-intro~dark%402x.png)

People can get a menu of available quick actions when they touch and hold an app icon (on a 3D Touch device, people can press on the icon with increased pressure to see the menu). For example, Mail includes quick actions that open the Inbox or the VIP mailbox, initiate a search, and create a new message. In addition to app-specific actions, a Home Screen quick action menu also lists items for removing the app and editing the Home Screen.

Each Home Screen quick action includes a title, an interface icon on the left or right (depending on your app’s position on the Home Screen), and an optional subtitle. The title and subtitle are always left-aligned in left-to-right languages. Your app can even dynamically update its quick actions when new information is available. For example, Messages provides quick actions for opening your most recent conversations.

## Best practices

**Create quick actions for compelling, high-value tasks.** For example, Maps lets people search near their current location or get directions home without first opening the Maps app. People tend to expect every app to provide at least one useful quick action; you can provide a total of four.

**Avoid making unpredictable changes to quick actions.** Dynamic quick actions are a great way to keep actions relevant. For example, it may make sense to update quick actions based on the current location or recent activities in your app, time of day, or changes in settings. Make sure that actions change in ways that people can predict.

**For each quick action, provide a succinct title that instantly communicates the results of the action.** For example, titles like “Directions Home,” “Create New Contact,” and “New Message” can help people understand what happens when they choose the action. If you need to give more context, provide a subtitle too. Mail uses subtitles to indicate whether there are unread messages in the Inbox and VIP folder. Don’t include your app name or any extraneous information in the title or subtitle, keep the text short to avoid truncation, and take localization into account as you write the text.

**Provide a familiar interface icon for each quick action.** Prefer using [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) to represent actions. For a list of icons that represent common actions, see [Standard icons](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons); for additional guidance, see [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

If you design your own interface icon, use the Quick Action Icon Template that’s included with [Apple Design Resources for iOS and iPadOS](https://developer.apple.com/design/resources/#ios-apps).

**Don’t use an emoji in place of a symbol or interface icon.** Emojis are full color, whereas quick action symbols are monochromatic and change appearance in Dark Mode to maintain contrast.

## Platform considerations

*No additional considerations for iOS or iPadOS. Not supported in macOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

#### Developer documentation

[Add Home Screen quick actions](https://developer.apple.com/documentation/UIKit/add-home-screen-quick-actions) — UIKit


---


---
title: "Menus"
source: "https://developer.apple.com/design/human-interface-guidelines/menus"
author:
published:
created: 2026-06-11
description: "A menu reveals its options when people interact with it, making it a space-efficient way to present commands in your app or game."
tags:
  - "clippings"
---
![A stylized representation of a menu containing a selected item and displaying a submenu. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/78decdbe7169af6e569d7753a0e4a109/components-menus-intro~dark%402x.png)

Menus are ubiquitous in apps and games, so most people already know how to use them. Whether you use system-provided components or custom ones, people expect menus to behave in familiar ways. For example, people understand that opening a menu reveals one or more *menu items*, each of which represents a command, option, or state that affects the current selection or context. The guidance for labeling and organizing menu items applies to all types of menus in all experiences.

## Labels

A menu item’s label describes what it does and may include a symbol if it helps to clarify meaning. In an app, a menu item can also display the associated keyboard command, if there is one; in a game, a menu item rarely displays a keyboard command because a game typically needs to handle input from a wider range of devices and may offer game-specific mappings for various keys.

**For each menu item, write a label that clearly and succinctly describes it.** In general, label a menu item that initiates an action using a verb or verb phrase that describes the action, such as View, Close, or Select. For guidance labeling menu items that show and hide something in the interface or show the currently selected state of something, see [Toggled items](https://developer.apple.com/design/human-interface-guidelines/menus#Toggled-items). As with all the copy you write, let your app’s or game’s communication style guide the tone of the menu-item labels you create.

**To be consistent with platform experiences, use title-style capitalization.** Although a game might have a different writing style, generally prefer using title-style capitalization, which capitalizes every word except articles, coordinating conjunctions, and short prepositions, and capitalizes the last word in the label, regardless of the part of speech. For complete guidance on this style of capitalization in English, see [title-style capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64).

**Remove articles like *a*, *an*, and *the* from menu-item labels to save space.** In English, articles always lengthen labels, but rarely enhance understanding. For example, changing a menu-item label from View Settings to View the Settings doesn’t provide additional clarification.

**Show people when a menu item is unavailable.** An unavailable menu item often appears dimmed and doesn’t respond to interactions. If all of a menu’s items are unavailable, the menu itself needs to remain available so people can open it and learn about the commands it contains.

**Append an ellipsis to a menu item’s label when the action requires more information before it can complete.** The ellipsis character (…) signals that people need to input information or make additional choices, typically within another view.

## Icons

**Represent common actions consistently.** The system provides standard icons to represent common actions like Share, Print, and Search. Using standard icons makes your app easier to use and more familiar. For a list of icons that represent common actions, see [Standard icons](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons).

**Use menu item icons sparingly and with purpose.** Icons allow people to find menu items more quickly, and help clarify what selecting an item does. Use an icon to highlight the most common actions and key features of your app, file system locations, connected devices, visual concepts like rotating or flipping an image, and user-generated content like folders and documents. Don’t display an icon if you can’t find one that clearly represents the menu item.

![An illustration of a menu containing the days of the week. Each menu item is represented by a different symbol with no relation to the corresponding day.](https://docs-assets.developer.apple.com/published/5bee7fa7ec2f8e6b2bd8c32ddbde6ce2/menus-days-of-the-week-incorrect-icons~dark%402x.png)

![An illustration of a menu containing the days of the week with no accompanying symbols.](https://docs-assets.developer.apple.com/published/a98395911d1eb99829190d2ae59fc9a6/menus-days-of-the-week-correct-no-icons~dark%402x.png)

**Apply a uniform visual treatment across menu items in the same group.** For visual consistency and balance, provide icons for all menu items in a group, or none of them.

![An illustration of a menu containing two groups. The top group contains four items, and none of them have a corresponding icon. The bottom group contains two items, and each of them have an icon.](https://docs-assets.developer.apple.com/published/c39e0951e8dc5f194cb6f6f8ccd8b46a/menus-groups-visual-treatment~dark%402x.png)

## Organization

Organizing menu items in ways that reflect how people use your app or game can make your experience feel straightforward and easy to use.

**Prefer listing important or frequently used menu items first.** People tend to start scanning a menu from the top, so listing high-priority items first often means that people can find what they want without reading the entire menu.

**Consider grouping logically related items.** For example, grouping editing commands like Copy, Cut, and Paste or camera commands like Look Up, Look Down, and Look Left can help people remember where to find them. To help people visually distinguish such groups, use a separator. Depending on the platform and type of menu, a *separator* appears between groups of items as a horizontal line or a short gap in the menu’s background appearance.

**Prefer keeping all logically related commands in the same group, even if the commands don’t all have the same importance.** For example, people generally use Paste and Match Style much less often than they use Paste, but they expect to find both commands in the same group that contains more frequently used editing commands like Copy and Cut.

**Be mindful of menu length.** People need more time and attention to read a long menu, which means they may miss the command they want. If a menu is too long, consider dividing it into separate menus. Alternatively, you might be able to use a submenu to shorten the list, such as listing difficulty levels in a submenu of a New Game menu item. The exception is when a menu contains user-defined or dynamically generated content, like the History and Bookmarks menus in Safari. People expect such a menu to accommodate all the items they add to it, so a long menu is fine, and scrolling is acceptable.

## Submenus

Sometimes, a menu item can reveal a set of closely related items in a subordinate list called a *submenu*. A menu item indicates the presence of a submenu by displaying a symbol — like a chevron — after its label. Submenus are functionally identical to menus, aside from their hierarchical positioning.

**Use submenus sparingly.** Each submenu adds complexity to the interface and hides the items it contains. You might consider creating a submenu when a term appears in more than two menu items in the same group. For example, instead of offering separate menu items for Sort by Date, Sort by Score, and Sort by Time, a game could present a menu item that uses a submenu to list the sorting options Date, Score, and Time. It generally works well to use the repeated term — in this case, *Sort by* — in the menu item’s label to help people predict the contents of the submenu.

**Limit the depth and length of submenus.** It can be difficult for people to reveal multiple levels of hierarchical submenus, so it’s generally best to restrict them to a single level. Also, if a submenu contains more than about five items, consider creating a new menu.

**Make sure a submenu remains available even when its nested menu items are unavailable.** A submenu item — like all menu items — needs to let people open it and learn about the commands it contains.

**Prefer using a submenu to indenting menu items.** Using indentation is inconsistent with the system and doesn’t clearly express the relationships between the menu items.

## Toggled items

Menu items often represent attributes or objects that people can turn on or off. If you want to avoid listing a separate menu item for each state, it can be efficient to create a single, toggled menu item that communicates the current state and lets people change it.

![An illustration of a menu containing four items, with a checkmark icon on the leading edge of the second item.](https://docs-assets.developer.apple.com/published/9c08fc34de2e9cd511676e6162863ff1/menus-toggled-item~dark%402x.png)

**Consider using a changeable label that describes an item’s current state.** For example, instead of listing two menu items like Show Map and Hide Map, you could include one menu item whose label changes from Show Map to Hide Map, depending on whether the map is visible.

**Include a verb if a changeable label isn’t clear enough.** For example, people might not know whether the changeable labels HDR On and HDR Off describe actions or states. If you needed to clarify that these items represent actions, you could add verbs to the labels, like Turn HDR On and Turn HDR Off.

**If necessary, display both menu items instead of one toggled item.** Sometimes, it helps people to view both actions or states at the same time. For example, a game could list both Take Account Online and Take Account Offline items, so when someone’s account is online, only the Take Account Offline menu item appears available.

**Consider using a checkmark to show that an attribute is currently in effect.** It’s easy for people to scan for checkmarks in a list of attributes to find the ones that are selected. For example, in the standard Format > Font menu, checkmarks can make it easy for people notice the styles that apply to selected text.

**Consider offering a menu item that makes it easy to remove multiple toggled attributes.** For example, if you let people apply several styles to selected text, it can work well to provide a menu item — such as Plain — that removes all applied formatting attributes at one time.

## In-game menus

In-game menus give players ways to control gameplay as well as determine [settings](https://developer.apple.com/design/human-interface-guidelines/settings) for the game as a whole.

**Let players navigate in-game menus using the platform’s default interaction method.** People expect to use the same interactions to navigate your menus as they use for navigating other menus on the device. For example, players expect to navigate your game menus using touch in iOS and iPadOS, and direct and indirect gestures in visionOS.

**Make sure your menus remain easy to open and read on all platforms you support.** Each platform defines specific sizes that work best for fonts and interaction targets. Sometimes, scaling your game content to display on a different screen — especially a mobile device screen — can make in-game menus too small for people to read or interact with. If this happens, modify the size of the tap targets and consider alternative ways to communicate the menu’s content. For guidance, see [Typography](https://developer.apple.com/design/human-interface-guidelines/typography) and [Touch controls](https://developer.apple.com/design/human-interface-guidelines/game-controls#Touch-controls).

## Platform considerations

*No additional considerations for macOS, tvOS, or watchOS.*

### iOS, iPadOS

In iOS and iPadOS, a menu can display items in one of the following three layouts.

![A diagram showing small, medium, and large menu layouts, each containing the same set of menu items.](https://docs-assets.developer.apple.com/published/963ad270daa5e4c68ff4fbd531a9cb3d/small-medium-large-menu-layouts~dark%402x.png)

- **Small.** A row of four items appears at the top of the menu, above a list that contains the remaining items. For each item in the top row, the menu displays a symbol or icon, but no label.
- **Medium.** A row of three items appears at the top of the menu, above a list that contains the remaining items. For each item in the top row, the menu displays a symbol or icon above a short label.
- **Large (the default).** The menu displays all items in a list.

For developer guidance, see [`preferredElementSize`](https://developer.apple.com/documentation/UIKit/UIMenu/preferredElementSize).

**Choose a small or medium menu layout when it can help streamline people’s choices.** Consider using the medium layout if your app has three important actions that people often want to perform. For example, Notes uses the medium layout to give people a quick way to perform the Scan, Lock, and Pin actions. Use the small layout only for closely related actions that typically appear as a group, such as Bold, Italic, Underline, and Strikethrough. For each action, use a recognizable symbol that helps people identify the action without a label.

### visionOS

In visionOS, a menu can display items using the small or large layout styles that iOS and iPadOS define (for guidance, see [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/menus#iOS-iPadOS)). You can present a menu in your app or game from 3D content using a SwiftUI view. To ensure that your menu is always visible to people, even when other content occludes it, you can apply a [breakthrough effect](https://developer.apple.com/documentation/swiftui/view/presentationbreakthrougheffect\(_:\)). As in macOS, an open menu in a visionOS window can appear outside of the window’s boundaries.

**Prefer displaying a menu near the content it controls.** Because people need to look at a menu item before tapping it, they might miss the item’s effect if the content it controls is too far away.

![A partial screenshot showing an app window in visionOS. The window contains several buttons, including a 'More' button, which is selected. A menu containing a list of actions is displayed beneath the button.](https://docs-assets.developer.apple.com/published/ebdeac86703b1a5e8b3da0f2d91fa702/visionos-notes-menu-popover-style%402x.png)

**Prefer the subtle breakthrough effect in most cases.** This effect blends the presentation with its surrounding content, to maintain legibility and usability while preserving the depth and context of the scene. When you select [`automatic`](https://developer.apple.com/documentation/SwiftUI/BreakthroughEffect/automatic) for the breakthrough effect of a menu that overlaps with 3D content, the system applies [`subtle`](https://developer.apple.com/documentation/SwiftUI/BreakthroughEffect/subtle) by default. You can use [`prominent`](https://developer.apple.com/documentation/SwiftUI/BreakthroughEffect/prominent) if it’s important to display a menu prominently over the entire scene in your app or game, but this can disrupt the experience for people and potentially cause discomfort. Alternatively, you can use [`none`](https://developer.apple.com/documentation/SwiftUI/BreakthroughEffect/none) to fully occlude your menu behind other 3D content — for example, in a puzzle game that requires people to navigate around barriers — but this may make it difficult for people to see and access the menu.

## Resources

#### Related

[Pop-up buttons](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)

[Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

[Context menus](https://developer.apple.com/design/human-interface-guidelines/context-menus)

[The menu bar](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar)

#### Developer documentation

[`Menu`](https://developer.apple.com/documentation/SwiftUI/Menu) — SwiftUI

[Menus and shortcuts](https://developer.apple.com/documentation/UIKit/menus-and-shortcuts) — UIKit

[Menus](https://developer.apple.com/documentation/AppKit/menus) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Updated guidance for menu item icons. |
| December 16, 2025 | Added guidance for presenting menus with breakthrough effects in visionOS. |
| July 28, 2025 | Added guidance for representing menu items with icons. |
| June 10, 2024 | Added guidance for in-game menus and included game-specific examples. |
| June 21, 2023 | Updated to include guidance for visionOS. |
| September 14, 2022 | Added guidelines for using the small, medium, and large menu layouts in iPadOS. |

---

---
title: "Ornaments"
source: "https://developer.apple.com/design/human-interface-guidelines/ornaments"
author:
published:
created: 2026-06-11
description: "In visionOS, an ornament presents controls and information related to a window, without crowding or obscuring the window’s contents."
tags:
  - "clippings"
---
![A stylized representation of an ornament at the bottom of a window shown on top of a grid that suggests the canvas of a design tool. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/bf508d6532878f101678051f222af596/components-ornaments-intro~dark%402x.png)

An ornament floats in a plane that’s parallel to its associated window and slightly in front of it along the z-axis. If the associated window moves, the ornament moves with it, maintaining its relative position; if the window’s contents scroll, the controls or information in the ornament remain unchanged.

Ornaments can appear on any edge of a window and can contain UI components like buttons, segmented controls, and other views. The system uses ornaments to create and manage components like [toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars), [tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars), and video playback controls; you can use an ornament to create a custom component.

## Best practices

**Consider using an ornament to present frequently needed controls or information in a consistent location that doesn’t clutter the window.** Because an ornament stays close to its window, people always know where to find it. For example, Music uses an ornament to offer Now Playing controls, ensuring that these controls remain in a predictable location that’s easy to find.

**In general, keep an ornament visible.** It can make sense to hide an ornament when people dive into a window’s content — for example, when they watch a video or view a photo — but in most cases, people appreciate having consistent access to an ornament’s controls.

**If you need to display multiple ornaments, prioritize the overall visual balance of the window.** Ornaments help elevate important actions, but they can sometimes distract from your content. When necessary, consider constraining the total number of ornaments to avoid increasing a window’s visual weight and making your app feel more complicated. If you decide to remove an ornament, you can relocate its elements into the main window.

**Aim to keep an ornament’s width the same or narrower than the width of the associated window.** If an ornament is wider than its window, it can interfere with a tab bar or other vertical content on the window’s side.

**Consider using borderless buttons in an ornament.** By default, an ornament’s background is [glass](https://developer.apple.com/design/human-interface-guidelines/materials#visionOS), so if you place a button directly on the background, it may not need a visible border. When people look at a borderless button in an ornament, the system automatically applies the hover affect to it (for guidance, see [Eyes](https://developer.apple.com/design/human-interface-guidelines/eyes)).

**Use system-provided toolbars and tab bars unless you need to create custom components.** In visionOS, toolbars and tab bars automatically appear as ornaments, so you don’t need to use an ornament to create these components. For developer guidance, see [Toolbars](https://developer.apple.com/documentation/SwiftUI/Toolbars) and [`TabView`](https://developer.apple.com/documentation/SwiftUI/TabView).

## Platform considerations

*Not supported in iOS, iPadOS, macOS, tvOS, or watchOS.*

## Resources

#### Related

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)

#### Developer documentation

[`ornament(visibility:attachmentAnchor:contentAlignment:ornament:)`](https://developer.apple.com/documentation/SwiftUI/View/ornament\(visibility:attachmentAnchor:contentAlignment:ornament:\)) — SwiftUI

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| February 2, 2024 | Added guidance on using multiple ornaments. |
| December 5, 2023 | Removed a statement about using ornaments to present supplementary items. |
| June 21, 2023 | New page. |


---

---
title: "Pop-up buttons"
source: "https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons"
author:
published:
created: 2026-06-11
description: "A pop-up button displays a menu of mutually exclusive options."
tags:
  - "clippings"
---
![A stylized representation of a pop-up button displaying a set of options. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/a02f34fe793c97f85fc15937c3ee5621/components-pop-up-button-intro~dark%402x.png)

After people choose an item from a pop-up button’s menu, the menu closes, and the button can update its content to indicate the current selection.

![A screenshot of Calendar on iPhone, with a new calendar event open for editing. The editing screen contains controls for setting the details of the event, including its start and end dates, travel time, repeat interval, calendar, invitees, alert options, and attachments.](https://docs-assets.developer.apple.com/published/7d51cb5ed6c5cad811cfb8c505c983ff/pop-up-button-closed~dark%402x.png)

![A screenshot of Calendar on iPhone, with a new calendar event open for editing. A pop-up button menu emerges from the Repeat button, with options for choosing a repeat interval from a list of preset options, or creating a custom one.](https://docs-assets.developer.apple.com/published/cd2eb3bb204a5efde4f70704c53ff1e6/pop-up-button-open~dark%402x.png)

## Best practices

**Use a pop-up button to present a flat list of mutually exclusive options or states.** A pop-up button helps people make a choice that affects their content or the surrounding view. Use a [pull-down button](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons) instead if you need to:

- Offer a list of actions
- Let people select multiple items
- Include a submenu

**Provide a useful default selection.** A pop-up button can update its content to identify the current selection, but if people haven’t made a selection yet, it shows the default item you specify. When possible, make the default selection an item that most people are likely to want.

**Give people a way to predict a pop-up button’s options without opening it.** For example, you can use an introductory label or a button label that describes the button’s effect, giving context to the options.

**Consider using a pop-up button when space is limited and you don’t need to display all options all the time.** Pop-up buttons are a space-efficient way to present a wide array of choices.

**If necessary, include a Custom option in a pop-up button’s menu to provide additional items that are useful in some situations.** Offering a Custom option can help you avoid cluttering the interface with items or controls that people need only occasionally. You can also display explanatory text below the list to help people understand how the options work.

## Platform considerations

*No additional considerations for iOS, macOS, or visionOS. Not supported in tvOS or watchOS.*

### iPadOS

**Within a popover or modal view, consider using a pop-up button instead of a disclosure indicator to present multiple options for a list item.** For example, people can quickly choose an option from the pop-up button’s menu without navigating to a detail view. Consider using a pop-up button in this scenario when you have a fairly small, well-defined set of options that work well in a menu.

## Resources

#### Related

[Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

[Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

#### Developer documentation

[`MenuPickerStyle`](https://developer.apple.com/documentation/SwiftUI/MenuPickerStyle) — SwiftUI

[`changesSelectionAsPrimaryAction`](https://developer.apple.com/documentation/UIKit/UIButton/changesSelectionAsPrimaryAction) — UIKit

[`NSPopUpButton`](https://developer.apple.com/documentation/AppKit/NSPopUpButton) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| October 24, 2023 | Added artwork. |
| September 14, 2022 | Added a guideline on using a pop-up button in a popover or modal view in iPadOS. |

---

---
title: "Pull-down buttons"
source: "https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons"
author:
published:
created: 2026-06-11
description: "A pull-down button displays a menu of items or actions that directly relate to the button’s purpose."
tags:
  - "clippings"
---
![A stylized representation of a pull-down menu displaying a set of items. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/d06f595ac55eae126830291437775207/components-pull-down-button-intro~dark%402x.png)

After people choose an item in a pull-down button’s menu, the menu closes, and the app performs the chosen action.

## Best practices

**Use a pull-down button to present commands or items that are directly related to the button’s action.** The menu lets you help people clarify the button’s target or customize its behavior without requiring additional buttons in your interface. For example:

- An Add button could present a menu that lets people specify the item they want to add.
- A Sort button could use a menu to let people select an attribute on which to sort.
- A Back button could let people choose a specific location to revisit instead of opening the previous one.

If you need to provide a list of mutually exclusive choices that aren’t commands, use a [pop-up button](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons) instead.

**Avoid putting all of a view’s actions in one pull-down button.** A view’s primary actions need to be easily discoverable, so you don’t want to hide them in a pull-down button that people have to open before they can do anything.

**Balance menu length with ease of use.** Because people have to interact with a pull-down button before they can view its menu, listing a minimum of three items can help the interaction feel worthwhile. If you need to list only one or two items, consider using alternative components to present them, such as buttons to perform actions and toggles or switches to present selections. In contrast, listing too many items in a pull-down button’s menu can slow people down because it takes longer to find a specific item.

**Display a succinct menu title only if it adds meaning.** In general, a pull-down button’s content — combined with descriptive menu items — provides all the context people need, making a menu title unnecessary.

**Let people know when a pull-down button’s menu item is destructive, and ask them to confirm their intent.** Menus use red text to highlight actions that you identify as potentially destructive. When people choose a destructive action, the system displays an [action sheet](https://developer.apple.com/design/human-interface-guidelines/action-sheets) (iOS) or [popover](https://developer.apple.com/design/human-interface-guidelines/popovers) (iPadOS) in which they can confirm their choice or cancel the action. Because an action sheet appears in a different location from the menu and requires deliberate dismissal, it can help people avoid losing data by mistake.

**Include an interface icon with a menu item when it provides value.** If you need to clarify an item’s meaning, you can display an [icon](https://developer.apple.com/design/human-interface-guidelines/icons) or image after its label. Using [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) for this purpose can help you provide a familiar experience while ensuring that the symbol remains aligned with the text at every scale.

## Platform considerations

*No additional considerations for macOS or visionOS. Not supported in tvOS or watchOS.*

### iOS, iPadOS

**Consider using a More pull-down button to present items that don’t need prominent positions in the main interface.** A More button can help you offer a range of items where space is constrained, but it can also hinder discoverability. Although people generally understand that a More button offers additional functionality related to the current context, the ellipsis icon doesn’t necessarily help them predict its contents. To design an effective More button, weigh the convenience of its size against its impact on discoverability to find a balance that works in your app.

![A screenshot of the Notes app on iPhone, open to a Notes document titled Nature Walks. The top toolbar includes a More button on the trailing edge.](https://docs-assets.developer.apple.com/published/19285bca9f90bfc4afb5b9bac4e5b0d0/menu-secondary-actions-collapsed~dark%402x.png)

![A screenshot of the Notes app on iPhone, open to a Notes document titled Nature Walks. The More button in the top toolbar is expanded, revealing the More menu with additional funtionality.](https://docs-assets.developer.apple.com/published/8c41b4cff7843be3dbdb7971b7551aec/menu-secondary-actions-expanded~dark%402x.png)

## Resources

#### Related

[Pop-up buttons](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons)

[Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

#### Developer documentation

[`MenuPickerStyle`](https://developer.apple.com/documentation/SwiftUI/MenuPickerStyle) — SwiftUI

[`showsMenuAsPrimaryAction`](https://developer.apple.com/documentation/UIKit/UIControl/showsMenuAsPrimaryAction) — UIKit

[`pullsDown`](https://developer.apple.com/documentation/AppKit/NSPopUpButton/pullsDown) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| September 14, 2022 | Refined guidance on designing a useful menu length. |

---

---
title: "The menu bar"
source: "https://developer.apple.com/design/human-interface-guidelines/the-menu-bar"
author:
published:
created: 2026-06-11
description: "On a Mac or an iPad, the menu bar at the top of the screen displays the top-level menus in your app or game."
tags:
  - "clippings"
---
![A stylized representation of the macOS menu bar displaying a selected menu. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/94c104500838e2283f6f25ba36d54628/components-the-menu-bar-intro~dark%402x.png)

Mac users are very familiar with the macOS menu bar, and they rely on it to help them learn what an app does and find the commands they need. To help your app or game feel at home in macOS, it’s essential to provide a consistent menu bar experience.

Menu bar menus on iPad are similar to those on Mac, appearing in the same order and with familiar sets of menu items. When you adopt the menu structure that people expect from their experience on Mac, it helps them immediately understand and take advantage of the menu bar on iPad as well.

Keyboard shortcuts in iPadOS use the same patterns as in macOS. For guidance, see [Standard keyboard shortcuts](https://developer.apple.com/design/human-interface-guidelines/keyboards#Standard-keyboard-shortcuts).

![An illustration of an app window on iPad, with its menu bar appearing at the top of the screen and the Edit menu open.](https://docs-assets.developer.apple.com/published/3f698475269bc98b7a1d4a82039ce429/menu-bar-ipad-overview~dark%402x.png)

Menus in the menu bar share most of the appearance and behavior characteristics that all menu types have. To learn about menus in general — and how to organize and label menu items — see [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

## Anatomy

When present in the menu bar, the following menus appear in the order listed below.

- *YourAppName* (you supply a short version of your app’s name for this menu’s title)
- File
- Edit
- Format
- View
- App-specific menus, if any
- Window
- Help

In addition, the macOS menu bar includes the Apple menu on the leading side and menu bar extras on the trailing side. See [macOS Platform considerations](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#macOS) for guidance.

## Best practices

**Support the default system-defined menus and their ordering.** People expect to find menus and menu items in an order they’re familiar with. In many cases, the system implements the functionality of standard menu items so you don’t have to. For example, when people select text in a standard text field, the system makes the Edit > Copy menu item available.

**Always show the same set of menu items.** Keeping menu items visible helps people learn what actions your app supports, even if they’re unavailable in the current context. If a menu bar item isn’t actionable, disable the action instead of hiding it from the menu.

**Represent menu item actions with familiar icons.** Icons help people recognize common actions throughout your app. Use the same icons as the system to represent actions such as Copy, Share, and Delete, wherever they appear. For a list of icons that represent common actions, see [Standard icons](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons). For additional guidance, see [Menus](https://developer.apple.com/design/human-interface-guidelines/menus).

**Support the keyboard shortcuts defined for the standard menu items you include.** People expect to use the keyboard shortcuts they already know for standard menu items, like Copy, Cut, Paste, Save, and Print. Define custom keyboard shortcuts only when necessary. For guidance, see [Standard keyboard shortcuts](https://developer.apple.com/design/human-interface-guidelines/keyboards#Standard-keyboard-shortcuts).

**Prefer short, one-word menu titles.** Various factors — like different display sizes and the presence of menu bar extras — can affect the spacing and appearance of your menus. One-word menu titles work especially well in the menu bar because they take little space and are easy for people to scan. If you need to use more than one word in the menu title, use title-style capitalization.

## App menu

The app menu lists items that apply to your app or game as a whole, rather than to a specific task, document, or window. To help people quickly identify the active app, the menu bar displays your app name in bold.

The app menu typically contains the following menu items listed in the following order.

| Menu item | Action | Guidance |
| --- | --- | --- |
| About *YourAppName* | Displays the About window for your app, which includes copyright and version information. | Prefer a short name of 16 characters or fewer. Don’t include a version number. |
| Settings… | Opens your [settings](https://developer.apple.com/design/human-interface-guidelines/settings) window, or your app’s page in iPadOS Settings. | Use only for app-level settings. If you also offer document-specific settings, put them in the File menu. |
| Optional app-specific items | Performs custom app-level setting or configuration actions. | List custom app-configuration items after the Settings item and within the same group. |
| Services (macOS only) | Displays a submenu of services from the system and other apps that apply to the current context. |  |
| Hide *YourAppName* (macOS only) | Hides your app and all of its windows, and then activates the most recently used app. | Use the same short app name you supply for the About item. |
| Hide Others (macOS only) | Hides all other open apps and their windows. |  |
| Show All (macOS only) | Shows all other open apps and their windows behind your app’s windows. |  |
| Quit *YourAppName* | Quits your app. Pressing Option changes Quit *YourAppName* to Quit and Keep Windows. | Use the same short app name you supply for the About item. |

**Display the About menu item first.** Include a separator after the About menu item so that it appears by itself in a group.

## File menu

The File menu contains commands that help people manage the files or documents an app supports. If your app doesn’t handle any types of files, you can rename or eliminate this menu.

The File menu typically contains the following menu items listed in the following order.

| Menu item | Action | Guidance |
| --- | --- | --- |
| New *Item* | Creates a new document, file, or window. | For *Item*, use a term that names the type of item your app creates. For example, Calendar uses *Event* and *Calendar*. |
| Open | Can open the selected item or present an interface in which people select an item to open. | If people need to select an item in a separate interface, an ellipsis follows the command to indicate that more input is required. |
| Open Recent | Displays a submenu that lists recently opened documents and files that people can select, and typically includes a *Clear Menu* item. | List document and filenames that people recognize in the submenu; don’t display file paths. List the documents in the order people last opened them, with the most recently opened document first. |
| Close | Closes the current window or document. Pressing Option changes Close to Close All. For a tab-based window, Close Tab replaces Close. | In a tab-based window, consider adding a Close Window item to let people close the entire window with one click or tap. |
| Close Tab | Closes the current tab in a tab-based window. Pressing Option changes Close Tab to Close Other Tabs. |  |
| Close File | Closes the current file and all its associated windows. | Consider supporting this menu item if your app can open multiple views of the same file. |
| Save | Saves the current document or file. | Automatically save changes periodically as people work so they don’t need to keep choosing File > Save. For a new document, prompt people for a name and location. If you need to let people save a file in multiple formats, prefer a pop-up menu that lets people choose a format in the Save sheet. |
| Save All | Saves all open documents. |  |
| Duplicate | Duplicates the current document, leaving both documents open. Pressing Option changes Duplicate to Save As. | Prefer Duplicate to menu items like Save As, Export, Copy To, and Save To because these items don’t clarify the relationship between the original file and the new one. |
| Rename… | Lets people change the name of the current document. |  |
| Move To… | Prompts people to choose a new location for the document. |  |
| Export As… | Prompts people for a name, output location, and export file format. After exporting the file, the current document remains open; the exported file doesn’t open. | Reserve the Export As item for when you need to let people export content in a format your app doesn’t typically handle. |
| Revert To | When people turn on autosaving, displays a submenu that lists recent document versions and an option to display the version browser. After people choose a version to restore, it replaces the current document. |  |
| Page Setup… | Opens a panel for specifying printing parameters like paper size and printing orientation. A document can save the printing parameters that people specify. | Include the Page Setup item if you need to support printing parameters that apply to a specific document. Parameters that are global in nature, like a printer’s name, or that people change frequently, like the number of copies to print, belong in the Print panel. |
| Print… | Opens the standard Print panel, which lets people print to a printer, send a fax, or save as a PDF. |  |

## Edit menu

The Edit menu lets people make changes to content in the current document or text container, and provides commands for interacting with the Clipboard. Because many editing commands apply to any editable content, the Edit menu is useful even in apps that aren’t document-based.

**Determine whether Find menu items belong in the Edit menu.** For example, if your app lets people search for files or other types of objects, Find menu items might be more appropriate in the File menu.

The Edit menu typically contains the following top-level menu items, listed in the following order.

| Menu item | Action | Guidance |
| --- | --- | --- |
| Undo | Reverses the effect of the previous user operation. | Clarify the target of the undo. For example, if people just selected a menu item, you can append the item’s title, such as Undo Paste and Match Style. For a text entry operation, you might append the word *Typing* to give Undo Typing. |
| Redo | Reverses the effect of the previous Undo operation. | Clarify the target of the redo. For example, if people just reversed a menu item selection, you can append the item’s title, such as Redo Paste and Match Style. For a text entry operation, you might append the word *Typing* to give Redo Typing. |
| Cut | Removes the selected data and stores it on the Clipboard, replacing the previous contents of the Clipboard. |  |
| Copy | Duplicates the selected data and stores it on the Clipboard. |  |
| Paste | Inserts the contents of the Clipboard at the current insertion point. The Clipboard contents remain unchanged, permitting people to choose Paste multiple times. |  |
| Paste and Match Style | Inserts the contents of the Clipboard at the current insertion point, matching the style of the inserted text to the surrounding text. |  |
| Delete | Removes the selected data, but doesn’t place it on the Clipboard. | Provide a Delete menu item instead of an Erase or Clear menu item. Choosing Delete is the equivalent of pressing the Delete key, so it’s important for the naming to be consistent. |
| Select All | Highlights all selectable content in the current document or text container. |  |
| Find | Displays a submenu containing menu items for performing search operations in the current document or text container. Standard submenus include: Find, Find and Replace, Find Next, Find Previous, Use Selection for Find, and Jump to Selection. |  |
| Spelling and Grammar | Displays a submenu containing menu items for checking for and correcting spelling and grammar in the current document or text container. Standard submenus include: Show Spelling and Grammar, Check Document Now, Check Spelling While Typing, Check Grammar With Spelling, and Correct Spelling Automatically. |  |
| Substitutions | Displays a submenu containing items that let people toggle automatic substitutions while they type in a document or text container. Standard submenus include: Show Substitutions, Smart Copy/Paste, Smart Quotes, Smart Dashes, Smart Links, Data Detectors, and Text Replacement. |  |
| Transformations | Displays a submenu containing items that transform selected text. Standard submenus include: Make Uppercase, Make Lowercase, and Capitalize. |  |
| Speech | Displays a submenu containing Start Speaking and Stop Speaking items, which control when the system audibly reads selected text. |  |
| Start Dictation | Opens the dictation window and converts spoken words into text that’s added at the current insertion point. The system automatically adds the Start Dictation menu item at the bottom of the Edit menu. |  |
| Emoji & Symbols | Displays a Character Viewer, which includes emoji, symbols, and other characters people can insert at the current insertion point. The system automatically adds the Emoji & Symbols menu item at the bottom of the Edit menu. |  |

## Format menu

The Format menu lets people adjust text formatting attributes in the current document or text container. You can exclude this menu if your app doesn’t support formatted text editing.

The Format menu typically contains the following top-level menu items, listed in the following order.

| Menu item | Action |
| --- | --- |
| Font | Displays a submenu containing items for adjusting font attributes of the selected text. Standard submenus include: Show Fonts, Bold, Italic, Underline, Bigger, Smaller, Show Colors, Copy Style, and Paste Style. |
| Text | Displays a submenu containing items for adjusting text attributes of the selected text. Standard submenus include: Align Left, Align Center, Justify, Align Right, Writing Direction, Show Ruler, Copy Ruler, and Paste Ruler. |

## View menu

The View menu lets people customize the appearance of all an app’s windows, regardless of type.

**Provide a View menu even if your app supports only a subset of the standard view functions.** For example, if your app doesn’t include a tab bar, toolbar, or sidebar, but does support full-screen mode, provide a View menu that includes only the Enter/Exit Full Screen menu item.

**Ensure that each show/hide item title reflects the current state of the corresponding view.** For example, when the toolbar is hidden, provide a Show Toolbar menu item; when the toolbar is visible, provide a Hide Toolbar menu item.

The View menu typically contains the following top-level menu items, listed in the following order.

| Menu item | Action |
| --- | --- |
| Show/Hide Tab Bar | Toggles the visibility of the [tab bar](https://developer.apple.com/design/human-interface-guidelines/tab-bars) above the body area in a tab-based window |
| Show All Tabs/Exit Tab Overview | Enters and exits a view (similar to Mission Control) that provides an overview of all open tabs in a tab-based window |
| Show/Hide Toolbar | In a window that includes a [toolbar](https://developer.apple.com/design/human-interface-guidelines/toolbars), toggles the toolbar’s visibility |
| Customize Toolbar | In a window that includes a toolbar, opens a view that lets people customize toolbar items |
| Show/Hide Sidebar | In a window that includes a [sidebar](https://developer.apple.com/design/human-interface-guidelines/sidebars), toggles the sidebar’s visibility |
| Enter/Exit Full Screen | In an app that supports a [full-screen experience](https://developer.apple.com/design/human-interface-guidelines/going-full-screen), opens the window at full-screen size in a new space |

## App-specific menus

Your app’s custom menus appear in the menu bar between the View menu and the Window menu. For example, Safari’s menu bar includes app-specific History and Bookmarks menus.

**Provide app-specific menus for custom commands.** People look in the menu bar when searching for app-specific commands, especially when using an app for the first time. Even when commands are available elsewhere in your app, it’s important to list them in the menu bar. Putting commands in the menu bar makes them easier for people to find, lets you assign keyboard shortcuts to them, and makes them more accessible to people using Full Keyboard Access. Excluding commands from the menu bar — even infrequently used or advanced commands — risks making them difficult for everyone to find.

**As much as possible, reflect your app’s hierarchy in app-specific menus.** For example, Mail lists the Mailbox, Message, and Format menus in an order that mirrors the relationships of these items: mailboxes contain messages, and messages contain formatting.

**Aim to list app-specific menus in order from most to least general or commonly used.** People tend to expect menus in the leading end of a list to be more specialized than menus in the trailing end.

## Window menu

The Window menu lets people navigate, organize, and manage an app’s windows.

**Provide a Window menu even if your app has only one window.** Include the Minimize and Zoom menu items so people using Full Keyboard Access can use the keyboard to invoke these functions.

**Consider including menu items for showing and hiding panels.** A [panel](https://developer.apple.com/design/human-interface-guidelines/panels) provides information, configuration options, or tools for interacting with content in a primary window, and typically appears only when people need it. There’s no need to provide access to the font panel or text color panel because the Format menu lists these panels.

The Window menu typically contains the following top-level menu items, listed in the following order.

| Menu item | Action | Guidance |
| --- | --- | --- |
| Minimize | Minimizes the active window to the Dock. Pressing the Option key changes this item to Minimize All. |  |
| Zoom | Toggles between a predefined size appropriate to the window’s content and the window size people set. Pressing the Option key changes this item to Zoom All. | Avoid using Zoom to enter or exit full-screen mode. The [View menu](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#View-menu) supports these functions. |
| Show Previous Tab | Shows the tab before the current tab in a tab-based window. |  |
| Show Next Tab | Shows the tab after the current tab in a tab-based window. |  |
| Move Tab to New Window | Opens the current tab in a new window. |  |
| Merge All Windows | Combines all open windows into a single tabbed window. |  |
| Enter/Exit Full Screen | In an app that supports a [full-screen experience](https://developer.apple.com/design/human-interface-guidelines/going-full-screen), opens the window at full-screen size in a new space. | Include this item in the Window menu only if your app doesn’t have a View menu. In this scenario, continue to provide separate Minimize and Zoom menu items. |
| Bring All to Front | Brings all an app’s open windows to the front, maintaining their onscreen location, size, and layering order. (Clicking the app icon in the Dock has the same effect.) Pressing the Option key changes this item to Arrange in Front, which brings an app’s windows to the front in a neatly tiled arrangement. |  |
| *Name of an open app-specific window* | Brings the selected window to the front. | List the currently open windows in alphabetical order for easy scanning. Avoid listing panels or other modal views. |

## Help menu

The Help menu — located at the trailing end of the menu bar — provides access to an app’s help documentation. When you use the Help Book format for this documentation, macOS automatically includes a search field at the top of the Help menu.

| Menu item | Action | Guidance |
| --- | --- | --- |
| Send *YourAppName* Feedback to Apple | Opens the Feedback Assistant, in which people can provide feedback. |  |
| *YourAppName* Help | When the content uses the Help Book format, opens the content in the built-in Help Viewer. |  |
| *Additional Item* |  | Use a separator between your primary help documentation and additional items, which might include registration information or release notes. Keep the total the number of items you list in the Help menu small to avoid overwhelming people with too many choices when they need help. Alternatively, consider linking to additional items from within your help documentation. |

For guidance, see [Offering help](https://developer.apple.com/design/human-interface-guidelines/offering-help); for developer guidance, see [`NSHelpManager`](https://developer.apple.com/documentation/AppKit/NSHelpManager).

## Dynamic menu items

In rare cases, it can make sense to present a *dynamic menu item*, which is a menu item that changes its behavior when people choose it while pressing a modifier key (Control, Option, Shift, or Command). For example, the *Minimize* item in the Window menu changes to *Minimize All* when people press the Option key.

**Avoid making a dynamic menu item the only way to accomplish a task.** Dynamic menu items are hidden by default, so they’re best suited to offer shortcuts to advanced actions that people can accomplish in other ways. For example, if someone hasn’t discovered the *Minimize All* dynamic menu item in the Window menu, they can still minimize each open window.

**Use dynamic menu items primarily in menu bar menus.** Adding a dynamic menu item to contextual or Dock menus can make the item even harder for people to discover.

**Require only a single modifier key to reveal a dynamic menu item.** It can be physically awkward to press more than one key while simultaneously opening a menu and choosing a menu item, in addition to reducing the discoverability of the dynamic behavior. For developer guidance, see [`isAlternate`](https://developer.apple.com/documentation/AppKit/NSMenuItem/isAlternate).

## Platform considerations

*Not supported in iOS, tvOS, visionOS, or watchOS.*

### iPadOS

The menu bar displays the top-level menus for your app or game, including both system-provided menus and any custom ones you choose to add. People reveal the menu bar by moving the pointer to the top edge of the screen, or swiping down from it. When visible, the menu bar occupies the same vertical space as the [status bar](https://developer.apple.com/design/human-interface-guidelines/status-bars) at the top edge of the screen.

As with the macOS menu bar, the iPadOS menu bar provides a familiar way for people to learn what an app does, find the commands they need, and discover keyboard shortcuts. While they are similar in most respects, there are a few key differences between the menu bars on each platform.

|  | iPadOS | macOS |
| --- | --- | --- |
| Menu bar visibility | Hidden until revealed | Visible by default |
| Horizontal alignment | Centered | Leading side |
| Menu bar extras | Not available | System default and custom |
| Window controls | In the menu bar when the app is full screen | Never in the menu bar |
| Apple menu | Not available | Always available |
| App menu | About, Services, and app visibility-related items not available | Always available |

**Because the menu bar is often hidden when running an app full screen, ensure that people can access all of your app’s functions through its UI.** In particular, always offer other ways to accomplish tasks assigned to dynamic menu items, since these are only available when a hardware keyboard is connected. Avoid using the menu bar as a catch-all location for functionality that doesn’t fit in elsewhere.

**Reserve the YourAppName > Settings menu item for opening your app’s page in iPadOS Settings.** If your app includes its own internal preferences area, link to it with a separate menu item beneath Settings in the same group. Place any other custom app-wide configuration options in this section as well.

**For apps with tab-style navigation, consider adding each tab as a menu item in the View menu.** Since each tab is a different view of the app, the View menu is a natural place to offer an additional way to navigate between tabs. If you do this, consider assigning key bindings to each tab to make navigation even more convenient.

**Consider grouping menu items into submenus to conserve vertical space.** Menu item rows on iPad use more space than on Mac to make them easier to tap. Because of this, and the smaller screen sizes of some iPads, it can be helpful to group related items into submenus more frequently than in the menu bar on Mac.

### macOS

The menu bar in macOS includes the Apple menu, which is always the first item on the leading side of the menu bar. The Apple menu includes system-defined menu items that are always available, and you can’t modify or remove it. Space permitting, the system can also display menu bar extras in the trailing end of the menu bar. For guidance, see [Menu bar extras](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Menu-bar-extras).

When menu bar space is constrained, the system prioritizes the display of menus and essential menu bar extras. To ensure that menus remain readable, the system may decrease the space between the titles, truncating them if necessary.

When people enter full-screen mode, the menu bar typically hides until they reveal it by moving the pointer to the top of the screen. For guidance, see [Going full screen](https://developer.apple.com/design/human-interface-guidelines/going-full-screen).

#### Menu bar extras

A menu bar extra exposes app-specific functionality using an icon that appears in the menu bar when your app is running, even when it’s not the frontmost app. Menu bar extras are on the opposite side of the menu bar from your app’s menus. For developer guidance, see [`MenuBarExtra`](https://developer.apple.com/documentation/SwiftUI/MenuBarExtra).

When necessary, the system hides menu bar extras to make room for app menus. Similarly, if there are too many menu bar extras, the system may hide some to avoid crowding app menus.

![A screenshot of the Input menu bar extra and its menu.](https://docs-assets.developer.apple.com/published/d710f25a2a046c767eb85e38cff62cd1/menu-bar-extras~dark%402x.png)

**Consider using a symbol to represent your menu bar extra.** You can create an [icon](https://developer.apple.com/design/human-interface-guidelines/icons) or you can choose one of the [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), using it as-is or customizing it to suit your needs. Both interface icons and symbols use black and clear colors to define their shapes; the system can apply other colors to the black areas in each image so it looks good on both dark and light menu bars, and when your menu bar extra is selected. The menu bar’s height is 24 pt.

**Display a menu — not a popover — when people click your menu bar extra.** Unless the app functionality you want to expose is too complex for a menu, avoid presenting it in a [popover](https://developer.apple.com/design/human-interface-guidelines/popovers).

**Let people — not your app — decide whether to put your menu bar extra in the menu bar.** Typically, people add a menu bar extra to the menu bar by changing a setting in an app’s settings window. To ensure discoverability, however, consider giving people the option of doing so during setup.

**Avoid relying on the presence of menu bar extras.** The system hides and shows menu bar extras regularly, and you can’t be sure which other menu bar extras people have chosen to display or predict the location of your menu bar extra.

**Consider exposing app-specific functionality in other ways, too.** For example, you can provide a [Dock menu](https://developer.apple.com/design/human-interface-guidelines/dock-menus) that appears when people Control-click your app’s Dock icon. People can hide or choose not to use your menu bar extra, but a Dock menu is aways available when your app is running.

## Resources

#### Related

[Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

[Dock menus](https://developer.apple.com/design/human-interface-guidelines/dock-menus)

[Standard keyboard shortcuts](https://developer.apple.com/design/human-interface-guidelines/keyboards#Standard-keyboard-shortcuts)

#### Developer documentation

[`CommandMenu`](https://developer.apple.com/documentation/SwiftUI/CommandMenu) — SwiftUI

[Adding menus and shortcuts to the menu bar and user interface](https://developer.apple.com/documentation/UIKit/adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface) — UIKit

[`NSStatusBar`](https://developer.apple.com/documentation/AppKit/NSStatusBar) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 9, 2025 | Added guidance for the menu bar in iPadOS. |


---

---
title: "Toolbars"
source: "https://developer.apple.com/design/human-interface-guidelines/toolbars"
author:
published:
created: 2026-06-11
description: "A toolbar provides convenient access to frequently used commands, controls, navigation, and search."
tags:
  - "clippings"
---
![A stylized representation of a toolbar, with a Back control on the leading edge, and Compose, Share, and the More menu on the trailing edge. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/5951f0f78a4bd3fcb003a241f69d8247/components-toolbar-intro~dark%402x.png)

A toolbar consists of one or more sets of controls arranged horizontally along the top or bottom edge of the view, grouped into logical sections.

Toolbars act on content in the view, facilitate navigation, and help orient people in the app. They include three types of content:

- The title of the current view
- Navigation controls, like back and forward, and [search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields)
- Actions, or bar items, like [buttons](https://developer.apple.com/design/human-interface-guidelines/buttons) and [menus](https://developer.apple.com/design/human-interface-guidelines/menus)

In contrast to a toolbar, a [tab bar](https://developer.apple.com/design/human-interface-guidelines/tab-bars) is specifically for navigating between areas of an app.

## Best practices

**Choose items deliberately to avoid overcrowding.** People need to be able to distinguish and activate each item, so you don’t want to put too many items in the toolbar. To accommodate variable view widths, define which items move to the overflow menu as the toolbar becomes narrower.

**Add a More menu to contain additional actions.** Prioritize less important actions for inclusion in the More menu. Try to include all actions in the toolbar if possible, and only add this menu if you really need it.

**In iPadOS and macOS apps, consider letting people customize the toolbar to include their most common items.** Toolbar customization is especially useful in apps that provide a lot of items — or that include advanced functionality that not everyone needs — and in apps that people tend to use for long periods of time. For example, it works well to make a range of editing actions available for toolbar customization, because people often use different types of editing commands based on their work style and their current project.

**Reduce the use of toolbar backgrounds and tinted controls.** Any custom backgrounds and appearances you use might overlay or interfere with background effects that the system provides. Instead, use the content layer to inform the color and appearance of the toolbar, and use a [`ScrollEdgeEffectStyle`](https://developer.apple.com/documentation/SwiftUI/ScrollEdgeEffectStyle) when necessary to distinguish the toolbar area from the content area. This approach helps your app express its unique personality without distracting from content.

**Avoid applying a similar color to toolbar item labels and content layer backgrounds.** If your app already has bright, colorful content in the content layer, prefer using the default monochromatic appearance of toolbars. For more guidance, see [Liquid Glass color](https://developer.apple.com/design/human-interface-guidelines/color#Liquid-Glass-color).

**Prefer using standard components in a toolbar.** By default, standard buttons, text fields, headers, and footers have corner radii that are concentric with bar corners. If you need to create a custom component, ensure that its corner radius is also concentric with the bar’s corners.

**Consider temporarily hiding toolbars for a distraction-free experience.** Sometimes people appreciate a minimal interface to reduce distractions or reveal more content. If you support this, do so contextually when it makes the most sense, and offer ways to reliably restore hidden interface elements. For guidance, see [Going full screen](https://developer.apple.com/design/human-interface-guidelines/going-full-screen). For guidance specific to visionOS, see [Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences).

## Titles

**Provide a useful title for each window.** A title helps people confirm their location as they navigate your app, and differentiates between the content of multiple open windows. If titling a toolbar seems redundant, you can leave the title area empty. For example, Notes doesn’t title the current note when a single window is open, because the first line of content typically supplies sufficient context. However, when opening notes in separate windows, the system titles them with the first line of content so people can tell them apart.

**Don’t title windows with your app name.** Your app’s name doesn’t provide useful information about your content hierarchy or any window or area in your app, so it doesn’t work well as a title.

**Write a concise title.** Aim for a word or short phrase that distills the purpose of the window or view, and keep the title under 15 characters long so you leave enough room for other controls.

## Navigation

A toolbar with navigation controls appears at the top of a window, helping people move through a hierarchy of content. A toolbar also often contains a [search field](https://developer.apple.com/design/human-interface-guidelines/search-fields) for quick navigation between areas or pieces of content. In iOS, a navigation-specific toolbar is sometimes called a navigation bar.

**Use the standard Back and Close buttons.** People know that the standard Back button lets them retrace their steps through a hierarchy of information, and the standard Close button closes a modal view. Prefer the standard symbols for each, and don’t use a text label that says *Back* or *Close*. If you create a custom version of either, make sure it still looks the same, behaves as people expect, and matches the rest of your interface, and ensure you consistently implement it throughout your app or game. For guidance, see [Icons](https://developer.apple.com/design/human-interface-guidelines/icons).

![An illustration of a capsule-shape Back button that includes the Back symbol on the leading side, grouped with Back in text on the trailing side.](https://docs-assets.developer.apple.com/published/d22cfee56d4cca62b14e1a8336918b97/toolbars-navigation-action-back-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration of the standard circular Back button that includes the standard Back symbol.](https://docs-assets.developer.apple.com/published/bbcd3edc00fe328f51e1a3d24b1f0079/toolbars-navigation-action-back-correct~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

## Actions

**Provide actions that support the main tasks people perform.** In general, prioritize the commands that people are most likely to want. These commands are often the ones people use most frequently, but in some apps it might make sense to prioritize commands that map to the highest level or most important objects people work with.

**Make sure the meaning of each control is clear.** Don’t make people guess or experiment to figure out what a toolbar item does. Prefer simple, recognizable symbols for items instead of text, except for actions like *edit* that aren’t well-represented by symbols. For guidance on symbols that represent common actions, see [Standard icons](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons).

![An illustration of an item group with text button labels for Filter, Delete, and New.](https://docs-assets.developer.apple.com/published/f1b3270b2ea2c0e475aec938d6877b8b/toolbars-prefer-symbols-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration of an item group with symbol button labels for Filter, Delete, and New.](https://docs-assets.developer.apple.com/published/a86fb2ef44874596bf3b37f1d6fe8fe2/toolbars-prefer-symbols-correct~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

**Prefer system-provided symbols without borders.** System-provided symbols are familiar, automatically receive appropriate coloring and vibrancy, and respond consistently to user interactions. Borders (like outlined circle symbols) aren’t necessary because the section provides a visible container, and the system defines hover and selection state appearances automatically. For guidance, see [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

![An illustration of an item group with buttons for Filter and More. The buttons are labeled with symbols with circular borders.](https://docs-assets.developer.apple.com/published/bd951aec79705863dd01a6d15aa6e97b/toolbars-icons-circle-outline-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration of an item group with buttons for Filter and More. The buttons are labeled with symbols without borders.](https://docs-assets.developer.apple.com/published/d50f7a066ec2f28c77e212060a8247fc/toolbars-icons-no-outline-correct~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

**Use the `.prominent` style for key actions such as Done or Submit.** This separates and tints the action so there’s a clear focal point. Only specify one primary action, and put it on the trailing side of the toolbar.

![An illustration of two toolbar items, with a Filter button on the leading side and a Done button on the trailing side. The buttons are ungrouped, and the Done button has the prominent style applied to indicate that it's the primary action.](https://docs-assets.developer.apple.com/published/cf5e09d7951ea2d519ebc3cff8e8cfd5/toolbars-prominent-action-tinted~dark%402x.png)

## Item groupings

You can position toolbar items in three locations: the leading edge, center area, and trailing edge of the toolbar. These areas provide familiar homes for navigation controls, window or document titles, common actions, and search.

- **Leading edge.** Elements that let people return to the previous document and show or hide a sidebar appear at the far leading edge, followed by the view title. Next to the title, the toolbar can include a document menu that contains standard and app-specific commands that affect the document as a whole, such as Duplicate, Rename, Move, and Export. To ensure that these items are always available, items on the toolbar’s leading edge aren’t customizable.
- **Center area.** Common, useful controls appear in the center area, and the view title can appear here if it’s not on the leading edge. In macOS and iPadOS, people can add, remove, and rearrange items here if you let them customize the toolbar, and items in this section automatically collapse into the system-managed overflow menu when the window shrinks enough in size.
- **Trailing edge.** The trailing edge contains important items that need to remain available, buttons that open nearby inspectors, an optional search field, and the More menu that contains additional items and supports toolbar customization. It also includes a primary action like Done when one exists. Items on the trailing edge remain visible at all window sizes.

![A diagram of the top toolbar in the Freeform app on iPad. Callouts indicate the location of item groupings on the leading edge, center area, and trailing edge of the toolbar.](https://docs-assets.developer.apple.com/published/34373f583638b53caab4c4909151cf99/toolbars-ipad-anatomy~dark%402x.png)

To position items in the groupings you want, pin them to the leading edge, center, or trailing edge, and insert space between buttons or other items where appropriate.

**Group toolbar items logically by function and frequency of use.** For example, Keynote includes several sections that are based on functionality, including one for presentation-level commands, one for playback commands, and one for object insertion.

**Group navigation controls and critical actions like Done, Close, or Save in dedicated, familiar, and visually distinct sections.** This reflects their importance and helps people discover and understand these actions.

![An illustration of a top toolbar on iPhone, with controls for back, forward, tool selection, and the More menu grouped in a single section on the trailing edge.](https://docs-assets.developer.apple.com/published/672b4dab9ec5e529b143656747cf43c6/toolbars-layout-grouping-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration of a top toolbar on iPhone, with controls for back and forward grouped on the leading edge, and controls for tool selection and the More menu grouped on the trailing edge.](https://docs-assets.developer.apple.com/published/1cd5ffa8a26d761d1732718e37a72f1a/toolbars-layout-grouping-correct~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

**Keep consistent groupings and placement across platforms.** This helps people develop familiarity with your app and trust that it behaves similarly regardless of where they use it.

**Minimize the number of groups.** Too many groups of controls can make a toolbar feel cluttered and confusing, even with the added space on iPad and Mac. In general, aim for a maximum of three.

**Keep actions with text labels separate.** Placing an action with a text label next to an action with a symbol can create the illusion of a single action with a combined text and symbol, leading to confusion and misinterpretation. If your toolbar includes multiple text-labeled buttons, the text of those buttons may appear to run together, making the buttons indistinguishable. Add separation by inserting fixed space between the buttons. For developer guidance, see [`UIBarButtonItem.SystemItem.fixedSpace`](https://developer.apple.com/documentation/UIKit/UIBarButtonItem/SystemItem/fixedSpace).

![An illustration of a top toolbar on iPhone, with an Edit control with a text label and a Share control with a symbol grouped together on the trailing edge.](https://docs-assets.developer.apple.com/published/4a7fa528b6bae70f2912fdc39078a6e8/toolbars-layout-text-action-grouping-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration of a top toolbar on iPhone, with an Edit control with a text label and a Share control with a symbol grouped into individual sections on the trailing edge.](https://docs-assets.developer.apple.com/published/c6a17d911e74a1666cc938f781fce407/toolbars-layout-text-action-grouping-correct~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

## Platform considerations

*No additional considerations for tvOS.*

### iOS

**Prioritize only the most important items for inclusion in the main toolbar area.** Because space is so limited, carefully consider which actions are essential to your app and include those first. Create a More menu to include additional items.

**Use a large title to help people stay oriented as they navigate and scroll.** By default, a large title transitions to a standard title as people begin scrolling the content, and transitions back to large when people scroll to the top, reminding them of their current location. For developer guidance, see [`prefersLargeTitles`](https://developer.apple.com/documentation/UIKit/UINavigationBar/prefersLargeTitles).

### iPadOS

**Consider combining a toolbar with a tab bar.** In iPadOS, a toolbar and a [tab bar](https://developer.apple.com/design/human-interface-guidelines/tab-bars) can coexist in the same horizontal space at the top of the view. This is particularly useful for layouts where you want to navigate between a few main app areas while keeping the full width of the window available for content. For guidance, see [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) and [Windows](https://developer.apple.com/design/human-interface-guidelines/windows).

### macOS

In a macOS app, the toolbar resides in the frame at the top of a window, either below or integrated with the title bar. Note that window titles can display inline with controls, and toolbar items don’t include a bezel.

![A diagram of a Finder window in macOS with callouts showing the location of the toolbar and the window frame.](https://docs-assets.developer.apple.com/published/7e0ade6a0cdd8e38029b8e8ce9ceed20/toolbars-mac-window-anatomy~dark%402x.png)

**Make every toolbar item available as a command in the menu bar.** Because people can customize the toolbar or hide it, it can’t be the only place that presents a command. In contrast, it doesn’t make sense to provide a toolbar item for every menu item, because not all menu commands are important enough or used often enough to warrant space in the toolbar.

### visionOS

In visionOS, the system-provided toolbar appears along the bottom edge of a window, above the window-management controls, and in a parallel plane that’s slightly in front of the window along the z-axis.

![A screenshot of a toolbar along the bottom of the Notes app window in visionOS.](https://docs-assets.developer.apple.com/published/47985b0aebd160790502368ff9e282a1/visionos-toolbar-notes-app%402x.png)

To maintain the legibility of toolbar items as content scrolls behind them, visionOS uses a variable blur in the bar background. The variable blur anchors the bar above the scrolling content while letting the view’s glass material remain uniform and undivided.

In visionOS, you can supply either a symbol or a text label for each toolbar item. When people look at a toolbar item that contains a symbol, visionOS reveals the text label, providing additional information.

**Prefer using a system-provided toolbar.** The standard toolbar has a consistent and familiar appearance and is optimized to work well with eye and hand input. In addition, the system automatically places a standard toolbar in the correct position in relation to its window.

![A screenshot of a toolbar in visionOS.](https://docs-assets.developer.apple.com/published/449acaaf0268d1fff08e9bf41b7c82d9/visionos-toolbar-standard-layout%402x.png)

**Avoid creating a vertical toolbar.** In visionOS, [tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars) are vertical, so presenting a vertical toolbar could confuse people.

**Try to prevent windows from resizing below the width of the toolbar.** visionOS doesn’t include a menu bar where each app lists all its actions, so it’s important for the toolbar to provide reliable access to essential controls regardless of a window’s size.

**If your app can enter a modal state, consider offering contextually relevant toolbar controls.** For example, a photo-editing app might enter a modal state to help people perform a multistep editing task. In this scenario, the controls in the modal editing view are different from the controls in the main window. Be sure to reinstate the window’s standard toolbar controls when the app exits the modal state.

**Avoid using a pull-down menu in a toolbar.** A pull-down menu lets you offer additional actions related to a toolbar item, but can be difficult for people to discover and may clutter your interface. Because a toolbar is located at the bottom edge of a window in visionOS, a pull-down menu might obscure the standard window controls that appear below the bottom edge. For guidance, see [Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons).

### watchOS

A toolbar button lets you offer important app functionality in a view that displays related content. You can place toolbar buttons in the top corners or along the bottom. If you place these buttons above scrolling content, the buttons always remain visible, as the content scrolls under them.

![A screenshot showing toolbar buttons in the top leading and trailing corners.](https://docs-assets.developer.apple.com/published/464c7be02e97dcb7470c9b8202dc2b59/toolbars-watch-top-buttons%402x.png)

Top toolbar buttons

![A screenshot showing two toolbar buttons in the bottom leading and trailing corners.](https://docs-assets.developer.apple.com/published/53d742601fa4b250207336099587e1d3/toolbars-watch-bottom-buttons%402x.png)

Bottom toolbar buttons

For developer guidance, see [`topBarLeading`](https://developer.apple.com/documentation/SwiftUI/ToolbarItemPlacement/topBarLeading), [`topBarTrailing`](https://developer.apple.com/documentation/SwiftUI/ToolbarItemPlacement/topBarTrailing), or [`bottomBar`](https://developer.apple.com/documentation/SwiftUI/ToolbarItemPlacement/bottomBar).

You can also place a button in the scrolling view. By default, a scrolling toolbar button remains hidden until people reveal it by scrolling up. People frequently scroll to the top of a scrolling view, so discovering a toolbar button is automatic.

![A screenshot showing two toolbar buttons in the top leading and trailing corners. The toolbar also has a primary action button in the scroll view, but it's hidden.](https://docs-assets.developer.apple.com/published/027a24ac805a9e7976a1ccd1df68f0d3/toolbars-watch-primary-button-hidden%402x.png)

Toolbar button hidden

![A screenshot showing two toolbar buttons in the top leading and trailing corners. The toolbar also displays a primary action button in the scroll view.](https://docs-assets.developer.apple.com/published/e010a0cdf42f792ebb4715cdd5f65676/toolbars-watch-primary-button-visible%402x.png)

Toolbar button shown

For developer guidance, see [`primaryAction`](https://developer.apple.com/documentation/SwiftUI/ToolbarItemPlacement/primaryAction).

**Use a scrolling toolbar button for an important action that isn’t a primary app function.** A toolbar button gives you the flexibility to offer important functionality in a view whose primary purpose is related to that functionality, but may not be the same. For example, Mail provides the essential New Message action in a toolbar button at the top of the Inbox view. The primary purpose of the Inbox is to display a scrollable list of email messages, so it makes sense to offer the closely related compose action in a toolbar button at the top of the view.

## Resources

#### Related

[Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars)

[Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

[Search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields)

[Apple Design Resources](https://developer.apple.com/design/resources/)

#### Developer documentation

[Toolbars](https://developer.apple.com/documentation/SwiftUI/Toolbars) — SwiftUI

[`UIToolbar`](https://developer.apple.com/documentation/UIKit/UIToolbar) — UIKit

[`NSToolbar`](https://developer.apple.com/documentation/AppKit/NSToolbar) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| December 16, 2025 | Updated guidance for Liquid Glass. |
| June 9, 2025 | Added guidance for grouping bar items, updated guidance for using symbols, and incorporated navigation bar guidance. |
| June 21, 2023 | Updated to include guidance for visionOS. |
| June 5, 2023 | Updated guidance for using toolbars in watchOS. |


---

---
title: "Path controls"
source: "https://developer.apple.com/design/human-interface-guidelines/path-controls"
author:
published:
created: 2026-06-11
description: "A path control shows the file system path of a selected file or folder."
tags:
  - "clippings"
---
![A stylized representation of a path control for a HIG Design document showing its root disk, parent folder, and selected item. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/1adefc1e669520b497fb32e540b8509e/components-path-control-intro~dark%402x.png)

For example, choosing View > Show Path Bar in the Finder displays a path bar at the bottom of the window. It shows the path of the selected item, or the path of the window’s folder if nothing is selected.

There are two styles of path control.

![](https://docs-assets.developer.apple.com/published/4636905a8e9c55b8178364465ec599e8/path-controls-standard~dark%402x.png)

**Standard.** A linear list that includes the root disk, parent folders, and selected item. Each item appears with an icon and a name. If the list is too long to fit within the control, it hides names between the first and last items. If you make the control editable, people can drag an item onto the control to select the item and display its path in the control.

![](https://docs-assets.developer.apple.com/published/55ccb527e44de801706837fa9df5dd04/path-controls-popup~dark%402x.png)

**Pop up.** A control similar to a [pop-up button](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons) that shows the icon and name of the selected item. People can click the item to open a menu containing the root disk, parent folders, and selected item. If you make the control editable, the menu contains an additional Choose command that people can use to select an item and display it in the control. They can also drag an item onto the control to select it and display its path.

## Best practices

**Use a path control in the window body, not the window frame.** Path controls aren’t intended for use in toolbars or status bars. Note that the path control in the Finder appears at the bottom of the window body, not in the status bar.

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[File management](https://developer.apple.com/design/human-interface-guidelines/file-management)

#### Developer documentation

[`NSPathControl`](https://developer.apple.com/documentation/AppKit/NSPathControl) — AppKit

---

---
title: "Search fields"
source: "https://developer.apple.com/design/human-interface-guidelines/search-fields"
author:
published:
created: 2026-06-11
description: "A search field lets people search a collection of content for specific terms they enter."
tags:
  - "clippings"
---
![A stylized representation of a search field containing placeholder text and a dictation icon. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/2730ac3879c754815472c33c6c8ba671/components-search-field-intro~dark%402x.png)

A search field is an editable text field that displays a Search icon, a Clear button, and placeholder text where people can enter what they are searching for. Search fields can use a [scope bar](https://developer.apple.com/design/human-interface-guidelines/search-fields#Scope-bars-and-tokens) as well as [tokens](https://developer.apple.com/design/human-interface-guidelines/search-fields#Scope-bars-and-tokens) to help filter and refine the scope of their search. Across each platform, there are different patterns for accessing search based on the goals and design of your app.

For developer guidance, see [Adding a search interface to your app](https://developer.apple.com/documentation/SwiftUI/Adding-a-search-interface-to-your-app); for guidance related to systemwide search, see [Searching](https://developer.apple.com/design/human-interface-guidelines/searching).

## Best practices

**Use placeholder text to help people know what they can search for.** Placeholder text can be helpful when you need to reinforce the scope of your search or to educate people about the type of content that search has access to.

**If possible, start search immediately when a person types.** Searching while someone types makes the search experience feel more responsive because it provides results that are continuously refined as the text becomes more specific.

**Consider showing suggested search terms.** For example, you can display recent searches before search begins, or predictive search suggestions as a person types. This can help someone search faster, even when the search itself doesn’t begin immediately.

**Simplify search results.** Provide the most relevant search results first to minimize the need for someone to scroll to find what they’re looking for. In addition to prioritizing the most likely results, consider categorizing them to help people find what they want.

**Consider letting people filter search results.** For example, you can include a scope bar in the search results content area to help people quickly and easily filter search results.

## Scope bars and tokens

Scope bars and tokens are components you can use to let someone narrow the parameters of a search either before or after they make it.

- A *scope bar* is a control for filtering and adjusting the scope of a search.
- A *token* is a visual representation of a search term that someone can select and edit, and acts as a filter for any additional terms in the search.

![A diagram of the Mail app on iPhone with the search field open above the keyboard and the word Design entered in the field. Callouts indicate a scope bar at the top of the screen to switch between searching all mailboxes and the current mailbox, and a list of tokens in a Suggestions area beneath the bar that represent different filters for the search.](https://docs-assets.developer.apple.com/published/c1239c2e89e99778193ffbdd79ffea9e/search-fields-scope-control-tokens~dark%402x.png)

**Use a scope bar to filter among clearly defined search categories.** A scope bar can help someone move from a broader scope to a narrower one. For example, in Mail on iPhone, a scope bar helps people move from searching their entire mailbox to just the specific mailbox they’re viewing. For developer guidance, see [Scoping a search operation](https://developer.apple.com/documentation/SwiftUI/Scoping-a-search-operation).

**Default to a broader scope and let people refine it as they need.** A broader scope provides context for the full set of available results, which helps guide people in a useful direction when they choose to narrow the scope.

**Use tokens to filter by common search terms or items.** When you define a token, the term it represents gains a visual treatment that encapsulates it, indicating that people can select and edit it as a single item. Tokens can clarify a search term, like filtering by a specific contact in Mail, or focus a search to a specific set of attributes, like filtering by photos in Messages. For the related macOS component, see [Token fields](https://developer.apple.com/design/human-interface-guidelines/token-fields).

**Consider pairing tokens with search suggestions.** People may not know which tokens are available, so pairing them with search suggestions can help people learn how to use them.

## Platform considerations

*No additional considerations for visionOS*.

### iOS

There are three main places you can position the entry point for search:

- As a tab in a tab bar
- In a toolbar at the bottom or top of the screen
- Directly inline with content

Where search makes the most sense depends on the layout, content, and navigation of your app.

#### Search as a tab

You can place search as a tab in a tab bar, which keeps search visible and always available as people switch between the sections of your app. There are two styles of search tabs:

- **Standard tab.** This style displays the search tab uniformly with the rest of the tab bar. Tapping the search tab navigates people to a search landing page with a search field at the top.
- **Button appearance.** This style displays the search tab as a separate button and allows people to start searching immediately. Tapping the search tab brings focus to the search field and displays the keyboard.

![An illustration of a tab bar at the bottom of an iPhone screen. A tab for search appears as part of the tab bar.](https://docs-assets.developer.apple.com/published/5f2d3160d5cbb6fac4e2dc3a29413262/search-fields-search-as-tab-standard~dark%402x.png)

Standard tab

![An illustration of a tab bar at the bottom of an iPhone screen. A tab for search appears on the trailing edge as a separate button.](https://docs-assets.developer.apple.com/published/094e575d8c255db7ef71370d9cdde747/search-fields-search-as-tab-prominent~dark%402x.png)

Button appearance

**Choose the standard tab style to provide suggestions, promote discovery, and encourage exploration.** This style of search tab creates a dedicated landing page for search, providing an opportunity to reveal any content or suggestions that might be helpful before someone taps the field to begin the search. This approach is great for an app with a variety of rich content that people might want to explore. For example, Apple TV uses this search tab style to present its various genres and categories, helping ground people in what’s available before they search.

**Choose the button appearance to help people quickly find what they need.** When someone interacts with this style of search tab, the keyboard immediately appears with the search field above it, ready to begin the search. This approach provides a more transient experience that brings people directly back to their previous tab after they exit search, and is ideal when you want search to resolve quickly and seamlessly.

#### Search in a toolbar

As an alternative to search in a tab bar, you can also place search in a toolbar either at the bottom or top of the screen.

- You can include search in a bottom toolbar either as an expanded field or as a toolbar button, depending on how much space is available. When someone taps it, it animates into a search field above the keyboard so they can begin typing.
- You can include search in a top toolbar, also called a navigation bar, where it appears as a toolbar button. When someone taps it, it animates into a search field that appears either above the keyboard or at the top if there isn’t space at the bottom.

![An illustration of an iPhone screen with search in a bottom toolbar. The search field is positioned in an isolated group between a Filter button on the leading edge and a Compose button on the trailing edge.](https://docs-assets.developer.apple.com/published/73bde58401365cdf2708d6adad67da0c/search-fields-ios-toolbar-with-items~dark%402x.png)

Search in a bottom toolbar

![An illustration of an iPhone screen with search in a top toolbar. A Back button appears on the leading edge, and an Add button appears on the trailing edge. A button group with Search and More appears next to the Add button.](https://docs-assets.developer.apple.com/published/af71b485e90dff3b34fe4e0e33d5c51b/search-fields-ios-navigation-bar-item~dark%402x.png)

Search in a top toolbar

**Place search at the bottom if there’s room.** You can either add a search field to an existing toolbar, or as a new toolbar where search is the only item. Search at the bottom is useful in any situation where search is a priority, since it keeps the search experience easy to reach. Examples of apps with search at the bottom in various toolbar layouts include Settings, where it’s the only item, and Mail and Notes, where it fits alongside other important controls.

**Place search at the top when itʼs important to defer to content at the bottom of the screen, or thereʼs no bottom toolbar.** Use search at the top in cases where covering the content might interfere with a primary function of the app. The Wallet app, for example, includes event passes in a stack at the bottom of the screen for easy access and viewing at a glance.

#### Search as an inline field

In some cases you might want your app to include a search field inline with content.

**Place search as an inline field when its position alongside the content it searches strengthens that relationship.** When you need to filter or search within a single view, it can be helpful to have search appear directly next to content to illustrate that the search applies to it, rather than globally. This pattern is useful if your app has more than one search field and if location plays a critical role in the scope of your search. For example, although the main search in the Music app is a tab, people can navigate to their library and use an inline search field to filter their songs and albums.

**When at the top, position an inline search field above the list it searches, and consider pinning it to the top toolbar when scrolling.** This helps keep it distinct from search that appears in other locations.

### iPadOS, macOS

The placement and behavior of the search field in iPadOS and macOS is similar. If your app is available on both iPad and Mac, try to keep the search experience as consistent as possible across both platforms.

![An illustration of an iPad screen with a search field on the trailing edge of the top toolbar. The search field has the word Design entered into the field, and three search suggestions appear in a list beneath the field.](https://docs-assets.developer.apple.com/published/0ca02c72e56e45d0d51c982298280378/search-fields-toolbar-search-ipad~dark%402x.png)

iPadOS

![An illustration of a Mac screen with a search field on the trailing edge of the toolbar. The search field has the word Design entered into the field, and three search suggestions appear in a list beneath the field.](https://docs-assets.developer.apple.com/published/70d8e1c39338568edc18572afb7716af/search-fields-toolbar-search-mac~dark%402x.png)

macOS

**Put a search field at the trailing side of the toolbar for many common uses.** Many apps benefit from the familiar pattern of search in the toolbar, particularly apps with split views that need to search across multiple columns of information, like Mail, Notes, and Voice Memos. This placement makes great use of space because it lets people navigate results while keeping their selection visible in the detail view. Additionally, consider placing search in the toolbar if results appear in the detail view of your app, like in Freeform, where search in the toolbar filters the boards in the detail view below.

**Include search at the top of the sidebar when filtering content or navigation there.** Apps such as Settings take advantage of search to quickly filter the sidebar and expose sections that may be multiple levels deep, providing a simple way for people to search, preview, and navigate to the section or setting they’re looking for. This approach is useful if your app has a rich detail view and you need to create a distinct separation between the sidebar you’re filtering and the adjacent view.

![An illustration of an iPad screen with a search field at the top of the sidebar on the leading edge of the screen.](https://docs-assets.developer.apple.com/published/ffc2f99e2e326e16f4d869d520d29e39/search-fields-ipad-search-in-sidebar~dark%402x.png)

**Include search as an item in the sidebar or tab bar when you want an area dedicated to discovery.** If your search is paired with rich suggestions, categories, or content that needs more space, it can be helpful to have a dedicated area for it. This is particularly useful for apps where browsing and search go hand in hand, like Music and TV, where it provides a unified location to highlight suggested content, categories, and recent searches. A dedicated area also ensures search is always available as people navigate and switch sections of your app.

![An illustration of an iPad screen with a tab bar at the top edge. The trailing side of the tab bar includes a Search tab with a distinct background color to differentiate it from other tab areas.](https://docs-assets.developer.apple.com/published/65c0de0fabbe374355f42882740a628e/search-fields-ipad-search-in-tab-bar~dark%402x.png)

**In a search field in a dedicated area, consider immediately focusing the field when a person navigates to the area to help them search faster and locate the field more easily.** An exception to this is on iPad when only a virtual keyboard is available, in which case it’s better to leave the field unfocused to prevent the keyboard from unexpectedly covering the view.

**Account for window resizing with the placement of the search field.** On iPad, the search field fluidly resizes with the app window like it does on Mac. However, for compact views on iPad, itʼs important to ensure that search is available where it’s most contextually useful. For example, Notes and Mail place search above the column for the content list when they resize down to a compact view.

### tvOS

A search screen is a specialized keyboard screen that helps people enter search text, displaying search results beneath the keyboard in a fully customizable view. For developer guidance, see [`UISearchController`](https://developer.apple.com/documentation/UIKit/UISearchController).

![An illustration of a search screen in tvOS. The screen includes a field with a keyboard input area at the top, a scope bar, and a grid of top results at the bottom.](https://docs-assets.developer.apple.com/published/494283107367d7c6b1a652b047ab9431/search-fields-tvos-search%402x.png)

**Provide suggestions to make searching easier.** People typically don’t want to do a lot of typing in tvOS. To improve the search experience, provide popular and context-specific search suggestions, including recent searches when available. For developer guidance, see [Using suggested searches with a search controller](https://developer.apple.com/documentation/UIKit/using-suggested-searches-with-a-search-controller).

### watchOS

When someone taps the search field, the system displays a text-input control that covers the entire screen. The app only returns to the search field after they tap the Cancel or Search button.

## Resources

#### Related

[Searching](https://developer.apple.com/design/human-interface-guidelines/searching)

[Token fields](https://developer.apple.com/design/human-interface-guidelines/token-fields)

#### Developer documentation

[Adding a search interface to your app](https://developer.apple.com/documentation/SwiftUI/Adding-a-search-interface-to-your-app) — SwiftUI

[`searchable(text:placement:prompt:)`](https://developer.apple.com/documentation/SwiftUI/View/searchable\(text:placement:prompt:\)) — SwiftUI

[`UISearchBar`](https://developer.apple.com/documentation/UIKit/UISearchBar) — UIKit

[`UISearchTextField`](https://developer.apple.com/documentation/UIKit/UISearchTextField) — UIKit

[`NSSearchField`](https://developer.apple.com/documentation/AppKit/NSSearchField) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Updated terminology and refined guidance for search as a tab in iOS. |
| June 9, 2025 | Updated guidance for search placement in iOS, consolidated iPadOS and macOS platform considerations, and added guidance for tokens. |
| September 12, 2023 | Combined guidance common to all platforms. |
| June 5, 2023 | Added guidance for using search fields in watchOS. |

---


---
title: "Sidebars"
source: "https://developer.apple.com/design/human-interface-guidelines/sidebars"
author:
published:
created: 2026-06-11
description: "A sidebar appears on the leading side of a view and lets people navigate between areas of your app or top-level collections of content, like folders and playlists."
tags:
  - "clippings"
---
![A stylized representation of the top portion of a window's sidebar displaying a section and some folders. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/8162d37fded9e8b5eb3e95465bfc5a26/components-sidebar-intro~dark%402x.png)

A sidebar requires a large amount of vertical and horizontal space. When space is limited or you want to devote more of the screen to other information or functionality, a more compact control such as a tab bar may provide a better navigation experience. For many apps, you don’t need to choose between a tab bar or sidebar for navigation; instead, you can adopt a style of tab bar that provides both. For guidance, see [Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars) and [Layout](https://developer.apple.com/design/human-interface-guidelines/layout).

## Best practices

**Extend visually rich content beneath the sidebar.** In iOS, iPadOS, and macOS, as with other controls such as toolbars and tab bars, sidebars can float above content in the [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) layer. To reinforce the separation, you can extend content beneath the sidebar either by letting it horizontally scroll or by applying a *background extension effect*. A background extension effect mirrors adjacent content to give the impression of stretching it under the sidebar. For developer guidance, see [`backgroundExtensionEffect()`](https://developer.apple.com/documentation/SwiftUI/View/backgroundExtensionEffect\(\)).

![A screenshot of the leading side of an app on iPad. An image spans the upper part of the window, stopping at the edge of the sidebar.](https://docs-assets.developer.apple.com/published/e31fd843f12b8bf042ea8e99906bd22a/sidebars-extend-content-beneath-sidebar-incorrect~dark%402x.png)

![A screenshot of the leading side of an app on iPad. An image spans the upper part of the window, and uses a background extension effect to flip, blur, and extend the image beneath the sidebar to the edge of the window.](https://docs-assets.developer.apple.com/published/8f531df7aef4c0403d60e66874a33137/sidebars-extend-content-beneath-sidebar-correct~dark%402x.png)

**When possible, let people customize the contents of a sidebar.** A sidebar lets people navigate to important areas in your app, so it works well when people can decide which areas are most important and in what order they appear.

**Group hierarchy with disclosure controls if your app has a lot of content.** Using [disclosure controls](https://developer.apple.com/design/human-interface-guidelines/disclosure-controls) helps keep the sidebar’s vertical space to a manageable level.

**Consider using familiar symbols to represent items in the sidebar.** [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) provides a wide range of customizable symbols you can use to represent items in your app. If you need to use a custom icon, consider creating a [custom symbol](https://developer.apple.com/design/human-interface-guidelines/sf-symbols#Custom-symbols) rather than using a bitmap image. Download the SF Symbols app from [Apple Design Resources](https://developer.apple.com/design/resources/#sf-symbols).

**Consider letting people hide the sidebar.** People sometimes want to hide the sidebar to create more room for content details or to reduce distraction. When possible, let people hide and show the sidebar using the platform-specific interactions they already know. For example, in iPadOS, people expect to use the built-in edge swipe gesture; in macOS, you can include a show/hide button or add Show Sidebar and Hide Sidebar commands to your app’s View menu. In visionOS, a window typically expands to accommodate a sidebar, so people rarely need to hide it. Avoid hiding the sidebar by default to ensure that it remains discoverable.

**In general, show no more than two levels of hierarchy in a sidebar.** When a data hierarchy is deeper than two levels, consider using a split view interface that includes a content list between the sidebar items and detail view.

**If you need to include two levels of hierarchy in a sidebar, use succinct, descriptive labels to title each group.** To help keep labels short, omit unnecessary words.

**Make sure any sidebar icon colors you choose serve a clear purpose.** By default, sidebar icons use your app’s [accent color](https://developer.apple.com/design/human-interface-guidelines/color#App-accent-colors). In macOS, people can change the system accent color, which applies to all apps. When they do this, they expect all sidebar icons to appear in that color, so make sure your sidebar icons display the color people choose. However, if you use them sparingly, fixed colors can help clarify the meaning of an icon or draw attention to it. For example, the VIP icon in Mail uses a yellow color to set it apart from other sidebar icons, providing a visual cue about its importance.

## Platform considerations

*No additional considerations for tvOS. Not supported in watchOS.*

### iOS, iPadOS

When you use the [`sidebarAdaptable`](https://developer.apple.com/documentation/SwiftUI/TabViewStyle/sidebarAdaptable) style of tab view to present a sidebar, you choose whether to display a sidebar or a tab bar when your app opens. Both variations include a button that people can use to switch between them. This style also adapts its appearance depending on the platform, and responds automatically to rotation and window resizing, providing a version of the control that’s appropriate to the width of the view.

**Consider using a tab bar first.** A tab bar provides more space to feature content, and offers enough flexibility to navigate between many apps’ main areas. If you need to expose more areas than fit in a tab bar, the tab bar’s convertible sidebar-style appearance can provide access to content that people use less frequently. For guidance, see [Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars).

**If necessary, apply the correct appearance to a sidebar.** If you’re not using SwiftUI to create a sidebar, you can use the [`UICollectionLayoutListConfiguration.Appearance.sidebar`](https://developer.apple.com/documentation/UIKit/UICollectionLayoutListConfiguration-swift.struct/Appearance-swift.enum/sidebar) appearance of a collection view list layout. For developer guidance, see [`UICollectionLayoutListConfiguration.Appearance`](https://developer.apple.com/documentation/UIKit/UICollectionLayoutListConfiguration-swift.struct/Appearance-swift.enum).

### macOS

A sidebar’s row height, text, and glyph size depend on its overall size, which can be small, medium, or large. You can set the size programmatically, but people can also change it by selecting a different sidebar icon size in General settings.

**Consider automatically hiding and revealing a sidebar when its container window resizes.** For example, reducing the size of a Mail viewer window can automatically collapse its sidebar, making more room for message content.

**Avoid putting critical information or actions at the bottom of a sidebar.** People often relocate a window in a way that hides its bottom edge.

### visionOS

**If your app’s hierarchy is deep, consider using a sidebar within a tab in a tab bar.** In this situation, a sidebar can support secondary navigation within the tab. If you do this, be sure to prevent selections in the sidebar from changing which tab is currently open.

![A partial screenshot of the Music app in visionOS. The app's window includes a sidebar for navigating the music library, and the secondary pane includes a grid of playlists.](https://docs-assets.developer.apple.com/published/4c166ae0e198642b7f73ee07fb579346/visionos-sidebar-music%402x.png)

## Resources

#### Related

[Split views](https://developer.apple.com/design/human-interface-guidelines/split-views)

[Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[`sidebarAdaptable`](https://developer.apple.com/documentation/SwiftUI/TabViewStyle/sidebarAdaptable) — SwiftUI

[`NavigationSplitView`](https://developer.apple.com/documentation/SwiftUI/NavigationSplitView) — SwiftUI

[`sidebar`](https://developer.apple.com/documentation/SwiftUI/ListStyle/sidebar) — SwiftUI

[`UICollectionLayoutListConfiguration`](https://developer.apple.com/documentation/UIKit/UICollectionLayoutListConfiguration-swift.struct) — UIKit

[`NSSplitViewController`](https://developer.apple.com/documentation/AppKit/NSSplitViewController) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Updated guidance for sidebar icon colors, and clarified guidance for the adaptable sidebar style. |
| June 9, 2025 | Added guidance for extending content beneath the sidebar. |
| August 6, 2024 | Updated guidance to include the SwiftUI adaptable sidebar style. |
| December 5, 2023 | Added artwork for iPadOS. |
| June 21, 2023 | Updated to include guidance for visionOS. |

---

---
title: "Tab bars"
source: "https://developer.apple.com/design/human-interface-guidelines/tab-bars"
author:
published:
created: 2026-06-11
description: "A tab bar lets people navigate between top-level sections of your app."
tags:
  - "clippings"
---
![A stylized representation of a tab bar containing four placeholder icons with names. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/5c4ae5b313c8b5086890750d795c0d20/components-tab-bar-intro~dark%402x.png)

Tab bars help people understand the different types of information or functionality that an app provides. They also let people quickly switch between sections of the view while preserving the current navigation state within each section.

## Best practices

**Use a tab bar to support navigation, not to provide actions.** A tab bar lets people navigate among different sections of an app, like the Alarm, Stopwatch, and Timer tabs in the Clock app. If you need to provide controls that act on elements in the current view, use a [toolbar](https://developer.apple.com/design/human-interface-guidelines/toolbars) instead.

**Make sure the tab bar is visible when people navigate to different sections of your app.** If you hide the tab bar, people can forget which area of the app they’re in. The exception is when a modal view covers the tab bar, because a modal is temporary and self-contained.

**Use the appropriate number of tabs required to help people navigate your app.** As a representation of your app’s hierarchy, it’s important to weigh the complexity of additional tabs against the need for people to frequently access each section; keep in mind that it’s generally easier to navigate among fewer tabs. Where available, consider a sidebar or a tab bar that adapts to a sidebar as an alternative for an app with a complex information structure.

**Avoid overflow tabs.** Depending on device size and orientation, the number of visible tabs can be smaller than the total number of tabs. If horizontal space limits the number of visible tabs, the trailing tab becomes a More tab in iOS and iPadOS, revealing the remaining items in a separate list. The More tab makes it harder for people to reach and notice content on tabs that are hidden, so limit scenarios in your app where this can happen.

**Don’t disable or hide tab bar buttons, even when their content is unavailable.** Having tab bar buttons available in some cases but not others makes your app’s interface appear unstable and unpredictable. If a section is empty, explain why its content is unavailable.

**Include tab labels to help with navigation.** A tab label appears beneath or beside a tab bar icon, and can aid navigation by clearly describing the type of content or functionality the tab contains. Use single words whenever possible.

**Consider using SF Symbols to provide familiar, scalable tab bar icons.** When you use [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), tab bar icons automatically adapt to different contexts. For example, the tab bar can be regular or compact, depending on the device and orientation. Tab bar icons appear above tab labels in compact views, whereas in regular views, the icons and labels appear side by side. Prefer filled symbols or icons for consistency with the platform.

![An illustration of two iPhone devices side by side. The first iPhone is in landscape orientation with a tab bar at the bottom of the screen, with tab bar icons on the leading edge of each tab and tab labels on the trailing edge. The second iPhone is in portrait orientation with a tab bar at the bottom of the screen, with tab bar icons above their respective tab labels.](https://docs-assets.developer.apple.com/published/e0327a16fd94f6f8f1fd15081fe39a73/tab-bar-landscape~dark%402x.png)

If you’re creating custom tab bar icons, see [Apple Design Resources](https://developer.apple.com/design/resources/) for tab bar icon dimensions.

![A diagram of a tab bar, with callouts indicating the location of the tab bar icon and tab label.](https://docs-assets.developer.apple.com/published/9c6f3a8d70af37b76976ac5c83b34ac8/tab-bar-anatomy-callouts~dark%402x.png)

**Use a badge to indicate that critical information is available.** You can display a badge — a red oval containing white text and either a number or an exclamation point — on a tab to indicate that there’s new or updated information in the section that warrants a person’s attention. Reserve badges for critical information so you don’t dilute their impact and meaning. For guidance, see [Notifications](https://developer.apple.com/design/human-interface-guidelines/notifications).

![An illustration of the bottom half of an iPhone in portrait orientation, with a tab bar at the bottom of the screen. Two of the tabs have red circular badges attached, indicating the presence of critical information.](https://docs-assets.developer.apple.com/published/e837fe9e7b79e3515777dfae17881b7d/tab-bar-badges-iphone~dark%402x.png)

**Avoid applying a similar color to tab labels and content layer backgrounds.** If your app already has bright, colorful content in the content layer, prefer a monochromatic appearance for tab bars, or choose an accent color with sufficient visual differentiation. For more guidance, see [Liquid Glass color](https://developer.apple.com/design/human-interface-guidelines/color#Liquid-Glass-color).

## Platform considerations

*No additional considerations for macOS. Not supported in watchOS.*

### iOS

A tab bar floats above content at the bottom of the screen. Its items rest on a [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) background that allows content beneath to peek through.

For tab bars with an attached accessory, like the MiniPlayer in Music, you can choose to minimize the tab bar and move the accessory inline with it when a person scrolls down. A person can exit the minimized state by tapping a tab or scrolling to the top of the view. For developer guidance, see [`TabBarMinimizeBehavior`](https://developer.apple.com/documentation/SwiftUI/TabBarMinimizeBehavior) and [`UITabBarController.MinimizeBehavior`](https://developer.apple.com/documentation/UIKit/UITabBarController/MinimizeBehavior).

![An illustration of the bottom half of an iPhone in portrait orientation, with the Music app open. The MiniPlayer is open above the tab bar at the bottom of the screen.](https://docs-assets.developer.apple.com/published/1ae811c29a315742d276529b11a22a27/tab-bar-with-accessory-expanded~dark%402x.png)

A tab bar with an attached accessory, expanded

![An illustration of the bottom half of an iPhone in portrait orientation, with the Music app open. The tab bar is minimized into the currently open tab at the leading bottom corner of the screen, with the MiniPlayer at the bottom center, and the search tab in the trailing corner.](https://docs-assets.developer.apple.com/published/8f7047e36a052271bad67224c4978355/tab-bar-with-accessory-collapsed~dark%402x.png)

A tab bar with an attached accessory, minimized

A tab bar can include a dedicated search tab at the trailing end. For guidance, see [Search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields).

### iPadOS

The system displays a tab bar near the top of the screen. You can choose to have the tab bar appear as a fixed element, or with a button that converts it to a sidebar. For developer guidance, see [`tabBarOnly`](https://developer.apple.com/documentation/SwiftUI/TabViewStyle/tabBarOnly) and [`sidebarAdaptable`](https://developer.apple.com/documentation/SwiftUI/TabViewStyle/sidebarAdaptable).

**Prefer a tab bar for navigation.** A tab bar provides access to the sections of your app that people use most. If your app is more complex, you can provide the option to convert the tab bar to a sidebar so people can access a wider set of navigation options.

**Let people customize the tab bar.** In apps with a lot of sections that people might want to access, it can be useful to let people select items that they use frequently and add them to the tab bar, or remove items that they use less frequently. For example, in the Music app, a person can choose a favorite playlist to display in the tab bar. If you let people select their own tabs, aim for a default list of five or fewer to preserve continuity between compact and regular view sizes. For developer guidance, see [`TabViewCustomization`](https://developer.apple.com/documentation/SwiftUI/TabViewCustomization) and [`UITab.Placement`](https://developer.apple.com/documentation/UIKit/UITab/Placement).

### tvOS

A tab bar is highly customizable. For example, you can:

- Specify a tint, color, or image for the tab bar background
- Choose a font for tab items, including a different font for the selected item
- Specify tints for selected and unselected items
- Add button icons, like settings and search

By default, a tab bar is translucent, and only the selected tab is opaque. When people use the remote to focus on the tab bar, the selected tab includes a drop shadow that emphasizes its selected state. The height of a tab bar is 68 points, and its top edge is 46 points from the top of the screen; you can’t change either of these values.

If there are more items than can fit in the tab bar, the system truncates the rightmost item by applying a fade effect that begins at the right side of the tab bar. If there are enough items to cause scrolling, the system also applies a truncating fade effect that starts from the left side.

**Be aware of tab bar scrolling behaviors.** By default, people can scroll the tab bar offscreen when the current tab contains a single main view. You can see examples of this behavior in the Watch Now, Movies, TV Show, Sports, and Kids tabs in the TV app. The exception is when a screen contains a split view, such as the TV app’s Library tab or an app’s Settings screen. In this case, the tab bar remains pinned at the top of the view while people scroll the content within the primary and secondary panes of the split view. Regardless of a tab’s contents, focus always returns to the tab bar at the top of the page when people press Menu on the remote.

**In a live-viewing app, organize tabs in a consistent way.** For the best experience, organize content in live-streaming apps with tabs in the following order:

- Live content
- Cloud DVR or other recorded content
- Other content

For additional guidance, see [Live-viewing apps](https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps).

### visionOS

In visionOS, a tab bar is always vertical, floating in a position that’s fixed relative to the window’s leading side. When people look at a tab bar, it automatically expands; to open a specific tab, people look at the tab and tap. While a tab bar is expanded, it can temporarily obscure the content behind it.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/f32ef9dc79663078639886243082e3cd/visionos-tab-bar-expanding-animation.mp4"></video> [Play](#)

**Supply a symbol and a text label for each tab.** A tab’s symbol is always visible in the tab bar. When people look at the tab bar, the system reveals tab labels, too. Even though the tab bar expands, you need to keep tab labels short so people can read them at a glance.

![A screenshot showing a collapsed tab bar containing only symbols.](https://docs-assets.developer.apple.com/published/e3841d7f6231fc5a1fc03b88337cc83f/visionos-tab-bar-collapsed%402x.png)

Collapsed

![A screenshot showing an expanded tab bar containing both symbols and labels.](https://docs-assets.developer.apple.com/published/ae30c6b5bfaf91fc871e720bb236f543/visionos-tab-bar-expanded%402x.png)

Expanded

**If it makes sense in your app, consider using a sidebar within a tab.** If your app’s hierarchy is deep, you might want to use a [sidebar](https://developer.apple.com/design/human-interface-guidelines/sidebars) to support secondary navigation within a tab. If you do this, be sure to prevent selections in the sidebar from changing which tab is currently open.

## Resources

#### Related

[Tab views](https://developer.apple.com/design/human-interface-guidelines/tab-views)

[Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)

[Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars)

[Materials](https://developer.apple.com/design/human-interface-guidelines/materials)

#### Developer documentation

[`TabView`](https://developer.apple.com/documentation/SwiftUI/TabView) — SwiftUI

[`TabViewBottomAccessoryPlacement`](https://developer.apple.com/documentation/SwiftUI/TabViewBottomAccessoryPlacement) — SwiftUI

[Enhancing your app’s content with tab navigation](https://developer.apple.com/documentation/SwiftUI/Enhancing-your-app-content-with-tab-navigation) — SwiftUI

[`UITabBar`](https://developer.apple.com/documentation/UIKit/UITabBar) — UIKit

[Elevating your iPad app with a tab bar and sidebar](https://developer.apple.com/documentation/UIKit/elevating-your-ipad-app-with-a-tab-bar-and-sidebar) — UIKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Updated terminology and art. |
| December 16, 2025 | Updated guidance for Liquid Glass. |
| July 28, 2025 | Added guidance for Liquid Glass. |
| September 9, 2024 | Added art representing the tab bar in iPadOS 18. |
| August 6, 2024 | Updated with guidance for the tab bar in iPadOS 18. |
| June 21, 2023 | Updated to include guidance for visionOS. |


---
title: "Token fields"
source: "https://developer.apple.com/design/human-interface-guidelines/token-fields"
author:
published:
created: 2026-06-11
description: "A token field is a type of text field that can convert text into tokens that are easy to select and manipulate."
tags:
  - "clippings"
---
![A stylized representation of a text field containing a person's name formatted as a token. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/92af7d62b46a81356b820e2f588dcb9f/components-token-field-intro~dark%402x.png)

For example, Mail uses token fields for the address fields in the compose window. As people enter recipients, Mail converts the text that represents each recipient’s name into a token. People can select these recipient tokens and drag to reorder them or move them into a different field.

You can configure a token field to present people with a list of suggestions as they enter text into the field. For example, Mail suggests recipients as people type in an address field. When people select a suggested recipient, Mail inserts the recipient into the field as a token.

![A partial screenshot of a Mail compose window in which tokens represent some recipients.](https://docs-assets.developer.apple.com/published/0c576883c64ca50c8101134a2950acab/token-fields-suggestion~dark%402x.png)

An individual token can also include a contextual menu that offers information about the token or editing options. For example, a recipient token in Mail includes a contextual menu with commands for editing the recipient name, marking the recipient as a VIP, and viewing the recipient’s contact card, among others.

![A partial screenshot of a Mail compose window in which one recipient token reveals a menu of commands.](https://docs-assets.developer.apple.com/published/94e92dea51e31c747b77d4b145ad647c/token-fields-contextual~dark%402x.png)

Tokens can also represent search terms in some situations; for guidance, see [Search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields).

## Best practices

**Add value with a context menu.** People often benefit from a [context menu](https://developer.apple.com/design/human-interface-guidelines/context-menus) with additional options or information about a token.

**Consider providing additional ways to convert text into tokens.** By default, text people enter turns into a token whenever they type a comma. You can specify additional shortcuts, such as pressing Return, that also invoke this action.

**Consider customizing the delay the system uses before showing suggested tokens.** By default, suggestions appear immediately. However, suggestions that appear too quickly may distract people while they’re typing. If your app suggests tokens, consider adjusting the delay to a comfortable level.

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, visionOS, and watchOS.*

## Resources

#### Related

[Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields)

[Search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields)

[Context menus](https://developer.apple.com/design/human-interface-guidelines/context-menus)

#### Developer documentation

[`NSTokenField`](https://developer.apple.com/documentation/AppKit/NSTokenField) — AppKit

---

# presentations

---
title: "Action sheets"
source: "https://developer.apple.com/design/human-interface-guidelines/action-sheets"
author:
published:
created: 2026-06-11
description: "An action sheet is a modal view that presents choices related to an action people initiate."
tags:
  - "clippings"
---
![A stylized representation of a set of action sheet buttons at the bottom of an iPhone. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/4c5dc85488c7fffadeab9ec3f2fcc7b0/components-action-sheet-intro~dark%402x.png)

## Best practices

**Use an action sheet — not an alert — to offer choices related to an intentional action.** For example, when people cancel the message they’re editing in Mail on iPhone, an action sheet provides two choices: delete the draft, or save the draft. Although an alert can also help people confirm or cancel an action that has destructive consequences, it doesn’t provide additional choices related to the action. More importantly, an alert is usually unexpected, generally telling people about a problem or a change in the current situation that might require them to act. For guidance, see [Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts).

![A partial screenshot of a new message being composed in Mail on iPhone.](https://docs-assets.developer.apple.com/published/cfa0d84cf04367441dbe47bc0934de46/action-sheet-iphone-mail~dark%402x.png)

![A partial screenshot of a new message being composed in Mail on iPhone, with the action sheet open after choosing to cancel the message. The action sheet presents choices to delete the draft or save the draft.](https://docs-assets.developer.apple.com/published/ba31ffab2e8cfb31594c7dc204a64f4a/action-sheet-iphone-mail-delete-action~dark%402x.png)

**Use action sheets sparingly.** Action sheets give people important information and choices, but they interrupt the current task to do so. To encourage people to pay attention to action sheets, avoid using them more than necessary.

**Aim to keep titles short enough to display on a single line.** A long title is difficult to read quickly and might get truncated or require people to scroll.

**Provide a message only if necessary.** In general, the title — combined with the context of the current action — provides enough information to help people understand their choices.

**If necessary, provide a Cancel button that lets people reject an action that might destroy data.** Place the Cancel button at the bottom of the action sheet (or in the upper-left corner of the sheet in watchOS). A SwiftUI confirmation dialog includes a Cancel button by default.

**Make destructive choices visually prominent.** Use the destructive style for buttons that perform destructive actions, and place these buttons at the top of the action sheet where they tend to be most noticeable. For developer guidance, see [`destructive`](https://developer.apple.com/documentation/SwiftUI/ButtonRole/destructive) (SwiftUI) or [`UIAlertAction.Style.destructive`](https://developer.apple.com/documentation/UIKit/UIAlertAction/Style-swift.enum/destructive) (UIKit).

## Platform considerations

*No additional considerations for macOS or tvOS. Not supported in visionOS.*

### iOS, iPadOS

**Use an action sheet — not a menu — to provide choices related to an action.** People are accustomed to having an action sheet appear when they perform an action that might require clarifying choices. In contrast, people expect a menu to appear when they choose to reveal it.

**Avoid letting an action sheet scroll.** The more buttons an action sheet has, the more time and effort it takes for people to make a choice. Also, scrolling an action sheet can be hard to do without inadvertently tapping a button.

### watchOS

The system-defined style for action sheets includes a title, an optional message, a Cancel button, and one or more additional buttons. The appearance of this interface is different depending on the device.

![An illustration of an action sheet on Apple Watch, showing content that represents text in the top half of the watch screen and two stacked buttons in the bottom half.](https://docs-assets.developer.apple.com/published/4ec6a46689c0ec4550d6fe48d4aa27a8/action-sheet-watch-system-defined%402x.png)

Each button has an associated style that conveys information about the button’s effect. There are three system-defined button styles:

| Style | Meaning |
| --- | --- |
| Default | The button has no special meaning. |
| Destructive | The button destroys user data or performs a destructive action in the app. |
| Cancel | The button dismisses the view without taking any action. |

**Avoid displaying more than four buttons in an action sheet, including the Cancel button.** When there are fewer buttons onscreen, it’s easier for people to view all their options at once. Because the Cancel button is required, aim to provide no more than three additional choices.

## Resources

#### Related

[Modality](https://developer.apple.com/design/human-interface-guidelines/modality)

[Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)

[Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)

#### Developer documentation

[`confirmationDialog(_:isPresented:titleVisibility:actions:)`](https://developer.apple.com/documentation/SwiftUI/View/confirmationDialog\(_:isPresented:titleVisibility:actions:\)-46zbb) — SwiftUI

[`UIAlertController.Style.actionSheet`](https://developer.apple.com/documentation/UIKit/UIAlertController/Style/actionSheet) — UIKit

---
title: "Alerts"
source: "https://developer.apple.com/design/human-interface-guidelines/alerts"
author:
published:
created: 2026-06-11
description: "An alert gives people critical information they need right away."
tags:
  - "clippings"
---
![A stylized representation of an alert mockup that includes a title, description, primary button, and secondary button. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/9f361e2cc8036bdb6ad75ba5362a4a40/components-alert-intro~dark%402x.png)

For example, an alert can tell people about a problem, warn them when their action might destroy data, and give them an opportunity to confirm a purchase or another important action they initiated.

## Best practices

**Use alerts sparingly.** Alerts give people important information, but they interrupt the current task to do so. Encourage people to pay attention to your alerts by making certain that each one offers only essential information and useful actions.

**Avoid using an alert merely to provide information.** People don’t appreciate an interruption from an alert that’s informative, but not actionable. If you need to provide only information, prefer finding an alternative way to communicate it within the relevant context. For example, when a server connection is unavailable, Mail displays an indicator that people can choose to learn more.

**Avoid displaying alerts for common, undoable actions, even when they’re destructive.** For example, you don’t need to alert people about data loss every time they delete an email or file because they do so with the intention of discarding data, and they can undo the action. In comparison, when people take an uncommon destructive action that they can’t undo, it’s important to display an alert in case they initiated the action accidentally.

**Avoid showing an alert when your app starts.** If you need to inform people about new or important information the moment they open your app, design a way to make the information easily discoverable. If your app detects a problem at startup, like no network connection, consider alternative ways to let people know. For example, you could show cached or placeholder data and a nonintrusive label that describes the problem.

## Anatomy

An alert is a modal view that can look different in different platforms and devices.

## Content

In all platforms, alerts display a title, optional informative text, and up to three buttons. On some platforms, alerts can include additional elements.

- In iOS, iPadOS, macOS, and visionOS, an alert can include a text field.
- Alerts in macOS and visionOS can include an icon and an accessory view.
- macOS alerts can add a suppression [checkbox](https://developer.apple.com/design/human-interface-guidelines/toggles#Checkboxes) and a [Help button](https://developer.apple.com/design/human-interface-guidelines/buttons#Help-buttons).

**In all alert copy, be direct, and use a neutral, approachable tone.** Alerts often describe problems and serious situations, so avoid being oblique or accusatory, or masking the severity of the issue.

**Write a title that clearly and succinctly describes the situation.** You need to help people quickly understand the situation, so be complete and specific, without being verbose. As much as possible, describe what happened, the context in which it happened, and why. Avoid writing a title that doesn’t convey useful information — like “Error” or “Error 329347 occurred” — but also avoid overly long titles that wrap to more than two lines. If the title is a complete sentence, use [sentence-style capitalization](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64) and appropriate ending punctuation. If the title is a sentence fragment, use title-style capitalization, and don’t add ending punctuation.

**Include informative text only if it adds value.** If you need to add an informative message, keep it as short as possible, using complete sentences, sentence-style capitalization, and appropriate punctuation.

**Avoid explaining alert buttons.** If your alert text and button titles are clear, you don’t need to explain what the buttons do. In rare cases where you need to provide guidance on choosing a button, use a term like *choose* to account for people’s current device and interaction method, and refer to a button using its exact title without quotes. For guidance, see [Buttons](https://developer.apple.com/design/human-interface-guidelines/alerts#Buttons).

**If supported, include a text field only if you need people’s input to resolve the situation.** For example, you might need to present a secure text field to receive a password.

## Buttons

**Create succinct, logical button titles.** Aim for a one- or two-word title that describes the result of selecting the button. Prefer verbs and verb phrases that relate directly to the alert text — for example, “View All,” “Reply,” or “Ignore.” In informational alerts only, you can use “OK” for acceptance, avoiding “Yes” and “No.” Always use “Cancel” to title a button that cancels the alert’s action. As with all button titles, use [title-style capitalization](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64) and no ending punctuation.

**Avoid using OK as the default button title unless the alert is purely informational.** The meaning of “OK” can be unclear even in alerts that ask people to confirm that they want to do something. For example, does “OK” mean “OK, I want to complete the action” or “OK, I now understand the negative results my action would have caused”? A specific button title like “Erase,” “Convert,” “Clear,” or “Delete” helps people understand the action they’re taking.

**Place buttons where people expect.** In general, place the button people are most likely to choose on the trailing side in a row of buttons or at the top in a stack of buttons. Always place the default button on the trailing side of a row or at the top of a stack. Cancel buttons are typically on the leading side of a row or at the bottom of a stack.

**Use the destructive style to identify a button that performs a destructive action people didn’t deliberately choose.** For example, when people deliberately choose a destructive action — such as Empty Trash — the resulting alert doesn’t apply the destructive style to the Empty Trash button because the button performs the person’s original intent. In this scenario, the convenience of pressing Return to confirm the deliberately chosen Empty Trash action outweighs the benefit of reaffirming that the button is destructive. In contrast, people appreciate an alert that draws their attention to a button that can perform a destructive action they didn’t originally intend.

**If there’s a destructive action, include a Cancel button to give people a clear, safe way to avoid the action.** Always use the title “Cancel” for a button that cancels an alert’s action. Note that you don’t want to make a Cancel button the default button. If you want to encourage people to read an alert and not just automatically press Return to dismiss it, avoid making any button the default button. Similarly, if you must display an alert with a single button that’s also the default, use a Done button, not a Cancel button.

**Provide alternative ways to cancel an alert when it makes sense.** In addition to choosing a Cancel button, people appreciate using keyboard shortcuts or other quick ways to cancel an onscreen alert. For example:

| Action | Platform |
| --- | --- |
| Exit to the Home Screen | iOS, iPadOS |
| Pressing Escape (Esc) or Command-Period (.) on an attached keyboard | iOS, iPadOS, macOS, visionOS |
| Pressing Menu on the remote | tvOS |

## Platform considerations

*No additional considerations for tvOS or watchOS.*

### iOS, iPadOS

**Use an action sheet — not an alert — to offer choices related to an intentional action.** For example, when people cancel the Mail message they’re editing, an action sheet provides three choices: delete the edits (or the entire draft), save the draft, or return to editing. Although an alert can also help people confirm or cancel an action that has destructive consequences, it doesn’t provide additional choices related to the action. For guidance, see [Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets).

**When possible, avoid displaying an alert that scrolls.** Although an alert might scroll if the text size is large enough, be sure to minimize the potential for scrolling by keeping alert titles short and including a brief message only when necessary.

### macOS

macOS automatically displays your app icon in an alert, but you can supply an alternative icon or symbol. In addition, macOS lets you:

- Configure repeating alerts to let people suppress subsequent occurrences of the same alert.
- Append a custom view if it’s necessary to provide additional information (for developer guidance, see [`accessoryView`](https://developer.apple.com/documentation/AppKit/NSAlert/accessoryView)).
- Include a Help button that opens your help documentation (see [Help buttons](https://developer.apple.com/design/human-interface-guidelines/buttons#Help-buttons)).

**Use a caution symbol sparingly.** Using a caution symbol like `exclamationmark.triangle` too frequently in your alerts diminishes its significance. Use the symbol only when extra attention is really needed, as when confirming an action that might result in unexpected loss of data. Don’t use the symbol for tasks whose only purpose is to overwrite or remove data, such as a save or empty trash.

### visionOS

When your app is running in the Shared Space, visionOS displays an alert in front of the app’s window, slightly forward along the z-axis.

<video width="735" controls=""><source src="https://docs-assets.developer.apple.com/published/209fa2d4200ef1ec6811fa7695206bd5/alerts-freeform-delete-warning.mp4"></video> [Play](#)

If someone moves a window without dismissing its alert, the alert remains anchored to the window. If your app is running in a Full Space, the system displays the alert centered in the wearer’s [field of view](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Field-of-view).

<video width="735" controls=""><source src="https://docs-assets.developer.apple.com/published/7e968eebda99e9816a585de03ae0faf9/alerts-shared-space-pinning-to-window.mp4"></video> [Play](#)

If you need to display an accessory view in a visionOS alert, create a view that has a maximum height of 154 pt and a 16-pt corner radius.

## Resources

#### Related

[Modality](https://developer.apple.com/design/human-interface-guidelines/modality)

[Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets)

[Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)

#### Developer documentation

[`alert(_:isPresented:actions:)`](https://developer.apple.com/documentation/SwiftUI/View/alert\(_:isPresented:actions:\)-1bkka) — SwiftUI

[`UIAlertController`](https://developer.apple.com/documentation/UIKit/UIAlertController) — UIKit

[`NSAlert`](https://developer.apple.com/documentation/AppKit/NSAlert) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| February 2, 2024 | Enhanced guidance for using default and Cancel buttons. |
| September 12, 2023 | Added anatomy artwork for visionOS. |
| June 21, 2023 | Updated to include guidance for visionOS. |

---
title: "Page controls"
source: "https://developer.apple.com/design/human-interface-guidelines/page-controls"
author:
published:
created: 2026-06-11
description: "A page control displays a row of indicator images, each of which represents a page in a flat list."
tags:
  - "clippings"
---
![A stylized representation of a page control with an indicator denoting the active page. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/a422742d8b7bcabe60000ade69c3d88b/components-page-dots-intro~dark%402x.png)

The scrolling row of indicators helps people navigate the list to find the page they want. Page controls can handle an arbitrary number of pages, making them particularly useful in situations where people can create custom lists.

Page controls appear as a series of small indicator dots by default, representing the available pages. A solid dot denotes the current page. Visually, these dots are always equidistant, and are clipped if there are too many to fit in the window.

## Best practices

**Use page controls to represent movement between an ordered list of pages.** Page controls don’t represent hierarchical or nonsequential page relationships. For more complex navigation, consider using a sidebar or split view instead.

**Center a page control at the bottom of the view or window.** To ensure people always know where to find a page control, center it horizontally and position it near the bottom of the view.

**Although page controls can handle any number of pages, don’t display too many**. More than about 10 dots are hard to count at a glance. If your app needs to display more than 10 pages as peers, consider using a different arrangement‚ such as a grid, that lets people navigate the content in any order.

## Customizing indicators

By default, a page control uses the system-provided dot image for all indicators, but it can also display a unique image to help people identify a specific page. For example, Weather uses the `location.fill` symbol to distinguish the current location’s page.

If it enhances your app or game, you can provide a custom image to use as the default image for all indicators and you can also supply a different image for a specific page. For developer guidance, see [`preferredIndicatorImage`](https://developer.apple.com/documentation/UIKit/UIPageControl/preferredIndicatorImage) and [`setIndicatorImage(_:forPage:)`](https://developer.apple.com/documentation/UIKit/UIPageControl/setIndicatorImage\(_:forPage:\)).

**Make sure custom indicator images are simple and clear.** Avoid complex shapes, and don’t include negative space, text, or inner lines, because these details can make an icon muddy and indecipherable at very small sizes. Consider using simple [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) as indicators or design your own icons. For guidance, see [Icons](https://developer.apple.com/design/human-interface-guidelines/icons).

**Customize the default indicator image only when it enhances the page control’s overall meaning.** For example, if every page you list contains bookmarks, you might use the `bookmark.fill` symbol as the default indicator image.

**Avoid using more than two different indicator images in a page control.** If your list contains one page with special meaning — like the current-location page in Weather — you can make the page easy to find by giving it a unique indicator image. In contrast, a page control that uses several unique images to mark several important pages is hard to use because people must memorize the meaning of each image. A page control that displays more than two types of indicator images tends to look messy and haphazard, even when each image is clear.

![An illustration that represents the Weather app highlighted to show a page control at the bottom edge of the screen. The page control displays a mix of icons, such as weak sun, cloud, cloud with sun, and cloud with drizzle.](https://docs-assets.developer.apple.com/published/dbed6a6b1379009bb3e02a4607c948ed/page-indicator-customization-incorrect~dark%402x.png)

Using several different indicators can make a page control look busy and difficult to use.

![An illustration that represents the Weather app highlighted to show a page control at the bottom edge of the screen. The page control displays the location symbol on the leading side followed by a series of dots.](https://docs-assets.developer.apple.com/published/dd41395c2588e7f2a9c31bb3d924938c/page-indicator-customization-correct~dark%402x.png)

Using only two different indicators looks well-organized and provides a consistent experience.

**Avoid coloring indicator images.** Custom colors can reduce the contrast that differentiates the current-page indicator and makes the page control visible on the screen. To ensure that your page control is easy to use and looks good in different contexts, let the system automatically color the indicators.

## Platform considerations

*Not supported in macOS.*

### iOS, iPadOS

A page control can adjust the appearance of indicators to provide more information about the list. For example, the control highlights the indicator of the current page so people can estimate the page’s relative position in the list. When there are more indicators than fit in the space, the control can shrink indicators at both sides to suggest that more pages are available.

![An illustration of a page control. The page control displays a total of 9 dots. The center 5 dots use the default size; the second and eighth dots are about half the default size and the first and ninth dots are about one quarter the default size. The center dot is filled, indicating the location of the current page in the list.](https://docs-assets.developer.apple.com/published/a75c1a2f25d40f0888fdc16ad6a8fbad/page-controls-many-indicators~dark%402x.png)

People interact with page controls by tapping or scrubbing (to *scrub*, people touch the control and drag left or right). Tapping on the leading or trailing side of the current-page indicator reveals the next or previous page; in iPadOS, people can also use the pointer to target a specific indicator. Scrubbing opens pages in sequence, and scrubbing past the leading or trailing edge of the control helps people quickly reach the first or last page.

**Avoid animating page transitions during scrubbing.** People can scrub very quickly, and using the scrolling animation for every transition can make your app lag and cause distracting visual flashes. Use the animated scrolling transition only for tapping.

A page control can include a translucent, rounded-rectangle background appearance that provides visual contrast for the indicators. You can choose one of the following background styles:

- Automatic — Displays the background only when people interact with the control. Use this style when the page control isn’t the primary navigational element in the UI.
- Prominent — Always displays the background. Use this style only when the control is the primary navigational control in the screen.
- Minimal — Never displays the background. Use this style when you just want to show the position of the current page in the list and you don’t need to provide visual feedback during scrubbing.

For developer guidance, see [`backgroundStyle`](https://developer.apple.com/documentation/UIKit/UIPageControl/backgroundStyle-swift.property).

**Avoid supporting the scrubber when you use the minimal background style.** The minimal style doesn’t provide visual feedback during scrubbing. If you want to let people scrub a list of pages in your app, use the automatic or prominent background styles.

### tvOS

**Use page controls on collections of full-screen pages.** A page control is designed to operate in a full-screen environment where multiple content-rich pages are peers in the page hierarchy. Inclusion of additional controls makes it difficult to maintain focus while moving between pages.

### visionOS

In visionOS, page controls represent available pages and indicate the current page, but people don’t interact with them.

### watchOS

In watchOS, page controls can be displayed at the bottom of the screen for horizontal pagination, or next to the Digital Crown when presenting a vertical [tab view](https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/tab-views). When using vertical tab views, the page indicator shows people where they are in the navigation, both within the current page and within the set of pages. The page control transitions between scrolling through a page’s content and scrolling to other pages.

![An illustration representing a screen that includes a vertical tab view on Apple Watch. A page control next to the Digital Crown shows that the fourth tab is currently selected.](https://docs-assets.developer.apple.com/published/d8ac19e2578c57035e74fe697a15d573/page-controls-watch-vertical%402x.png)

Vertical page control

![An illustration representing a screen that includes a horizontal tab view on Apple Watch. A page control at the bottom shows that the second tab is currently selected.](https://docs-assets.developer.apple.com/published/0f915ec7b0e8755a2d60845617746f71/page-controls-watch-horizontal%402x.png)

Horizontal page control

**Use vertical pagination to separate multiple views into distinct, purposeful pages.** Give each page a clear purpose, and let people scroll through the pages using the Digital Crown. In watchOS, this design is more effective than horizontal pagination or many levels of hierarchical navigation.

**Consider limiting the content of an individual page to a single screen height.** Embracing this constraint encourages each page to serve a clear and distinct purpose and results in a more glanceable design. Use variable-height pages judiciously and, if possible, only place them after fixed-height pages in your app design.

## Resources

#### Related

[Scroll views](https://developer.apple.com/design/human-interface-guidelines/scroll-views)

#### Developer documentation

[`PageTabViewStyle`](https://developer.apple.com/documentation/SwiftUI/PageTabViewStyle) — SwiftUI

[`UIPageControl`](https://developer.apple.com/documentation/UIKit/UIPageControl) — UIKit

## Change log

| Date | Changes |
| --- | --- |
| June 21, 2023 | Updated to include guidance for visionOS. |
| June 5, 2023 | Updated guidance for using page controls in watchOS. |

---
title: "Panels"
source: "https://developer.apple.com/design/human-interface-guidelines/panels"
author:
published:
created: 2026-06-11
description: "In a macOS app, a panel typically floats above other open windows providing supplementary controls, options, or information related to the active window or current selection."
tags:
  - "clippings"
---
![A stylized representation of a panel floating above a window. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/d7f533ec9504d74179c4d2e48a8a3e9b/components-panel-intro~dark%402x.png)

In general, a panel has a less prominent appearance than an app’s [main window](https://developer.apple.com/design/human-interface-guidelines/windows#macOS-window-states). When the situation calls for it, a panel can also use a dark, translucent style to support a heads-up display (or *HUD*) experience.

When your app runs in other platforms, consider using a modal view to present supplementary content that’s relevant to the current task or selection. For guidance, see [Modality](https://developer.apple.com/design/human-interface-guidelines/modality).

## Best practices

**Use a panel to give people quick access to important controls or information related to the content they’re working with.** For example, you might use a panel to provide controls or settings that affect the selected item in the active document or window.

**Consider using a panel to present inspector functionality.** An *inspector* displays the details of the currently selected item, automatically updating its contents when the item changes or when people select a new item. In contrast, if you need to present an *Info* window — which always maintains the same contents, even when the selected item changes — use a regular window, not a panel. Depending on the layout of your app, you might also consider using a [split view](https://developer.apple.com/design/human-interface-guidelines/split-views) pane to present an inspector.

**Prefer simple adjustment controls in a panel.** As much as possible, avoid including controls that require typing text or selecting items to act upon because these actions can require multiple steps. Instead, consider using controls like sliders and steppers because these components can give people more direct control.

**Write a brief title that describes the panel’s purpose.** Because a panel often floats above other open windows in your app, it needs a title bar so people can position it where they want. Create a short title using a noun — or a noun phrase with [title-style capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64) — that can help people recognize the panel onscreen. For example, macOS provides familiar panels titled “Fonts” and “Colors,” and many apps use the title “Inspector.”

**Show and hide panels appropriately.** When your app becomes active, bring all of its open panels to the front, regardless of which window was active when the panel opened. When your app is inactive, hide all of its panels.

**Avoid including panels in the Window menu’s documents list.** It’s fine to include commands for showing or hiding panels in the [Window menu](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Window-menu), but panels aren’t documents or standard app windows, and they don’t belong in the Window menu’s list.

**In general, avoid making a panel’s minimize button available.** People don’t usually need to minimize a panel, because it displays only when needed and disappears when the app is inactive.

**Refer to panels by title in your interface and in help documentation.** In menus, use the panel’s title without including the term *panel*: for example, “Show Fonts,” “Show Colors,” and “Show Inspector.” In help documentation, it can be confusing to introduce “panel” as a different type of window, so it’s generally best to refer to a panel by its title or — when it adds clarity — by appending *window* to the title. For example, the title “Inspector” often supplies enough context to stand on its own, whereas it can be clearer to use “Fonts window” and “Colors window” instead of just “Fonts” and “Colors.”

## HUD-style panels

A HUD-style panel serves the same function as a standard panel, but its appearance is darker and translucent. HUDs work well in apps that present highly visual content or that provide an immersive experience, such as media editing or a full-screen slide show. For example, QuickTime Player uses a HUD to display inspector information without obstructing too much content.

![A screenshot of a translucent HUD panel, used to display inspector information for a movie file, including the filename, format, frames per second, data rate, and the frame size of the movie content.](https://docs-assets.developer.apple.com/published/c0f1234f37f597c3eb1436cfc31ae7b5/hud-style-panel~dark%402x.png)

**Prefer standard panels.** People can be distracted or confused by a HUD when there’s no logical reason for its presence. Also, a HUD might not match the current appearance setting. In general, use a HUD only:

- In a media-oriented app that presents movies, photos, or slides
- When a standard panel would obscure essential content
- When you don’t need to include controls — with the exception of the disclosure triangle, most system-provided controls don’t match a HUD’s appearance.

**Maintain one panel style when your app switches modes.** For example, if you use a HUD when your app is in full-screen mode, prefer maintaining the HUD style when people take your app out of full-screen mode.

**Use color sparingly in HUDs.** Too much color in the dark appearance of a HUD can be distracting. Often, you need only small amounts of high-contrast color to highlight important information in a HUD.

**Keep HUDs small.** HUDs are designed to be unobtrusively useful, so letting them grow too large defeats their primary purpose. Don’t let a HUD obscure the content it adjusts, and make sure it doesn’t compete with the content for people’s attention.

For developer guidance, see [`hudWindow`](https://developer.apple.com/documentation/AppKit/NSWindow/StyleMask-swift.struct/hudWindow).

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Windows](https://developer.apple.com/design/human-interface-guidelines/windows)

[Modality](https://developer.apple.com/design/human-interface-guidelines/modality)

#### Developer documentation

[`NSPanel`](https://developer.apple.com/documentation/AppKit/NSPanel) — AppKit

[`hudWindow`](https://developer.apple.com/documentation/AppKit/NSWindow/StyleMask-swift.struct/hudWindow) — AppKit

---
title: "Popovers"
source: "https://developer.apple.com/design/human-interface-guidelines/popovers"
author:
published:
created: 2026-06-11
description: "A popover is a transient view that appears above other content when people click or tap a control or interactive area."
tags:
  - "clippings"
---
![A stylized representation of a popover view. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/cddc0daa359ab267817ef24c0a65a755/components-popover-intro~dark%402x.png)

## Best practices

**Use a popover to expose a small amount of information or functionality.** Because a popover disappears after people interact with it, limit the amount of functionality in the popover to a few related tasks. For example, a calendar event popover makes it easy for people to change the date or time of an event, or to move it to another calendar. The popover disappears after the change, letting people continue reviewing the events on their calendar.

**Consider using popovers when you want more room for content.** Views like sidebars and panels take up a lot of space. If you need content only temporarily, displaying it in a popover can help streamline your interface.

**Position popovers appropriately.** Make sure a popover’s arrow points as directly as possible to the element that revealed it. Ideally, a popover doesn’t cover the element that revealed it or any essential content people may need to see while using it.

**Use a Close button for confirmation and guidance only.** A Close button, including Cancel or Done, is worth including if it provides clarity, like exiting with or without saving changes. Otherwise, a popover generally closes when people click or tap outside its bounds or select an item in the popover. If multiple selections are possible, make sure the popover remains open until people explicitly dismiss it or they click or tap outside its bounds.

**Always save work when automatically closing a nonmodal popover.** People can unintentionally dismiss a nonmodal popover by clicking or tapping outside its bounds. Discard people’s work only when they click or tap an explicit Cancel button.

**Show one popover at a time.** Displaying multiple popovers clutters the interface and causes confusion. Never show a cascade or hierarchy of popovers, in which one emerges from another. If you need to show a new popover, close the open one first.

**Don’t show another view over a popover.** Make sure nothing displays on top of a popover, except for an alert.

**When possible, let people close one popover and open another with a single click or tap.** Avoiding extra gestures is especially desirable when several different bar buttons each open a popover.

**Avoid making a popover too big.** Make a popover only big enough to display its contents and point to the place it came from. If necessary, the system can adjust the size of a popover to ensure it fits well in the interface.

**Provide a smooth transition when changing the size of a popover.** Some popovers provide both condensed and expanded views of the same information. If you adjust the size of a popover, animate the change to avoid giving the impression that a new popover replaced the old one.

**Avoid using the word *popover* in help documentation.** Instead, refer to a specific task or selection. For example, instead of “Select the Show button at the bottom of the popover,” you might write “Select the Show button.”

**Avoid using a popover to show a warning.** People can miss a popover or accidentally close it. If you need to warn people, use an [alert](https://developer.apple.com/design/human-interface-guidelines/alerts) instead.

## Platform considerations

*No additional considerations for visionOS. Not supported in tvOS or watchOS.*

### iOS, iPadOS

**Avoid displaying popovers in compact views.** Make your app or game dynamically adjust its layout based on the size class of the content area. Reserve popovers for wide views; for compact views, use all available screen space by presenting information in a full-screen modal view like a sheet instead. For related guidance, see [Modality](https://developer.apple.com/design/human-interface-guidelines/modality).

### macOS

You can make a popover detachable in macOS, which becomes a separate panel when people drag it. The panel remains visible onscreen while people interact with other content.

**Consider letting people detach a popover.** People might appreciate being able to convert a popover into a panel if they want to view other information while the popover remains visible.

**Make minimal appearance changes to a detached popover.** A panel that looks similar to the original popover helps people maintain context.

## Resources

#### Related

[Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)

[Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets)

[Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)

[Modality](https://developer.apple.com/design/human-interface-guidelines/modality)

#### Developer documentation

[`popover(isPresented:attachmentAnchor:arrowEdge:content:)`](https://developer.apple.com/documentation/SwiftUI/View/popover\(isPresented:attachmentAnchor:arrowEdge:content:\)) — SwiftUI

[`UIPopoverPresentationController`](https://developer.apple.com/documentation/UIKit/UIPopoverPresentationController) — UIKit

[`NSPopover`](https://developer.apple.com/documentation/AppKit/NSPopover) — AppKit

---
title: "Scroll views"
source: "https://developer.apple.com/design/human-interface-guidelines/scroll-views"
author:
published:
created: 2026-06-11
description: "A scroll view lets people view content that’s larger than the view’s boundaries by moving the content vertically or horizontally."
tags:
  - "clippings"
---
![A stylized representation of a scrollable image view. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/4fd5281e64faaf8296a810ca547461ff/components-scroll-view-intro~dark%402x.png)

The scroll view itself has no appearance, but it can display a translucent *scroll indicator* that typically appears after people begin scrolling the view’s content. Although the appearance and behavior of scroll indicators can vary per platform, all indicators provide visual feedback about the scrolling action. For example, in iOS, iPadOS, macOS, visionOS, and watchOS, the indicator shows whether the currently visible content is near the beginning, middle, or end of the view.

## Best practices

**Support default scrolling gestures and keyboard shortcuts.** People are accustomed to the systemwide scrolling behavior and expect it to work everywhere. If you build custom scrolling for a view, make sure your scroll indicators use the elastic behavior that people expect.

**Make it apparent when content is scrollable.** Because scroll indicators aren’t always visible, it can be helpful to make it obvious when content extends beyond the view. For example, displaying partial content at the edge of a view indicates that there’s more content in that direction. Although most people immediately try scrolling a view to discover if additional content is available, it’s considerate to draw their attention to it.

**Avoid putting a scroll view inside another scroll view with the same orientation.** Nesting scroll views that have the same orientation can create an unpredictable interface that’s difficult to control. It’s alright to place a horizontal scroll view inside a vertical scroll view (or vice versa), however.

**Consider supporting page-by-page scrolling if it makes sense for your content.** In some situations, people appreciate scrolling by a fixed amount of content per interaction instead of scrolling continuously. On most platforms, you can define the size of such a *page* — typically the current height or width of the view — and define an interaction that scrolls one page at a time. To help maintain context during page-by-page scrolling, you can define a unit of overlap, such as a line of text, a row of glyphs, or part of a picture, and subtract the unit from the page size. For developer guidance, see [`PagingScrollTargetBehavior`](https://developer.apple.com/documentation/SwiftUI/PagingScrollTargetBehavior).

**In some cases, scroll automatically to help people find their place.** Although people initiate almost all scrolling, automatic scrolling can be helpful when relevant content is no longer in view, such as when:

- Your app performs an operation that selects content or places the insertion point in an area that’s currently hidden. For example, when your app locates text that people are searching for, scroll the content to bring the new selection into view.
- People start entering information in a location that’s not currently visible. For example, if the insertion point is on one page and people navigate to another page, scroll back to the insertion point as soon as they begin to enter text.
- The pointer moves past the edge of the view while people are making a selection. In this case, follow the pointer by scrolling in the direction it moves.
- People select something and scroll to a new location before acting on the selection. In this case, scroll until the selection is in view before performing the operation.

In all cases, automatically scroll the content only as much as necessary to help people retain context. For example, if part of a selection is visible, you don’t need to scroll the entire selection into view.

**If you support zoom, set appropriate maximum and minimum scale values.** For example, zooming in on text until a single character fills the screen doesn’t make sense in most situations.

## Scroll edge effects

In iOS, iPadOS, and macOS, a *scroll edge effect* provides a visual separation between certain interface elements, such as [toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars), and the scrolling content area behind them. If you use custom bars, you might want to add this effect manually if the top layer of your interface needs extra clarity, or adjust its style from automatic to the hard or soft style.

![A screenshot of the top half of an iPhone app, with a photograph of a palm tree as the background and a top toolbar with a Back button, title label, and Add button. The transition between the toolbar and background uses a hard scroll edge effect, which applies a more opaque blur with a defined edge at the bottom of the bar.](https://docs-assets.developer.apple.com/published/82a59338e82cc9dea4063790f53e2e13/scroll-views-scroll-edge-effect-hard%402x.png)

Hard scroll edge effect

![A screenshot of the top half of an iPhone app, with a photograph of a palm tree as the background and a top toolbar with a Back button, title label, and Add button. The transition between the toolbar and background uses a soft scroll edge effect, which applies a variable blur that provides a softer fade toward the bottom of the bar.](https://docs-assets.developer.apple.com/published/efdf39bd6f191c814326f8340c85955f/scroll-views-scroll-edge-effect-soft%402x.png)

Soft scroll edge effect

**Prefer the automatic scroll edge effect style.** Where possible, use the default [automatic](https://developer.apple.com/documentation/SwiftUI/ScrollEdgeEffectStyle/automatic) style of the scroll edge effect. This style provides a more opaque visual separation for top toolbars that contain a large number of controls, text that appears outside of [Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass) controls, and pinned table headers. If you use the soft scroll edge effect style instead, thoroughly test your interface to ensure your controls maintain legibility in a variety of contexts.

**Only use a scroll edge effect when a scroll view is behind floating interface elements.** Scroll edge effects aren’t decorative. They don’t block or darken like overlays; they exist to ensure controls stay visually distinct.

**Apply one scroll edge effect per view.** In split view layouts on iPad and Mac, each pane can have its own scroll edge effect; in this case, keep them consistent in height to maintain alignment.

For developer guidance, see [`ScrollEdgeEffectStyle`](https://developer.apple.com/documentation/SwiftUI/ScrollEdgeEffectStyle), [`UIScrollEdgeEffect.Style`](https://developer.apple.com/documentation/UIKit/UIScrollEdgeEffect/Style-swift.class), and [`NSScrollEdgeEffectStyle`](https://developer.apple.com/documentation/AppKit/NSScrollEdgeEffectStyle).

## Platform considerations

### iOS, iPadOS

**Consider showing a page control when a scroll view is in page-by-page mode.** [Page controls](https://developer.apple.com/design/human-interface-guidelines/page-controls) show how many pages, screens, or other chunks of content are available and indicates which one is currently visible. For example, Weather uses a page control to indicate movement between people’s saved locations. If you show a page control with a scroll view, don’t show the scrolling indicator on the same axis to avoid confusing people with redundant controls.

### macOS

In macOS, a *scroll indicator* is commonly called a *scroll bar*.

**If necessary, use small or mini scroll bars in a panel.** When space is tight, you can use smaller scroll bars in panels that need to coexist with other windows. Be sure to use the same size for all controls in such a panel.

### tvOS

Views in tvOS can scroll, but they aren’t treated as distinct objects with scroll indicators. Instead, when content exceeds the size of the screen, the system automatically scrolls the interface to keep focused items visible.

### visionOS

In visionOS, the scroll indicator has a small, fixed size to help communicate that people can scroll efficiently without making large movements. To make it easy to find, the scroll indicator always appears in a predictable location with respect to the window: vertically centered at the trailing edge during vertical scrolling and horizontally centered at the window’s bottom edge during horizontal scrolling.

When people begin swiping content in the direction they want it to scroll, the scroll indicator appears at the window’s edge, visually reinforcing the effect of their gesture and providing feedback about the content’s current position and overall length. When people look at the scroll indicator and begin a drag gesture, the indicator enables a jog bar experience that lets people manipulate the scrolling speed instead of the content’s position. In this experience, the scroll indicator reveals tick marks that speed up or slow down as people make small adjustments to their gesture, providing visual feedback that helps people precisely control scrolling acceleration.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/b53f12460c78b22853d3f0a628c2e2e1/visionos-scroll-indicator-jog-bar.mp4"></video> [Play](#)

**If necessary, account for the size of the scroll indicator.** Although the indicator’s overall size is small, it’s a little thicker than the same component in iOS. If your content uses tight margins, consider increasing them to prevent the scroll indicator from overlapping the content.

#### Look to Scroll

In views that support Look to Scroll, people can scroll using only their eyes. Scrolling starts when people look near the boundary of the scroll view — along the top and bottom for vertical scroll views, or along the sides for horizontal scroll views. For example, a person can look at the bottom edge of a Safari window to scroll the page down, or look at an album on the trailing edge in the Music app to scroll it horizontally toward the center of the page. Look to Scroll works in conjunction with existing behavior, so someone can choose whether to use a gesture or their eyes to scroll. For developer guidance, see [`look`](https://developer.apple.com/documentation/SwiftUI/ScrollInputKind/look).

**Support Look to Scroll for reading or browsing views.** Because Look to Scroll doesn’t work by default, you need to add support for it to each individual scroll view. If your app contains reading or browsing views, add support for Look to Scroll to provide a comfortable and hands-free experience. For developer guidance, see [`ScrollInputKind`](https://developer.apple.com/documentation/SwiftUI/ScrollInputKind).

**Avoid using Look to Scroll for secondary content.** In general, support standard gestures — but not Look to Scroll — in views that contain UI controls or dense information that requires quick, precise scrolling. For example, the Notes app offers Look to Scroll within the main view to let people easily read their content, but doesn’t support it for the list of notes.

**Maintain consistency across content.** If you support Look to Scroll for one view in your app, make sure to support it for all similar views. For example, if you offer several collection views of videos throughout your app, support Look to Scroll for each of these views so people know what to expect.

**Define clear scroll areas within your app.** In views that support Look to Scroll, prefer making the view the full width or full height of the window. This gives people generous space to scroll and provides clear edges. If you inset a scroll view from a window, like in the Notes app, provide clear boundaries so people know where to look.

**If your app uses custom scroll effects or animations, remove them before supporting Look to Scroll.** Custom effects that use scroll position to change content, such as parallax effects and animations, can cause Look to Scroll to behave unexpectedly.

### watchOS

**Prefer vertically scrolling content.** People are accustomed to using the Digital Crown to navigate to and within apps on Apple Watch. If your app contains a single list or content view, rotating the Digital Crown scrolls vertically when your app’s content is taller than the height of the display.

**Use tab views to provide page-by-page scrolling.** watchOS displays tab views as pages. If you place tab views in a vertical stack, people can rotate the Digital Crown to move vertically through full-screen pages of content. In this scenario, the system displays a page indicator next to the Digital Crown that shows people where they are in the content, both within the current page and within a set of pages. For guidance, see [Tab views](https://developer.apple.com/design/human-interface-guidelines/tab-views).

**When displaying paged content, consider limiting the content of an individual page to a single screen height.** Embracing this constraint clarifies the purpose of each page, helping you create a more glanceable design. However, if your app has long pages, people can still use the Digital Crown both to navigate between shorter pages and to scroll content in a longer page because the page indicator expands into a scroll indicator when necessary. Use variable-height pages judiciously and place them after fixed-height pages when possible.

## Resources

#### Related

[Page controls](https://developer.apple.com/design/human-interface-guidelines/page-controls)

[Gestures](https://developer.apple.com/design/human-interface-guidelines/gestures)

[Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices)

#### Developer documentation

[`ScrollView`](https://developer.apple.com/documentation/SwiftUI/ScrollView) — SwiftUI

[`UIScrollView`](https://developer.apple.com/documentation/UIKit/UIScrollView) — UIKit

[`NSScrollView`](https://developer.apple.com/documentation/AppKit/NSScrollView) — AppKit

[`WKPageOrientation`](https://developer.apple.com/documentation/WatchKit/WKPageOrientation) — WatchKit

[`look`](https://developer.apple.com/documentation/SwiftUI/ScrollInputKind/look) — SwiftUI

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Updated guidance for scroll edge effects. |
| March 24, 2026 | Added guidance for Look to Scroll in visionOS. |
| July 28, 2025 | Added guidance for scroll edge effects. |
| February 2, 2024 | Added artwork showing the behavior of the visionOS scroll indicator. |
| December 5, 2023 | Described the visionOS scroll indicator and added guidance for integrating it with window layout. |
| June 5, 2023 | Updated guidance for using scroll views in watchOS. |

---
title: "Sheets"
source: "https://developer.apple.com/design/human-interface-guidelines/sheets"
author:
published:
created: 2026-06-11
description: "A sheet helps people perform a scoped task that’s closely related to their current context."
tags:
  - "clippings"
---
![A stylized representation of a sheet extending down from the top of a window. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/1395edc9cecd111314aee32322055e0f/components-sheet-intro~dark%402x.png)

A sheet is useful for requesting specific information from people or presenting a simple task that they can complete before returning to the parent view. For example, a sheet might let people supply information needed to complete an action, such as attaching a file or choosing a location to save it.

## Anatomy

In macOS, tvOS, visionOS, and watchOS, a sheet is always *modal*. A modal sheet presents a targeted experience that prevents people from interacting with the parent view until they dismiss the sheet (for more on modal presentation, see [Modality](https://developer.apple.com/design/human-interface-guidelines/modality)).

In iOS and iPadOS, a sheet can be either modal or *nonmodal*. When a nonmodal sheet is onscreen, people use its functionality to affect the parent view without dismissing the sheet. For example, Notes on iPhone and iPad uses a nonmodal sheet to let people format various text selections as they edit a note.

![A screenshot of an in-progress note on iPhone. Several words are selected and highlighted. In the bottom half of the screen, the format sheet shows that the selected words use the regular body font.](https://docs-assets.developer.apple.com/published/a40afa79c37ed40e404c8f038e06c073/sheets-nonmodal-notes-text-regular~dark%402x.png)

The Notes format sheet lets people apply formatting to selected text in the editing view.

![A screenshot of the same in-progress note on iPhone. Different words are selected and highlighted. The format sheet shows that the selected words use the body font in italics.](https://docs-assets.developer.apple.com/published/77a483c1543e64b1289d44d1e35c9b27/sheets-nonmodal-notes-text-italic~dark%402x.png)

Because the sheet is nonmodal, people can make additional text selections without dismissing the sheet.

There are several common buttons that help people navigate through and dismiss sheets.

- The **Cancel** (or Close) button dismisses a sheet without saving any changes. This type of button is common in most sheets.
- The **Done** button dismisses a sheet after completing a task or explicitly saving changes.
- The **Back** button lets people navigate to a previous step in a multi-step flow or to a parent view in a hierarchy. It isn’t intended to dismiss a sheet.

The placement of these buttons varies between platforms; see [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/sheets#Platform-considerations).

## Best practices

**For complex or prolonged user flows, consider alternatives to sheets.** For example, iOS and iPadOS offer a full-screen style of modal view that can work well to display content like videos, photos, or camera views or to help people perform multistep tasks like document or photo editing. (For developer guidance, see [`UIModalPresentationStyle.fullScreen`](https://developer.apple.com/documentation/UIKit/UIModalPresentationStyle/fullScreen).) In a macOS experience, you might want to open a new window or let people enter full-screen mode instead of using a sheet. For example, a self-contained task like editing a document tends to work well in a separate window, whereas [going full screen](https://developer.apple.com/design/human-interface-guidelines/going-full-screen) can help people view media. In visionOS, you can give people a way to transition your app to a Full Space where they can dive into content or a task; for guidance, see [Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences).

**Display only one sheet at a time from the main interface.** When people close a sheet, they expect to return to the parent view or window. If closing a sheet takes people back to another sheet, they can lose track of where they are in your app. If something people do within a sheet results in another sheet appearing, close the first sheet before displaying the new one. If necessary, you can display the first sheet again after people dismiss the second one.

**Use a nonmodal view when you want to present supplementary items that affect the main task in the parent view.** To give people access to information and actions they need while continuing to interact with the main window, consider using a [split view](https://developer.apple.com/design/human-interface-guidelines/split-views) in visionOS or a [panel](https://developer.apple.com/design/human-interface-guidelines/panels) in macOS; in iOS and iPadOS, you can use a nonmodal sheet for this workflow. For guidance, see [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS).

**Provide an alternative to the Done button.** If you provide a Done button, always pair it with a Cancel button to give people a clear way to dismiss the sheet without confirming or saving their changes, or a Back button to move to a previous step in the sheet. Relying solely on the Done button implies that completing the task is the only way to exit the sheet, which can feel restrictive or misleading.

![An illustration of the top half of a sheet on iPhone. A Done button appears in the top-right corner on its own.](https://docs-assets.developer.apple.com/published/f5874a253c577ef7bd396280e5ed3b4d/sheets-buttons-placement-done-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration of the top half of a sheet on iPhone. A Cancel button appears in the top-left corner of the view, and a Done button appears in the top-right corner.](https://docs-assets.developer.apple.com/published/c488c31e39f35c67c9aa88f63a365030/sheets-buttons-placement-cancel-done~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

Avoid showing all three buttons — Cancel, Done, and Back — together.

![An illustration of the top half of a sheet on iPhone. A Back button appears in the top-left corner of the view, and Cancel and Done buttons appear together in the top-right corner.](https://docs-assets.developer.apple.com/published/0b6d8157eb1ec4db7121c2c931ec9aef/sheets-buttons-placement-back-cancel-done-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

## Platform considerations

*No additional considerations for tvOS.*

### iOS, iPadOS

In iOS and iPadOS, for sheets with a single view, the Cancel button belongs on the leading edge of the top toolbar. When present, the Done button belongs on the trailing edge.

![An illustration of the top half of a sheet on iPhone. A Cancel button appears in the top-left corner of the view, and a Done button appears in the top-right corner.](https://docs-assets.developer.apple.com/published/c488c31e39f35c67c9aa88f63a365030/sheets-buttons-placement-cancel-done~dark%402x.png)

For sheets with a multi-step flow, the placement of buttons can vary across steps.

A resizable sheet expands when people scroll its contents or drag the *grabber*, which is a small horizontal indicator that can appear at the top edge of a sheet. Sheets resize according to their *detents*, which are particular heights at which a sheet naturally rests. Designed for iPhone, detents specify particular heights at which a sheet naturally rests. The system defines two detents: *large* is the height of a fully expanded sheet and *medium* is about half of the fully expanded height. Sheets can have one or more custom detent values.

![An illustration showing an iPhone screen in portrait orientation containing a solid rounded rectangle that occupies almost all of the screen, representing a full-screen sheet. A rounded close button appears in the upper-left corner of the sheet.](https://docs-assets.developer.apple.com/published/28a61cd89c1a7caf8eca36ce61d751c7/sheets-large-detent~dark%402x.png)

Large detent

![An illustration showing an iPhone screen in portrait orientation containing a solid rounded rectangle that occupies half of the screen, representing a half-screen sheet. A rounded close button appears in the upper-left corner of the sheet.](https://docs-assets.developer.apple.com/published/d0c2631d555f7dc834ecf98ff862eccd/sheets-medium-detent~dark%402x.png)

Medium detent

Sheets automatically support the large detent. Adding the medium detent allows the sheet to rest at both heights, whereas specifying only medium prevents the sheet from expanding to full height. For developer guidance, see [`detents`](https://developer.apple.com/documentation/UIKit/UISheetPresentationController/detents).

**In an iPhone app, consider supporting the medium detent to allow progressive disclosure of the sheet’s content.** For example, a share sheet displays the most relevant items within the medium detent, where they’re visible without resizing. To view more items, people can scroll or expand the sheet. In contrast, you might not want to support the medium detent if a sheet’s content is more useful when it displays at full height. For example, the compose sheets in Messages and Mail display only at full height to give people enough room to create content.

**Include a grabber in a resizable sheet.** A grabber shows people that they can drag the sheet to resize it; they can also tap it to cycle through the detents. In addition to providing a visual indicator of resizability, a grabber also works with VoiceOver so people can resize the sheet without seeing the screen. For developer guidance, see [`prefersGrabberVisible`](https://developer.apple.com/documentation/UIKit/UISheetPresentationController/prefersGrabberVisible).

**Support swiping to dismiss a sheet.** People expect to swipe vertically to dismiss a sheet instead of tapping a dismiss button. If people have unsaved changes in the sheet when they begin swiping to dismiss it, use an action sheet to let them confirm their action.

**Prefer using the page or form sheet presentation styles in an iPadOS app.** Each style uses a default size for the sheet, centering its content on top of a dimmed background view and providing a consistent experience. For developer guidance, see [`UIModalPresentationStyle`](https://developer.apple.com/documentation/UIKit/UIModalPresentationStyle).

### macOS

In macOS, a sheet is a cardlike view with rounded corners that floats on top of its parent window. The parent window is dimmed while the sheet is onscreen, signaling that people can’t interact with it until they dismiss the sheet. However, people expect to interact with other app windows before dismissing a sheet.

![A screenshot of the Notes app, with the What's New in Notes sheet centered on top of a dimmed Notes document in the background.](https://docs-assets.developer.apple.com/published/20ca98be29c9a0b0a7d79edc6ca29a42/sheets-macos-notes~dark%402x.png)

**Present a sheet in a reasonable default size.** People don’t generally expect to resize sheets, so it’s important to use a size that’s appropriate for the content you display. In some cases, however, people appreciate a resizable sheet — such as when they need to expand the contents for a clearer view — so it’s a good idea to support resizing.

**Let people interact with other app windows without first dismissing a sheet.** When a sheet opens, you bring its parent window to the front — if the parent window is a document window, you also bring forward its modeless document-related panels. When people want to interact with other windows in your app, make sure they can bring those windows forward even if they haven’t dismissed the sheet yet.

**Use a panel instead of a sheet if people need to repeatedly provide input and observe results.** A find and replace panel, for example, might let people initiate replacements individually, so they can observe the result of each search for correctness. For guidance, see [Panels](https://developer.apple.com/design/human-interface-guidelines/panels).

### visionOS

While a sheet is visible in a visionOS app, it floats in front of its parent window, dimming it, and becoming the target of people’s interactions with the app.

[Play](#)

**Avoid displaying a sheet that emerges from the bottom edge of a window.** To help people view the sheet, prefer centering it in their [field of view](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Field-of-view).

**Present a sheet in a default size that helps people retain their context.** Avoid displaying a sheet that covers most or all of its window, but consider letting people resize the sheet if they want.

### watchOS

In watchOS, a sheet is a full-screen view that slides over your app’s current content. The sheet is semitransparent to help maintain the current context, but the system applies a material to the background that blurs and desaturates the covered content.

![A screenshot of a sheet with a primary Action button and a default cancel button on Apple Watch.](https://docs-assets.developer.apple.com/published/e7ccbf2fa71e59c375c0005ffb77e892/sheets-watch-overlay%402x.png)

**Use a sheet only when your modal task requires a custom title or custom content presentation.** If you need to give people important information or present a set of choices, consider using an [alert](https://developer.apple.com/design/human-interface-guidelines/alerts) or [action sheet](https://developer.apple.com/design/human-interface-guidelines/action-sheets).

**Keep sheet interactions brief and occasional.** Use a sheet only as a temporary interruption to the current workflow, and only to facilitate an important task. Avoid using a sheet to help people navigate your app’s content.

**If you change the default label, prefer using SF Symbols to represent the action.** Avoid using a label that might mislead people into thinking that the sheet is part of a hierarchical navigation interface. Also, if the text in the top-leading corner looks like a page or app title, people won’t know how to dismiss the sheet. For guidance, see [Standard icons](https://developer.apple.com/design/human-interface-guidelines/icons#Standard-icons).

![A screenshot that shows a top toolbar with a custom Back button at the top of the screen on Apple Watch.](https://docs-assets.developer.apple.com/published/dcac6924e3fb5c84a977b9e6e39765c8/modal-sheet-watchos-do-not-1%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![A screenshot that shows a top toolbar with a button with the words Page title at the top of the screen on Apple Watch.](https://docs-assets.developer.apple.com/published/ae642c639962d013bd5ca533945541c4/modal-sheet-watchos-do-not-2%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![A screenshot that shows a top toolbar with the default Cancel button at the top of the screen on Apple Watch.](https://docs-assets.developer.apple.com/published/84b92411cfe67d5bb4798a6c3a86cb4c/modal-sheet-watchos-do%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

## Resources

#### Related

[Modality](https://developer.apple.com/design/human-interface-guidelines/modality)

[Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets)

[Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers)

[Panels](https://developer.apple.com/design/human-interface-guidelines/panels)

#### Developer documentation

[`sheet(item:onDismiss:content:)`](https://developer.apple.com/documentation/SwiftUI/View/sheet\(item:onDismiss:content:\)) — SwiftUI

[`UISheetPresentationController`](https://developer.apple.com/documentation/UIKit/UISheetPresentationController) — UIKit

[`presentAsSheet(_:)`](https://developer.apple.com/documentation/AppKit/NSViewController/presentAsSheet\(_:\)) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| March 24, 2026 | Updated guidance for button placement. |
| March 29, 2024 | Added guidance to use form or page sheet styles in iPadOS apps. |
| December 5, 2023 | Recommended using a split view to offer supplementary items in a visionOS app. |
| June 21, 2023 | Updated to include guidance for visionOS. |
| June 5, 2023 | Updated guidance for using sheets in watchOS. |

---
title: "Windows"
source: "https://developer.apple.com/design/human-interface-guidelines/windows"
author:
published:
created: 2026-06-11
description: "A window presents UI views and components in your app or game."
tags:
  - "clippings"
---
![A stylized representation of a window with close, minimize, and full-screen buttons. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/975ba346e0bf72b13571acd9233c90b4/components-window-intro~dark%402x.png)

In iPadOS, macOS, and visionOS, windows help define the visual boundaries of app content and separate it from other areas of the system, and enable multitasking workflows both within and between apps. Windows include system-provided interface elements such as frames and window controls that let people open, close, resize, and relocate them.

Conceptually, apps use two types of windows to display content:

- A *primary* window presents the main navigation and content of an app, and actions associated with them.
- An *auxiliary* window presents a specific task or area in an app. Dedicated to one experience, an auxiliary window doesn’t allow navigation to other app areas, and it typically includes a button people use to close it after completing the task.

For guidance laying out content within a window on any platform, see [Layout](https://developer.apple.com/design/human-interface-guidelines/layout); for guidance laying out content in Apple Vision Pro space, see [Spatial layout](https://developer.apple.com/design/human-interface-guidelines/spatial-layout). For developer guidance, see [Windows](https://developer.apple.com/documentation/SwiftUI/Windows).

## Best practices

**Make sure that your windows adapt fluidly to different sizes to support multitasking and multiwindow workflows.** For guidance, see [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) and [Multitasking](https://developer.apple.com/design/human-interface-guidelines/multitasking).

**Choose the right moment to open a new window.** Opening content in a separate window is great for helping people multitask or preserve context. For example, Mail opens a new window whenever someone selects the Compose action, so both the new message and the existing email are visible at the same time. However, opening new windows excessively creates clutter and can make navigating your app more confusing. Avoid opening new windows as default behavior unless it makes sense for your app.

**Consider providing the option to view content in a new window.** While it’s best to avoid opening new windows as default behavior unless it benefits your user experience, it’s also great to give people the flexibility of viewing content in multiple ways. Consider letting people view content in a new window using a command in a [context menu](https://developer.apple.com/design/human-interface-guidelines/context-menus) or in the [File menu](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#File-menu). For developer guidance, see [`OpenWindowAction`](https://developer.apple.com/documentation/SwiftUI/OpenWindowAction).

**Avoid creating custom window UI.** System-provided windows look and behave in a way that people understand and recognize. Avoid making custom window frames or controls, and don’t try to replicate the system-provided appearance. Doing so without perfectly matching the system’s look and behavior can make your app feel broken.

**Use the term *window* in user-facing content.** The system refers to app windows as *windows* regardless of type. Using different terms — including *scene*, which refers to window implementation — is likely to confuse people.

## Platform considerations

*Not supported in iOS, tvOS, or watchOS.*

### iPadOS

Windows present in one of two ways depending on a person’s choice in Multitasking & Gestures settings.

- **Full screen.** App windows fill the entire screen, and people switch between them — or between multiple windows of the same app — using the app switcher.
- **Windowed.** People can freely resize app windows. Multiple windows can be onscreen at once, and people can reposition them and bring them to the front. The system remembers window size and placement even when an app is closed.

**Make sure window controls don’t overlap toolbar items.** When windowed, app windows include window controls at the leading edge of the toolbar. If your app has toolbar buttons at the leading edge, they might be hidden by window controls when they appear. To prevent this, instead of placing buttons directly on the leading edge, move them inward when the window controls appear.

**Consider letting people use a gesture to open content in a new window.** For example, people can use the pinch gesture to expand a Notes item into a new window. For developer guidance, see [`collectionView(_:sceneActivationConfigurationForItemAt:point:)`](https://developer.apple.com/documentation/UIKit/UICollectionViewDelegate/collectionView\(_:sceneActivationConfigurationForItemAt:point:\)) (to transition from a collection view item), or [`UIWindowScene.ActivationInteraction`](https://developer.apple.com/documentation/UIKit/UIWindowScene/ActivationInteraction) (to transition from an item in any other view).

### macOS

In macOS, people typically run several apps at the same time, often viewing windows from multiple apps on one desktop and switching frequently between different windows — moving, resizing, minimizing, and revealing the windows to suit their work style.

To learn about setting up a window to display your game in macOS, see [Managing your game window for Metal in macOS](https://developer.apple.com/documentation/Metal/managing-your-game-window-for-metal-in-macos).

#### macOS window anatomy

A macOS window consists of a frame and a body area. People can move a window by dragging the frame and can often resize the window by dragging its edges.

The *frame* of a window appears above the body area and can include window controls and a [toolbar](https://developer.apple.com/design/human-interface-guidelines/toolbars). In rare cases, a window can also display a bottom bar, which is a part of the frame that appears below body content.

#### macOS window states

A macOS window can have one of three states:

- **Main.** The frontmost window that people view is an app’s main window. There can be only one main window per app.
- **Key.** Also called the *active window*, the key window accepts people’s input. There can be only one key window onscreen at a time. Although the front app’s main window is usually the key window, another window — such as a panel floating above the main window — might be key instead. People typically click a window to make it key; when people click an app’s Dock icon to bring all of that app’s windows forward, only the most recently accessed window becomes key.
- **Inactive.** A window that’s not in the foreground is an inactive window.

The system gives main, key, and inactive windows different appearances to help people visually identify them. For example, the key window uses color in the title bar options for closing, minimizing, and zooming; inactive windows and main windows that aren’t key use gray in these options. Also, inactive windows don’t use [vibrancy](https://developer.apple.com/design/human-interface-guidelines/materials) (an effect that can pull color into a window from the content underneath it), which makes them appear subdued and seem visually farther away than the main and key windows.

![An illustration of a stack of three windows, as follows: An inactive window in the background, an app’s main window in the middle, and a key window appearing above the other two windows.](https://docs-assets.developer.apple.com/published/74da7c4d746059a35aecb27fb3d2bc1e/window-states~dark%402x.png)

**Make sure custom windows use the system-defined appearances.** People rely on the visual differences between windows to help them identify the foreground window and know which window will accept their input. When you use system-provided components, a window’s background and button appearances update automatically when the window changes state; if you use custom implementations, you need to do this work yourself.

**Avoid putting critical information or actions in a bottom bar, because people often relocate a window in a way that hides its bottom edge.** If you must include one, use it only to display a small amount of information directly related to a window’s contents or to a selected item within it. For example, Finder uses a bottom bar (called the status bar) to display the total number of items in a window, the number of selected items, and how much space is available on the disk. A bottom bar is small, so if you have more information to display, consider using an inspector, which typically presents information on the trailing side of a split view.

### visionOS

visionOS defines two main window styles: default and volumetric. Both a default window (called a *window*) and a volumetric window (called a *volume*) can display 2D and 3D content, and people can view multiple windows and volumes at the same time in both the Shared Space and a Full Space.

![An illustration representing a window in visionOS. The illustration consists of two parallel rounded rectangles, slightly separated and displayed on an angle, positioned above a window bar.](https://docs-assets.developer.apple.com/published/d0742db3f72d007164d5b05fc8c9812b/visionos-window-style-2d-window~dark%402x.png)

A window

![An illustration representing a volume in visionOS. The illustration consists of a translucent cube. The base of the cube is darker than the other sides. The front of the cube is positioned above a window bar.](https://docs-assets.developer.apple.com/published/16bb8c8239e659921d6ff9f8e8366ff7/visionos-window-style-3d-volume~dark%402x.png)

A volume

The system defines the initial position of the first window or volume people open in your app or game. In both the Shared Space and a Full Space, people can move windows and volumes to new locations.

#### visionOS windows

The default window style consists of an upright plane that uses an unmodifiable background [material](https://developer.apple.com/design/human-interface-guidelines/materials) called *glass* and includes a close button, window bar, and resize controls that let people close, move, and resize the window. A window can also include a Share button, [tab bar](https://developer.apple.com/design/human-interface-guidelines/tab-bars), [toolbar](https://developer.apple.com/design/human-interface-guidelines/toolbars), and one or more [ornaments](https://developer.apple.com/design/human-interface-guidelines/ornaments). By default, visionOS uses dynamic [scale](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Scale) to help a window’s size appear to remain consistent regardless of its proximity to the viewer. For developer guidance, see [`DefaultWindowStyle`](https://developer.apple.com/documentation/SwiftUI/DefaultWindowStyle).

![A screenshot of a window for an app named 'Hello World' in visionOS. The window includes text and buttons for entering different experiences.](https://docs-assets.developer.apple.com/published/95650cb19e1930e6b08ca5aa3b5b06a0/visionos-window-2d%402x.png)

A window

**Prefer using a window to present a familiar interface and to support familiar tasks.** Help people feel at home in your app by displaying an interface they’re already comfortable with, reserving more [immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences) for the meaningful content and activities you offer. If you want to showcase bounded 3D content like a game board, consider using a [volume](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS-volumes).

**Retain the window’s glass background.** The default glass background helps your content feel like part of people’s surroundings while adapting dynamically to lighting and using specular reflections and shadows to communicate the window’s scale and position. Removing the glass material tends to cause UI elements and text to become less legible and to no longer appear related to each other; using an opaque background obscures people’s surroundings and can make a window feel constricting and heavy.

**Choose an initial window size that minimizes empty areas within it.** By default, a window measures 1280x720 pt. When a window first opens, the system places it about two meters in front of the wearer, giving it an apparent width of about three meters. Too much empty space inside a window can make it look unnecessarily large while also obscuring other content in people’s space.

**Aim for an initial shape that suits a window’s content.** For example, a default Keynote window is wide because slides are wide, whereas a default Safari window is tall because most webpages are much longer than they are wide. For games, a tower-building game is likely to open in a taller window than a driving game.

**Choose a minimum and maximum size for each window to help keep your content looking great.** People appreciate being able to resize windows as they customize their space, but you need to make sure your layout adjusts well across all sizes. If you don’t set a minimum and maximum size for a window, people could make it so small that UI elements overlap or so large that your app or game becomes unusable. For developer guidance, see [Positioning and sizing windows](https://developer.apple.com/documentation/visionOS/positioning-and-sizing-windows).

![A screenshot of a window for an app in visionOS. The window includes text that discusses objects in orbit, and it includes buttons for viewing a satellite, the moon, and a telescope. The satellite button is selected and a 3D satellite is displayed.](https://docs-assets.developer.apple.com/published/db1e41fe4000281898003f792ff037c8/visionos-window-2d-with-volume%402x.png)

A window containing 3D content

**Minimize the depth of 3D content you display in a window.** The system adds highlights and shadows to the views and controls within a window, giving them the appearance of [depth](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Depth) and helping them feel more substantial, especially when people view the window from an angle. Although you can display 3D content in a window, the system clips it if the content extends too far from the window’s surface. To display 3D content that has greater depth, use a volume.

#### visionOS volumes

You can use a volume to display 2D or 3D content that people can view from any angle. A volume includes window-management controls just like a window, but unlike in a window, a volume’s close button and window bar shift position to face the viewer as they move around the volume. For developer guidance, see [`VolumetricWindowStyle`](https://developer.apple.com/documentation/SwiftUI/VolumetricWindowStyle).

![A screenshot of a volume containing a 3D globe in visionOS, beside a window.](https://docs-assets.developer.apple.com/published/99098a290c36254e48329511216e1d5a/visionos-window-3d%402x.png)

A volume

**Prefer using a volume to display rich, 3D content.** In contrast, if you want to present a familiar, UI-centric interface, it generally works best to use a [window](https://developer.apple.com/design/human-interface-guidelines/windows#visionOS-windows).

**Place 2D content so it looks good from multiple angles.** Because a person’s perspective changes as they move around a volume, the location of 2D content within it might appear to change in ways that don’t make sense. To pin 2D content to specific areas of 3D content inside a volume, you can use an attachment.

**In general, use dynamic scaling.** Dynamic scaling helps a volume’s content remain comfortably legible and easy to interact with, even when it’s far away from the viewer. On the other hand, if you want a volume’s content to represent a real-world object, like a product in a retail app, you can use fixed scaling (this is the default).

**Take advantage of the default baseplate appearance to help people discern the edges of a volume.** In visionOS 2 and later, the system automatically makes a volume’s horizontal “floor,” or *baseplate*, visible by displaying a gentle glow around its border when people look at it. If your content doesn’t fill the volume, the system-provided glow can help people become aware of the volume’s edges, which can be particularly useful in keeping the resize control easy to find. On the other hand, if your content is full bleed or fills the volume’s bounds — or if you display a custom baseplate appearance — you may not want the default glow.

**Consider offering high-value content in an ornament.** In visionOS 2 and later, a volume can include an ornament in addition to a toolbar and tab bar. You can use an ornament to reduce clutter in a volume and elevate important views or controls. When you use an attachment anchor to specify the ornament’s location, such as `topBack` or `bottomFront`, the ornament remains in the same position, relative to the viewer’s perspective, as they move around the volume. Be sure to avoid placing an ornament on the same edge as a toolbar or tab bar, and prefer creating only one additional ornament to avoid overshadowing the important content in your volume. For developer guidance, see [`ornament(visibility:attachmentAnchor:contentAlignment:ornament:)`](https://developer.apple.com/documentation/SwiftUI/View/ornament\(visibility:attachmentAnchor:contentAlignment:ornament:\)).

**Choose an alignment that supports the way people interact with your volume.** As people move a volume, the baseplate can remain parallel to the floor of a person’s surroundings, or it can tilt to match the angle at which a person is looking. In general, a volume that remains parallel to the floor works well for content that people don’t interact with much, whereas a volume that tilts to match where a person is looking can keep content comfortably usable, even when the viewer is reclining.

## Resources

#### Related

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

[Split views](https://developer.apple.com/design/human-interface-guidelines/split-views)

[Multitasking](https://developer.apple.com/design/human-interface-guidelines/multitasking)

#### Developer documentation

[Windows](https://developer.apple.com/documentation/SwiftUI/Windows) — SwiftUI

[`WindowGroup`](https://developer.apple.com/documentation/SwiftUI/WindowGroup) — SwiftUI

[`UIWindow`](https://developer.apple.com/documentation/UIKit/UIWindow) — UIKit

[`NSWindow`](https://developer.apple.com/documentation/AppKit/NSWindow) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 9, 2025 | Added best practices, and updated with guidance for resizable windows in iPadOS. |
| June 10, 2024 | Updated to include guidance for using volumes in visionOS 2 and added game-specific examples. |
| June 21, 2023 | Updated to include guidance for visionOS. |

---

# Section and Input

---
title: "Color wells"
source: "https://developer.apple.com/design/human-interface-guidelines/color-wells"
author:
published:
created: 2026-06-11
description: "A color well lets people adjust the color of text, shapes, guides, and other onscreen elements."
tags:
  - "clippings"
---
![A stylized representation of a color-selection popover extending down from an expanded button. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/ee3511ca745702e7e244edfad9ae4831/components-color-well-intro~dark%402x.png)

A color well displays a color picker when people tap or click it. This color picker can be the system-provided one or a custom interface that you design.

## Best practices

**Consider the system-provided color picker for a familiar experience.** Using the built-in color picker provides a consistent experience, in addition to letting people save a set of colors they can access from any app. The system-defined color picker can also help provide a familiar experience when developing apps across iOS, iPadOS, and macOS.

## Platform considerations

*No additional considerations for iOS, iPadOS, or visionOS. Not supported in tvOS or watchOS.*

### macOS

When people click a color well, it receives a highlight to provide visual confirmation that it’s active. It then opens a color picker so people can choose a color. After they make a selection, the color well updates to show the new color.

Color wells also support drag and drop, so people can drag colors from one color well to another, and from the color picker to a color well.

## Resources

#### Related

#### Developer documentation

[`UIColorWell`](https://developer.apple.com/documentation/UIKit/UIColorWell) — UIKit

[`UIColorPickerViewController`](https://developer.apple.com/documentation/UIKit/UIColorPickerViewController) — UIKit

[`NSColorWell`](https://developer.apple.com/documentation/AppKit/NSColorWell) — AppKit

[Color Programming Topics](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/DrawColor/DrawColor.html)

---
title: "Combo boxes"
source: "https://developer.apple.com/design/human-interface-guidelines/combo-boxes"
author:
published:
created: 2026-06-11
description: "A combo box combines a text field with a pull-down button in a single control."
tags:
  - "clippings"
---
![A stylized representation of a combo box control displaying a list of cities. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/038d50f4709965e5f7339ab9a6ae3082/components-combobox-intro~dark%402x.png)

People can enter a custom value into the field or click the button to choose from a list of predefined values. When people enter a custom value, it’s not added to the list of choices.

## Best practices

**Populate the field with a meaningful default value from the list.** Although the field can be empty by default, it’s best when the default value refers to the hidden choices. The default value doesn’t have to be the first item in the list.

**Use an introductory label to let people know what types of items to expect.** Generally, use title-style capitalization for labels and end them with a colon. For related guidance, see [Labels](https://developer.apple.com/design/human-interface-guidelines/labels).

**Provide relevant choices.** People appreciate the ability to enter a custom value, as well as the convenience of choosing from a list of the most likely choices.

**Make sure list items aren’t wider than the text field.** If an item is too wide, the text field might truncate it, which is hard for people to read.

For guidance, see [Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields) and [Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons).

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields)

[Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

#### Developer documentation

[`NSComboBox`](https://developer.apple.com/documentation/AppKit/NSComboBox) — AppKit

---
title: "Digit entry views"
source: "https://developer.apple.com/design/human-interface-guidelines/digit-entry-views"
author:
published:
created: 2026-06-11
description: "A digit entry view fills the entire screen and prompts people to enter a series of digits, like a PIN, using a digit-specific keyboard."
tags:
  - "clippings"
---
![A stylized representation of an Apple TV five-digit passcode entry screen. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/f5a3d5eb643257d8e1599bf912d29d3f/components-digit-entry-view-intro~dark%402x.png)

You can add an optional title and prompt above the line of digits.

## Best practices

**Use secure digit fields.** Secure digit fields display asterisks instead of the entered digit onscreen. Always use a secure digit field when your app asks for sensitive data.

**Clearly state the purpose of the digit entry view.** Use a title and prompt that explains why someone needs to enter digits.

## Platform considerations

*Not supported in iOS, iPadOS, macOS, visionOS, or watchOS.*

## Resources

#### Related

[Virtual keyboards](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards)

#### Developer documentation

[`TVDigitEntryViewController`](https://developer.apple.com/documentation/TVUIKit/TVDigitEntryViewController) — TVUIKit

---
title: "Image wells"
source: "https://developer.apple.com/design/human-interface-guidelines/image-wells"
author:
published:
created: 2026-06-11
description: "An image well is an editable version of an image view."
tags:
  - "clippings"
---
![A stylized representation of an image well. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/b482d6c2de79190be6890c210644df1e/components-image-well-intro~dark%402x.png)

After selecting an image well, people can copy and paste its image or delete it. People can also drag a new image into an image well without selecting it first.

## Best practices

**Revert to a default image when necessary.** If your image well requires an image, display the default image again if people clear the content of the image well.

**If your image well supports copy and paste, make sure the standard copy and paste menu items are available.** People generally expect to choose these menu items — or use the standard keyboard shortcuts — to interact with an image well. For guidance, see [Edit menu](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Edit-menu).

For related guidance, see [Image views](https://developer.apple.com/design/human-interface-guidelines/image-views).

## Platform considerations

*Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Image views](https://developer.apple.com/design/human-interface-guidelines/image-views)

#### Developer documentation

[`NSImageView`](https://developer.apple.com/documentation/AppKit/NSImageView) — AppKit

---
title: "Pickers"
source: "https://developer.apple.com/design/human-interface-guidelines/pickers"
author:
published:
created: 2026-06-11
description: "A picker displays one or more scrollable lists of distinct values that people can choose from."
tags:
  - "clippings"
---
![A stylized representation of a selected item in a scrollable list. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/2d09e7756ddcb44959b734f46a87b465/components-pickers-intro~dark%402x.png)

The system provides several styles of pickers, each of which offers different types of selectable values and has a different appearance. The exact values shown in a picker, and their order, depend on the device language.

Pickers help people enter information by letting them choose single or multipart values. Date pickers specifically offer additional ways to choose values, like selecting a day in a calendar view or entering dates and times using a numeric keypad.

## Best practices

**Consider using a picker to offer medium-to-long lists of items.** If you need to display a fairly short list of choices, consider using a [pull-down button](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons) instead of a picker. Although a picker makes it easy to scroll quickly through many items, it may add too much visual weight to a short list of items. On the other hand, if you need to present a very large set of items, consider using a [list or table](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables). Lists and tables can adjust in height, and tables can include an index, which makes it much faster to target a section of the list.

**Use predictable and logically ordered values.** Before people interact with a picker, many of its values can be hidden. It’s best when people can predict what the hidden values are, such as with an alphabetized list of countries, so they can move through the items quickly.

**Avoid switching views to show a picker.** A picker works well when displayed in context, below or in proximity to the field people are editing. A picker typically appears at the bottom of a window or in a popover.

**Consider providing less granularity when specifying minutes in a date picker.** By default, a minute list includes 60 values (0 to 59). You can optionally increase the minute interval as long as it divides evenly into 60. For example, you might want quarter-hour intervals (0, 15, 30, and 45).

## Platform considerations

*No additional considerations for visionOS.*

### iOS, iPadOS

A date picker is an efficient interface for selecting a specific date, time, or both, using touch, a keyboard, or a pointing device. You can display a date picker in one of the following styles:

- Compact — A button that displays editable date and time content in a modal view.
- Inline — For time only, a button that displays wheels of values; for dates and times, an inline calendar view.
- Wheels — A set of scrolling wheels that also supports data entry through built-in or external keyboards.
- Automatic — A system-determined style based on the current platform and date picker mode.

A date picker has four modes, each of which presents a different set of selectable values.

- Date — Displays months, days of the month, and years.
- Time — Displays hours, minutes, and (optionally) an AM/PM designation.
- Date and time — Displays dates, hours, minutes, and (optionally) an AM/PM designation.
- Countdown timer — Displays hours and minutes, up to a maximum of 23 hours and 59 minutes. This mode isn’t available in the inline or compact styles.

The exact values shown in a date picker, and their order, depend on the device location.

Here are several examples of date pickers showing different combinations of style and mode.

**Use a compact date picker when space is constrained.** The compact style displays a button that shows the current value in your app’s accent color. When people tap the button, the date picker opens a modal view, providing access to a familiar calendar-style editor and time picker. Within the modal view, people can make multiple edits to dates and times before tapping outside the view to confirm their choices.

### macOS

**Choose a date picker style that suits your app.** There are two styles of date pickers in macOS: textual and graphical. The textual style is useful when you’re working with limited space and you expect people to make specific date and time selections. The graphical style is useful when you want to give people the option of browsing through days in a calendar or selecting a range of dates, or when the look of a clock face is appropriate for your app.

For developer guidance, see [`NSDatePicker`](https://developer.apple.com/documentation/AppKit/NSDatePicker).

### tvOS

Pickers are available in tvOS with SwiftUI. For developer guidance, see [`Picker`](https://developer.apple.com/documentation/SwiftUI/Picker).

### watchOS

Pickers display lists of items that people navigate using the Digital Crown, which helps people manage selections in a precise and engaging way.

A picker can display a list of items using the wheels style. watchOS can also display date and time pickers using the wheels style. For developer guidance, see [`Picker`](https://developer.apple.com/documentation/SwiftUI/Picker) and [`DatePicker`](https://developer.apple.com/documentation/SwiftUI/DatePicker).

![An illustration representing a screen containing a picker view on Apple Watch, showing three items in a list. The center item is highlighted.](https://docs-assets.developer.apple.com/published/00d1eeb88cc503430767c2318605a71d/pickers-wheel-watch%402x.png)

![An illustration representing a screen containing a date picker on Apple Watch, with the day highlighted.](https://docs-assets.developer.apple.com/published/30053c6f5cb2c0246e5ebecbd8ad70c3/pickers-date-watch%402x.png)

![An illustration representing a screen containing a time picker on Apple Watch, with the minutes highlighted.](https://docs-assets.developer.apple.com/published/842ba89f2c3fdb2894949dee31bf8849/pickers-time-watch%402x.png)

You can configure a picker to display an outline, caption, and scrolling indicator.

For longer lists, the navigation link displays the picker as a button. When someone taps the button, the system shows the list of options. The person can also scrub through the options using the Digital Crown without tapping the button. For developer guidance, see [`navigationLink`](https://developer.apple.com/documentation/SwiftUI/PickerStyle/navigationLink).

![An illustration representing a screen that contains a picker button on Apple Watch. The button’s text denotes that the second item is selected.](https://docs-assets.developer.apple.com/published/657d90a59d600e7eee70effde6784e45/pickers-navigation-button-watch%402x.png)

![An illustration representing a screen showing a list of items on Apple Watch. The second item in the list is selected.](https://docs-assets.developer.apple.com/published/1e533809fb6fc291a53fd12ff0ec41f4/pickers-navigation-list-watch%402x.png)

## Resources

#### Related

[Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons)

[Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

#### Developer documentation

[`Picker`](https://developer.apple.com/documentation/SwiftUI/Picker) — SwiftUI

[`UIDatePicker`](https://developer.apple.com/documentation/UIKit/UIDatePicker) — UIKit

[`UIPickerView`](https://developer.apple.com/documentation/UIKit/UIPickerView) — UIKit

[`NSDatePicker`](https://developer.apple.com/documentation/AppKit/NSDatePicker) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 5, 2023 | Updated guidance for using pickers in watchOS. |

---
title: "Segmented controls"
source: "https://developer.apple.com/design/human-interface-guidelines/segmented-controls"
author:
published:
created: 2026-06-11
description: "A segmented control is a linear set of two or more segments, each of which functions as a button."
tags:
  - "clippings"
---
![A stylized representation of a selected segment in a segmented control. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/a5d32745a4d7b570e6e48705bae0e278/components-segmented-control-intro~dark%402x.png)

Within a segmented control, all segments are usually equal in width. Like [buttons](https://developer.apple.com/design/human-interface-guidelines/buttons), segments can contain text or images. Segments can also have text labels beneath them (or beneath the control as a whole).

A segmented control offers a single choice from among a set of options, or in macOS, either a single choice or multiple choices. For example, in macOS Keynote people can select only one segment in the alignment options control to align selected text. In contrast, people can choose multiple segments in the font attributes control to combine styles like bold, italics, and underline. The toolbar of a Keynote window also uses a segmented control to let people show and hide various editing panes within the main window area.

![A partial screenshot of a segmented control that consists of four text-alignment options. The center alignment option is selected.](https://docs-assets.developer.apple.com/published/fab0152e5df77c3bbc68250f1d9035ea/segmented-control-one-choice~dark%402x.png)

Single choice

![A partial screenshot of a segmented control that consists of four font types. Three of the four options are selected.](https://docs-assets.developer.apple.com/published/5d63d44ea5fa83c0a57268e18a319ea8/segmented-control-multiple-choices~dark%402x.png)

Multiple choices

In addition to representing the state of a single or multiple-choice selection, a segmented control can function as a set of buttons that perform actions without showing a selection state. For example, the Reply, Reply all, and Forward buttons in macOS Mail. For developer guidance, see [`isMomentary`](https://developer.apple.com/documentation/UIKit/UISegmentedControl/isMomentary) and [`NSSegmentedControl.SwitchTracking.momentary`](https://developer.apple.com/documentation/AppKit/NSSegmentedControl/SwitchTracking/momentary).

## Best practices

**Use a segmented control to provide closely related choices that affect an object, state, or view.** For example, a segmented control in an inspector could let people choose one or more attributes to apply to a selection, or a segmented control in a toolbar could offer a set of actions to perform on the current view.

![A screenshot of the top half of the Activity screen in the iOS Health app, showing graphs of Move and Exercise activity. The segmented control above the graphs has D selected, indicating that the graphs show one day of activity.](https://docs-assets.developer.apple.com/published/73b3cc2eda1c30adc86efe4be7f9cf37/segmented-controls-activity-charts~dark%402x.png)

In the iOS Health app, a segmented control provides a choice of time ranges for the activity graphs to display.

**Consider a segmented control when it’s important to group functions together, or to clearly show their selection state.** Unlike other button styles, segmented controls preserve their grouping regardless of the view size or where they appear. This grouping can also help people understand at a glance which controls are currently selected.

**Keep control types consistent within a single segmented control.** Don’t assign actions to segments in a control that otherwise represents selection state, and don’t show a selection state for segments in a control that otherwise performs actions.

**Limit the number of segments in a control.** Too many segments can be hard to parse and time-consuming to navigate. Aim for no more than about five to seven segments in a wide interface and no more than about five segments on iPhone.

**In general, keep segment size consistent.** When all segments have equal width, a segmented control feels balanced. To the extent possible, it’s best to keep icon and title widths consistent too.

## Content

**Prefer using either text or images — not a mix of both — in a single segmented control.** Although individual segments can contain text labels or images, mixing the two in a single control can lead to a disconnected and confusing interface.

**As much as possible, use content with a similar size in each segment.** Because all segments typically have equal width, it doesn’t look good if content fills some segments but not others.

**Use nouns or noun phrases for segment labels.** Write text that describes each segment and uses [title-style capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64). A segmented control that displays text labels doesn’t need introductory text.

## Platform considerations

*Not supported in watchOS.*

### iOS, iPadOS

**Consider a segmented control to switch between closely related subviews.** A segmented control can be useful as a way to quickly switch between related subviews. For example, the segmented control in Calendar’s New Event sheet switches between the subviews for creating a new event and a new reminder. For switching between completely separate sections of an app, use a [tab bar](https://developer.apple.com/design/human-interface-guidelines/tab-bars) instead.

![A screenshot of the top half of the iOS Calendar app, showing the New Event sheet. A segmented control provides the ability to switch between adding a new event and a new reminder.](https://docs-assets.developer.apple.com/published/bd9c0e2d051c8000d506df20506dd444/segmented-controls-calendar-new-event~dark%402x.png)

### macOS

**Consider using introductory text to clarify the purpose of a segmented control.** When the control uses symbols or interface icons, you could also add a label below each segment to clarify its meaning. If your app includes tooltips, provide one for each segment in a segmented control.

**Use a tab view in the main window area — instead of a segmented control — for view switching.** A [tab view](https://developer.apple.com/design/human-interface-guidelines/tab-views) supports efficient view switching and is similar in appearance to a [box](https://developer.apple.com/design/human-interface-guidelines/boxes) combined with a segmented control. Consider using a segmented control to help people switch views in a toolbar or inspector pane.

![A screenshot of the macOS Calendar app. The main window area shows a tab view that contains four tabs: Day, Week, Month, and Year. The sidebar shows a segmented control that contains two segments: New and Replied.](https://docs-assets.developer.apple.com/published/cd8046c4120d89a4e5ac498283bfbe82/macos-calendar-tab-view-segmented-control-comparison~dark%402x.png)

**Consider supporting spring loading.** On a Mac equipped with a Magic Trackpad, spring loading lets people activate a segment by dragging selected items over it and force clicking without dropping the selected items. People can also continue dragging the items after a segment activates.

### tvOS

**Consider using a split view instead of a segmented control on screens that perform content filtering.** People generally find it easy to navigate back and forth between content and filtering options using a split view. Depending on its placement, a segmented control may not be as easy to access.

**Avoid putting other focusable elements close to segmented controls.** Segments become selected when focus moves to them, not when people click them. Carefully consider where you position a segmented control relative to other interface elements. If other focusable elements are too close, people might accidentally focus on them when attempting to switch between segments.

### visionOS

When people look at a segmented control that uses icons, the system displays a tooltip that contains the descriptive text you supply.

## Resources

#### Related

[Split views](https://developer.apple.com/design/human-interface-guidelines/split-views)

#### Developer documentation

[`segmented`](https://developer.apple.com/documentation/SwiftUI/PickerStyle/segmented) — SwiftUI

[`UISegmentedControl`](https://developer.apple.com/documentation/UIKit/UISegmentedControl) — UIKit

[`NSSegmentedControl`](https://developer.apple.com/documentation/AppKit/NSSegmentedControl) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 21, 2023 | Updated to include guidance for visionOS. |

---
title: "Sliders"
source: "https://developer.apple.com/design/human-interface-guidelines/sliders"
author:
published:
created: 2026-06-11
description: "A slider is a horizontal track with a control, called a thumb, that people can adjust between a minimum and maximum value."
tags:
  - "clippings"
---
![A stylized representation of a brightness slider. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/8cc1dd25449f5732b1b0e9c74db21cae/components-slider-intro~dark%402x.png)

As a slider’s value changes, the portion of track between the minimum value and the thumb fills with color. A slider can optionally display left and right icons that illustrate the meaning of the minimum and maximum values.

## Best practices

**Customize a slider’s appearance if it adds value.** You can adjust a slider’s appearance — including track color, thumb image and tint color, and left and right icons — to blend with your app’s design and communicate intent. A slider that adjusts image size, for example, could show a small image icon on the left and a large image icon on the right.

**Use familiar slider directions.** People expect the minimum and maximum sides of sliders to be consistent in all apps, with minimum values on the leading side and maximum values on the trailing side (for horizontal sliders) and minimum values at the bottom and maximum values at the top (for vertical sliders). For example, people expect to be able to move a horizontal slider that represents a percentage from 0 percent on the leading side to 100 percent on the trailing side.

**Consider supplementing a slider with a corresponding text field and stepper.** Especially when a slider represents a wide range of values, people may appreciate seeing the exact slider value and having the ability to enter a specific value in a text field. Adding a stepper provides a convenient way for people to increment in whole values. For related guidance, see [Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields) and [Steppers](https://developer.apple.com/design/human-interface-guidelines/steppers).

![An illustration of a horizontal linear slider without tick marks, followed by a text field and a stepper. The thumb is in the center of the slider and the text field displays 50%.](https://docs-assets.developer.apple.com/published/e1543897456bd198f355634d8c103535/sliders-text-field~dark%402x.png)

## Platform considerations

*Not supported in tvOS.*

### iOS, iPadOS

**Don’t use a slider to adjust audio volume.** If you need to provide volume control in your app, use a volume view, which is customizable and includes a volume-level slider and a control for changing the active audio output device. For guidance, see [Playing audio](https://developer.apple.com/design/human-interface-guidelines/playing-audio).

### macOS

Sliders in macOS can also include tick marks, making it easier for people to pinpoint a specific value within the range.

In a linear slider either with or without tick marks, the thumb is a narrow lozenge shape, and the portion of track between the minimum value and the thumb is filled with color. A linear slider often includes supplementary icons that illustrate the meaning of the minimum and maximum values.

In a circular slider, the thumb appears as a small circle. Tick marks, when present, appear as evenly spaced dots around the circumference of the slider.

![An illustration of a horizontal slider with the thumb in the middle. The leading portion of the track up to the thumb is filled with a blue highlight color.](https://docs-assets.developer.apple.com/published/fb4b89668ce4a5b282af76ed6d5fa568/sliders-no-tick-marks~dark%402x.png)

Linear slider without tick marks

![An illustration of a horizontal slider with the thumb between two tick marks in the middle of the slider. The leading portion of the track up to the thumb is filled with a blue highlight color.](https://docs-assets.developer.apple.com/published/fc955deb650229634da5ecf2360877c2/sliders-tick-marks~dark%402x.png)

Linear slider with tick marks

![An illustration of a circular slider with the thumb at the 12 o'clock position.](https://docs-assets.developer.apple.com/published/64bc8bd095576fe6db207a4e81c24ba5/sliders-circular~dark%402x.png)

Circular slider

**Consider giving live feedback as the value of a slider changes.** Live feedback shows people results in real time. For example, your Dock icons are dynamically scaled when adjusting the Size slider in Dock settings.

**Choose a slider style that matches peoples’ expectations.** A horizontal slider is ideal when moving between a fixed starting and ending point. For example, a graphics app might offer a horizontal slider for setting the opacity level of an object between 0 and 100 percent. Use circular sliders when values repeat or continue indefinitely. For example, a graphics app might use a circular slider to adjust the rotation of an object between 0 and 360 degrees. An animation app might use a circular slider to adjust how many times an object spins when animated — four complete rotations equals four spins, or 1440 degrees of rotation.

**Consider using a label to introduce a slider.** Labels generally use [sentence-style capitalization](https://help.apple.com/applestyleguide/#/apsgb744e4a3?sub=apdca93e113f1d64) and end with a colon. For guidance, see [Labels](https://developer.apple.com/design/human-interface-guidelines/labels).

**Use tick marks to increase clarity and accuracy.** Tick marks help people understand the scale of measurements and make it easier to locate specific values.

![A partial screenshot of the Energy Saver settings pane in macOS, cropped to show the slider that controls how long the display remains on after inactivity.](https://docs-assets.developer.apple.com/published/b76418da1283e852c0b5653db61a661d/sliders-labels~dark%402x.png)

**Consider adding labels to tick marks for even greater clarity.** Labels can be numbers or words, depending on the slider’s values. It’s unnecessary to label every tick mark unless doing so is needed to reduce confusion. In many cases, labeling only the minimum and maximum values is sufficient. When the values of the slider are nonlinear, like in the Energy Saver settings pane, periodic labels provide context. It’s also a good idea to provide a [tooltip](https://developer.apple.com/design/human-interface-guidelines/offering-help#macOS-visionOS) that displays the value of the thumb when people hold their pointer over it.

### visionOS

**Prefer horizontal sliders.** It’s generally easier for people to gesture from side to side than up and down.

### watchOS

A slider is a horizontal track — appearing as a set of discrete steps or as a continuous bar — that represents a finite range of values. People can tap buttons on the sides of the slider to increase or decrease its value by a predefined amount.

![An illustration of a watchOS volume slider with discrete steps. The first two of three steps are filled with a green highlight color, indicating the volume level.](https://docs-assets.developer.apple.com/published/3acc4339289d9cf65ec982e73f950f97/sliders-watchos-discrete%402x.png)

Discrete

![An illustration of a watchOS volume slider with a continuous bar. Two-thirds of the bar is filled with a green highlight color, indicating the volume level.](https://docs-assets.developer.apple.com/published/b356f0616bad32afce9ac9e62763414b/sliders-watchos-continuous%402x.png)

Continuous

**If necessary, create custom glyphs to communicate what the slider does.** The system displays plus and minus signs by default.

## Resources

#### Related

[Steppers](https://developer.apple.com/design/human-interface-guidelines/steppers)

[Pickers](https://developer.apple.com/design/human-interface-guidelines/pickers)

#### Developer documentation

[`Slider`](https://developer.apple.com/documentation/SwiftUI/Slider) — SwiftUI

[`UISlider`](https://developer.apple.com/documentation/UIKit/UISlider) — UIKit

[`NSSlider`](https://developer.apple.com/documentation/AppKit/NSSlider) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 21, 2023 | Updated to include guidance for visionOS. |

---
title: "Steppers"
source: "https://developer.apple.com/design/human-interface-guidelines/steppers"
author:
published:
created: 2026-06-11
description: "A stepper is a two-segment control that people use to increase or decrease an incremental value."
tags:
  - "clippings"
---
![A stylized representation of a stepper control. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/c4abe9e9c78bf5a9d45dcec763728ae5/components-stepper-intro~dark%402x.png)

A stepper sits next to a field that displays its current value, because the stepper itself doesn’t display a value.

## Best practices

**Make the value that a stepper affects obvious.** A stepper itself doesn’t display any values, so make sure people know which value they’re changing when they use a stepper.

**Consider pairing a stepper with a text field when large value changes are likely.** Steppers work well by themselves for making small changes that require a few taps or clicks. By contrast, people appreciate the option to use a field to enter specific values, especially when the values they use can vary widely. On a printing screen, for example, it can help to have both a stepper and a text field to set the number of copies.

## Platform considerations

*No additional considerations for iOS, iPadOS, or visionOS. Not supported in watchOS or tvOS.*

### macOS

**For large value ranges, consider supporting Shift-click to change the value quickly.** If your app benefits from larger changes in a stepper’s value, it can be useful to let people Shift-click the stepper to change the value by more than the default increment (by 10 times the default, for example).

## Resources

#### Related

[Pickers](https://developer.apple.com/design/human-interface-guidelines/pickers)

[Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields)

#### Developer documentation

[`UIStepper`](https://developer.apple.com/documentation/UIKit/UIStepper) — UIKit

[`NSStepper`](https://developer.apple.com/documentation/AppKit/NSStepper) — AppKit

---
title: "Text fields"
source: "https://developer.apple.com/design/human-interface-guidelines/text-fields"
author:
published:
created: 2026-06-11
description: "A text field is a rectangular area in which people enter or edit small, specific pieces of text."
tags:
  - "clippings"
---
![A stylized representation of a text field containing a value. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/b4aba3c9ab0964490725d16b9eb127a0/components-text-field-intro~dark%402x.png)

## Best practices

**Use a text field to request a small amount of information, such as a name or an email address.** To let people input larger amounts of text, use a [text view](https://developer.apple.com/design/human-interface-guidelines/text-views) instead.

**Show a hint in a text field to help communicate its purpose.** A text field can contain placeholder text — such as “Email” or “Password” — when there’s no other text in the field. Because placeholder text disappears when people start typing, it can also be useful to include a separate label describing the field to remind people of its purpose.

**Use secure text fields to hide private data.** Always use a secure text field when your app asks for sensitive data, such as a password. For developer guidance, see [`SecureField`](https://developer.apple.com/documentation/SwiftUI/SecureField).

**To the extent possible, match the size of a text field to the quantity of anticipated text.** The size of a text field helps people visually gauge the amount of information to provide.

**Evenly space multiple text fields.** If your layout includes multiple text fields, leave enough space between them so people can easily see which input field belongs with each introductory label. Stack multiple text fields vertically when possible, and use consistent widths to create a more organized layout. For example, the first and last name fields on an address form might be one width, while the address and city fields might be a different width.

**Ensure that tabbing between multiple fields flows as people expect.** When tabbing between fields, move focus in a logical sequence. The system attempts to achieve this result automatically, so you won’t need to customize this too often.

**Validate fields when it makes sense.** For example, if the only legitimate value for a field is a string of digits, your app needs to alert people if they’ve entered characters other than digits. The appropriate time to check the data depends on the context: when entering an email address, it’s best to validate when people switch to another field; when creating a user name or password, validation needs to happen before people switch to another field.

**Use a number formatter to help with numeric data.** A number formatter automatically configures the text field to accept only numeric values. It can also display the value in a specific way, such as with a certain number of decimal places, as a percentage, or as currency. Don’t assume the actual presentation of data, however, as formatting can vary significantly based on people’s locale.

![A partial screenshot of two stacked text fields. The top field contains a number with four decimal places. The bottom field contains a currency value.](https://docs-assets.developer.apple.com/published/902fe7b38f4c951bb51eb14f3efc6ce7/text-fields-formatted-text~dark%402x.png)

Formatted text

**Adjust line breaks according to the needs of the field.** By default, the system clips any text extending beyond the bounds of a text field. Alternatively, you can set up a text field to wrap text to a new line at the character or word level, or to truncate (indicated by an ellipsis) at the beginning, middle, or end.

![A partial screenshot of a text field that contains a sentence that is cut off before its end.](https://docs-assets.developer.apple.com/published/2a67b9846b978096cd5e683a51dba136/text-fields-clipped-text~dark%402x.png)

Clipped text

![A partial screenshot of a text field that contains a sentence that wraps to two lines.](https://docs-assets.developer.apple.com/published/65210740fbf6073a429a7e9fd0952597/text-fields-wrapped-text~dark%402x.png)

Wrapped text

![A partial screenshot of a text field that contains a sentence that includes an ellipsis in place of the last few words.](https://docs-assets.developer.apple.com/published/c8f5250b8c59390006586276ec33f55c/text-fields-truncated-text~dark%402x.png)

Truncated text

**Consider using an expansion tooltip to show the full version of clipped or truncated text.** An expansion tooltip behaves like a regular [tooltip](https://developer.apple.com/design/human-interface-guidelines/offering-help#macOS-visionOS) and appears when someone places the pointer over the field.

**In iOS, iPadOS, tvOS, and visionOS apps, show the appropriate keyboard type.** Several different keyboard types are available, each designed to facilitate a different type of input, such as numbers or URLs. To streamline data entry, display the keyboard that’s appropriate for the type of content people are entering. For guidance, see [Virtual keyboards](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards).

**Minimize text entry in your tvOS and watchOS apps.** Entering long passages of text or filling out numerous text fields is time-consuming on Apple TV and Apple Watch. Minimize text input and consider gathering information more efficiently, such as with buttons.

## Platform considerations

*No additional considerations for tvOS or visionOS.*

### iOS, iPadOS

**Display a Clear button in the trailing end of a text field to help people erase their input.** When this element is present, people can tap it to clear the text field’s contents, without having to keep tapping the Delete key.

**Use images and buttons to provide clarity and functionality in text fields.** You can display custom images in both ends of a text field, or you can add a system-provided button, such as the Bookmarks button. In general, use the leading end of a text field to indicate a field’s purpose and the trailing end to offer additional features, such as bookmarking.

### macOS

**Consider using a combo box if you need to pair text input with a list of choices.** For related guidance, see [Combo boxes](https://developer.apple.com/design/human-interface-guidelines/combo-boxes).

### watchOS

**Present a text field only when necessary.** Whenever possible, prefer displaying a list of options rather than requiring text entry.

## Resources

#### Related

[Text views](https://developer.apple.com/design/human-interface-guidelines/text-views)

[Combo boxes](https://developer.apple.com/design/human-interface-guidelines/combo-boxes)

[Entering data](https://developer.apple.com/design/human-interface-guidelines/entering-data)

#### Developer documentation

[`TextField`](https://developer.apple.com/documentation/SwiftUI/TextField) — SwiftUI

[`SecureField`](https://developer.apple.com/documentation/SwiftUI/SecureField) — SwiftUI

[`UITextField`](https://developer.apple.com/documentation/UIKit/UITextField) — UIKit

[`NSTextField`](https://developer.apple.com/documentation/AppKit/NSTextField) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 5, 2023 | Updated guidance to reflect changes in watchOS 10. |

---
title: "Toggles"
source: "https://developer.apple.com/design/human-interface-guidelines/toggles"
author:
published:
created: 2026-06-11
description: "A toggle lets people choose between a pair of opposing states, like on and off, using a different appearance to indicate each state."
tags:
  - "clippings"
---
![A stylized representation of two labeled switch controls. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/a0eb4713c77c86235ee10666998869a1/components-toggles-intro~dark%402x.png)

A toggle can have various styles, such as switch and checkbox, and different platforms can use these styles in different ways. For guidance, see [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/toggles#Platform-considerations).

In addition to toggles, all platforms also support buttons that behave like toggles by using a different appearance for each state. For developer guidance, see [`ToggleStyle`](https://developer.apple.com/documentation/SwiftUI/ToggleStyle).

## Best practices

**Use a toggle to help people choose between two opposing values that affect the state of content or a view.** A toggle always lets people manage the state of something, so if you need to support other types of actions — such as choosing from a list of items — use a different component, like a [pop-up button](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons).

**Clearly identify the setting, view, or content the toggle affects.** In general, the surrounding context provides enough information for people to understand what they’re turning on or off. In some cases, often in macOS apps, you can also supply a label to describe the state the toggle controls. If you use a button that behaves like a toggle, you generally use an interface icon that communicates its purpose, and you update its appearance — typically by changing the background — based on the current state.

**Make sure the visual differences in a toggle’s state are obvious.** For example, you might add or remove a color fill, show or hide the background shape, or change the inner details you display — like a checkmark or dot — to show that a toggle is on or off. Avoid relying solely on different colors to communicate state, because not everyone can perceive the differences.

## Platform considerations

*No additional considerations for tvOS, visionOS, or watchOS.*

### iOS, iPadOS

**Use the switch toggle style only in a list row.** You don’t need to supply a label in this situation because the content in the row provides the context for the state the switch controls.

**Change the default color of a switch only if necessary.** The default green color tends to work well in most cases, but you might want to use your app’s accent color instead. Be sure to use a color that provides enough contrast with the uncolored appearance to be perceptible.

![An illustration of two list rows, one with an active switch toggle and one with an inactive switch toggle. The active toggle is tinted green with the standard switch color.](https://docs-assets.developer.apple.com/published/2fc92ab8166a3404922e05f595736476/toggles-ios-default-color~dark%402x.png)

Standard switch color

![An illustration of two list rows, one with an active switch toggle and one with an inactive switch toggle. The active toggle is tinted purple with a custom switch color.](https://docs-assets.developer.apple.com/published/0a3569e04c0e9db257cea0e3e82f53b7/toggles-ios-custom-color~dark%402x.png)

Custom switch color

**Outside of a list, use a button that behaves like a toggle, not a switch.** For example, the Phone app uses a toggle on the filter button to let users filter their recent calls. The app adds a blue highlight to indicate when the toggle is active, and removes it when the toggle is inactive.

![A screenshot of the top half of the Phone app on iPhone, showing the filtered list of recent missed calls. The filter button in the top trailing corner has a blue highlight, indicating that the toggle is active.](https://docs-assets.developer.apple.com/published/a6af8c27bc04954a4af5436a9776ffb7/toggles-ios-phone-filter-on~dark%402x.png)

The Phone app uses a toggle to switch between all recent calls and various filter options. When someone chooses a filter, the toggle appears with a custom background drawn behind the symbol.

![A screenshot of the top half of the Phone app on iPhone, showing all recent calls. The filter button in the top trailing corner has no highlight, indicating that the toggle is inactive.](https://docs-assets.developer.apple.com/published/a15157cc0a838d25a394e15fe9a951b6/toggles-ios-phone-filter-off~dark%402x.png)

When someone returns to the main Recents view, the toggle appears without anything behind the symbol.

**Avoid supplying a label that explains the button’s purpose.** The interface icon you create — combined with the alternative background appearances you supply — help people understand what the button does. For developer guidance, see [`changesSelectionAsPrimaryAction`](https://developer.apple.com/documentation/UIKit/UIButton/changesSelectionAsPrimaryAction).

### macOS

In addition to the switch toggle style, macOS supports the checkbox style and also defines radio buttons that can provide similar behaviors.

**Use switches, checkboxes, and radio buttons in the window body, not the window frame.** In particular, avoid using these components in a toolbar or status bar.

#### Switches

**Prefer a switch for settings that you want to emphasize.** A switch has more visual weight than a checkbox, so it looks better when it controls more functionality than a checkbox typically does. For example, you might use a switch to let people turn on or off a group of settings, instead of just one setting. For developer guidance, see [`switch`](https://developer.apple.com/documentation/SwiftUI/ToggleStyle/switch).

**Within a grouped form, consider using a mini switch to control the setting in a single row.** The height of a mini switch is similar to the height of buttons and other controls, resulting in rows that have a consistent height. If you need to present a hierarchy of settings within a grouped form, you can use a regular switch for the primary setting and mini switches for the subordinate settings. For developer guidance, see [`GroupedFormStyle`](https://developer.apple.com/documentation/SwiftUI/GroupedFormStyle) and [`ControlSize`](https://developer.apple.com/documentation/SwiftUI/ControlSize).

**In general, don’t replace a checkbox with a switch.** If you’re already using a checkbox in your interface, it’s probably best to keep using it.

#### Checkboxes

A checkbox is a small, square button that’s empty when the button is off, contains a checkmark when the button is on, and can contain a dash when the button’s state is mixed. Typically, a checkbox includes a title on its trailing side. In an editable checklist, a checkbox can appear without a title or any additional content.

**Use a checkbox instead of a switch if you need to present a hierarchy of settings.** The visual style of checkboxes helps them align well and communicate grouping. By using alignment — generally along the leading edge of the checkboxes — and indentation, you can show dependencies, such as when the state of a checkbox governs the state of subordinate checkboxes.

![An illustration showing a layout that includes two levels of checkboxes.](https://docs-assets.developer.apple.com/published/27324367d906f399ebd074034b311079/checkbox-alignment~dark%402x.png)

**Consider using radio buttons if you need to present a set of more than two mutually exclusive options.** When people need to choose from options in addition to just “on” or “off,” using multiple radio buttons can help you clarify each option with a unique label.

**Consider using a label to introduce a group of checkboxes if their relationship isn’t clear.** Describe the set of options, and align the label’s baseline with the first checkbox in the group.

**Accurately reflect a checkbox’s state in its appearance.** A checkbox’s state can be on, off, or mixed. If you use a checkbox to globally turn on and off multiple subordinate checkboxes, show a mixed state when the subordinate checkboxes have different states. For example, you might need to present a text-style setting that turns all styles on or off, but also lets people choose a subset of individual style settings like bold, italic, or underline. For developer guidance, see [`allowsMixedState`](https://developer.apple.com/documentation/AppKit/NSButton/allowsMixedState).

![An illustration that shows a checkbox with the on state, which looks like a small rounded square with blue fill and a white checkmark.](https://docs-assets.developer.apple.com/published/52fcbf62b6a962df44200a69c612f3bc/checkbox-selected~dark%402x.png)

On

![An illustration that shows a checkbox with the off state, which looks like a small rounded square with no fill.](https://docs-assets.developer.apple.com/published/00f9322ccb3a90a46680c6e0b242597f/checkbox-deselected~dark%402x.png)

Off

![An illustration that shows a checkbox with the mixed state, which looks like a small rounded square with blue fill and a white hyphen.](https://docs-assets.developer.apple.com/published/c29ff17d2cbfb3c5e6ea4871eecbb6bd/checkbox-mixed~dark%402x.png)

Mixed

#### Radio buttons

A radio button is a small, circular button followed by a label. Typically displayed in groups of two to five, radio buttons present a set of mutually exclusive choices.

![An illustration that shows five items in a column, each with a radio button preceding the text Radio Button Label. The radio button for the third item is filled, indicating that it's selected.](https://docs-assets.developer.apple.com/published/0603db82f9b0537217e3a61f8af64425/radio-button-example~dark%402x.png)

A radio button’s state is either selected (a filled circle) or deselected (an empty circle). Although a radio button can also display a mixed state (indicated by a dash), this state is rarely useful because you can communicate multiple states by using additional radio buttons. If you need to show that a setting or item has a mixed state, consider using a checkbox instead.

![An illustration that shows a selected radio button, which looks like a white dot centered in a small circle with a dark fill.](https://docs-assets.developer.apple.com/published/6228ec3ea73d86fc7691b42da5381b7f/radio-button-selected~dark%402x.png)

Selected

![An illustration that shows a deselected radio button, which looks like a small, empty circle.](https://docs-assets.developer.apple.com/published/8fe86abdfb9e3c65310251cc1f59ac7e/radio-button-deselected~dark%402x.png)

Deselected

**Prefer a set of radio buttons to present mutually exclusive options.** If you need to let people choose multiple options in a set, use checkboxes instead.

**Avoid listing too many radio buttons in a set.** A long list of radio buttons takes up a lot of space in the interface and can be overwhelming. If you need to present more than about five options, consider using a component like a [pop-up button](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons) instead.

**To present a single setting that can be on or off, prefer a checkbox.** Although a single radio button can also turn something on or off, the presence or absence of the checkmark in a checkbox can make the current state easier to understand at a glance. In rare cases where a single checkbox doesn’t clearly communicate the opposing states, you can use a pair of radio buttons, each with a label that specifies the state it controls.

**Use consistent spacing when you display radio buttons horizontally.** Measure the space needed to accommodate the longest button label, and use that measurement consistently.

![An illustration that shows three items in a row, with a radio button preceding each item. The first and third items have long text labels, while the second has a short label. The horizontal space each item occupies is equal. A filled radio button precedes the second item, indicating that it's selected.](https://docs-assets.developer.apple.com/published/8a7d4ee357c029311bc86179c8eefa32/radio-button-equal-spacing~dark%402x.png)

## Resources

#### Related

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[`Toggle`](https://developer.apple.com/documentation/SwiftUI/Toggle) — SwiftUI

[`UISwitch`](https://developer.apple.com/documentation/UIKit/UISwitch) — UIKit

[`NSButton.ButtonType.toggle`](https://developer.apple.com/documentation/AppKit/NSButton/ButtonType/toggle) — AppKit

[`NSSwitch`](https://developer.apple.com/documentation/AppKit/NSSwitch) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| March 29, 2024 | Enhanced guidance for using switches in macOS apps, clarified when a checkbox has a title, and added artwork for radio buttons. |
| September 12, 2023 | Updated artwork. |


---
title: "Virtual keyboards"
source: "https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards"
author:
published:
created: 2026-06-11
description: "On devices without physical keyboards, the system offers various types of virtual keyboards people can use to enter data."
tags:
  - "clippings"
---
![A stylized representation of a numeric keypad shown on top of a grid that suggests the canvas of a design tool. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/65ca442a9f6aba87be3e69a71aec88de/components-virtual-keyboard-intro~dark%402x.png)

A virtual keyboard can provide a specific set of keys that are optimized for the current task; for example, a keyboard that supports entering email addresses can include the “@” character and a period or even “.com”. A virtual keyboard doesn’t support keyboard shortcuts.

When it makes sense in your app, you can replace the system-provided keyboard with a custom view that supports app-specific data entry. In iOS, iPadOS, and tvOS, you can also create an app extension that offers a custom keyboard people can install and use in place of the standard keyboard.

## Best practices

**Choose a keyboard that matches the type of content people are editing.** For example, you can help people enter numeric data by providing the numbers and punctuation keyboard. When you specify a semantic meaning for a text input area, the system can automatically provide a keyboard that matches the type of input you expect, potentially using this information to refine the keyboard corrections it offers. For developer guidance, see [`keyboardType(_:)`](https://developer.apple.com/documentation/SwiftUI/View/keyboardType\(_:\)) (SwiftUI), [`textContentType(_:)`](https://developer.apple.com/documentation/SwiftUI/View/textContentType\(_:\)) (SwiftUI), [`UIKeyboardType`](https://developer.apple.com/documentation/UIKit/UIKeyboardType) (UIKit), and [`UITextContentType`](https://developer.apple.com/documentation/UIKit/UITextContentType) (UIKit).

**Consider customizing the Return key type if it helps clarify the text-entry experience.** The Return key type is based on the keyboard type you choose, but you can change this if it makes sense in your app. For example, if your app initiates a search, you can use a search Return key type rather than the standard one so the experience is consistent with other places people initiate search. For developer guidance, see [`submitLabel(_:)`](https://developer.apple.com/documentation/SwiftUI/View/submitLabel\(_:\)) (SwiftUI) and [`UIReturnKeyType`](https://developer.apple.com/documentation/UIKit/UIReturnKeyType) (UIKit).

## Custom input views

In some cases, you can create an *input view* if you want to provide custom functionality that enhances data-entry tasks in your app. For example, Numbers provides a custom input view for entering numeric values while editing a spreadsheet. A custom input view replaces the system-provided keyboard while people are in your app. For developer guidance, see [`ToolbarItemPlacement`](https://developer.apple.com/documentation/SwiftUI/ToolbarItemPlacement) (SwiftUI) and [`inputViewController`](https://developer.apple.com/documentation/UIKit/UIResponder/inputViewController) (UIKit).

**Make sure your custom input view makes sense in the context of your app.** In addition to making data entry simple and intuitive, you want people to understand the benefits of using your custom input view. Otherwise, they may wonder why they can’t regain the system keyboard while in your app.

**Play the standard keyboard sound while people type.** The keyboard sound provides familiar feedback when people tap a key on the system keyboard, so they’re likely to expect the same sound when they tap keys in your custom input view. People can turn keyboard sounds off for all keyboard interactions in Settings > Sounds. For developer guidance, see [`playInputClick()`](https://developer.apple.com/documentation/UIKit/UIDevice/playInputClick\(\)) (UIKit).

## Custom keyboards

In iOS, iPadOS, and tvOS, you can provide a custom keyboard that replaces the system keyboard by creating an app extension. An *app extension* is code you provide that people can install and use to extend the functionality of a specific area of the system; to learn more, see [App extensions](https://developer.apple.com/app-extensions/).

After people choose your custom keyboard in Settings, they can use it for text entry within any app, except when editing secure text fields and phone number fields. People can choose multiple custom keyboards and switch between them at any time. For developer guidance, see [Creating a custom keyboard](https://developer.apple.com/documentation/UIKit/creating-a-custom-keyboard).

Custom keyboards make sense when you want to expose unique keyboard functionality systemwide, such as a novel way of inputting text or the ability to type in a language the system doesn’t support. If you want to provide a custom keyboard for people to use only while they’re in your app, consider creating a custom input view instead.

**Provide an obvious and easy way to switch between keyboards.** People know that the Globe key on the standard keyboard — which replaces the dedicated Emoji key when multiple keyboards are available — quickly switches to other keyboards, and they expect a similarly intuitive experience in your keyboard.

**Avoid duplicating system-provided keyboard features.** On some devices, the Emoji/Globe key and Dictation key automatically appear beneath the keyboard, even when people are using custom keyboards. Your app can’t affect these keys, and it’s likely to be confusing if you repeat them in your keyboard.

**Consider providing a keyboard tutorial in your app.** People are used to the standard keyboard, and learning how to use a new keyboard can take time. You can help make the process easier by providing usage instructions in your app — for example, you might tell people how to choose your keyboard, activate it during text entry, use it, and switch back to the standard keyboard. Avoid displaying help content within the keyboard itself.

## Platform considerations

*Not supported in macOS.*

### iOS, iPadOS

**Use the keyboard layout guide to make the keyboard feel like an integrated part of your interface.** Using the layout guide also helps you keep important parts of your interface visible while the virtual keyboard is onscreen. For developer guidance, see [Adjusting your layout with keyboard layout guide](https://developer.apple.com/documentation/UIKit/adjusting-your-layout-with-keyboard-layout-guide).

![An illustration of an app layout on iPhone, showing two stacked text fields and a button above the keyboard.](https://docs-assets.developer.apple.com/published/09fa04a122799858c64ba194df502eff/ui-fully-visible~dark%402x.png)

![A checkmark in a circle to indicate a correct example.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

The keyboard layout guide helps ensure that app UI and the keyboard work well together.

![An illustration of an app layout on iPhone, showing two stacked text fields. The keyboard covers part of the bottom text field.](https://docs-assets.developer.apple.com/published/28b9f0b86fd6e7473b1c899521a6ea96/text-field-hidden~dark%402x.png)

![An X in a circle to indicate an incorrect example.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

Without the layout guide, the keyboard could make entering text more difficult.

![An illustration of an app layout on iPhone, showing two stacked text fields and a button above the keyboard. The keyboard covers part of the button.](https://docs-assets.developer.apple.com/published/6a6c76a832db21dfe2adb0626963cde2/button-hidden~dark%402x.png)

![An X in a circle to indicate an incorrect example.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

Without the layout guide, the keyboard could make tapping a button more difficult.

**Place custom controls above the keyboard thoughtfully.** Some apps position an input accessory view containing custom controls above the keyboard to offer app-specific functionality related to the data people are working with. For example, Numbers displays controls that help people apply standard or custom calculations to spreadsheet data. If your app offers custom controls that augment the keyboard, make sure they’re relevant to the current task. If other views in your app use Liquid Glass, or if your view looks out of place above the keyboard, apply Liquid Glass to the view that contains your controls to maintain consistency. If you use a standard toolbar to contain your controls, it automatically adopts Liquid Glass. Use the keyboard layout guide and standard padding to ensure the system positions your controls as expected within the view. For developer guidance, see [`ToolbarItemPlacement`](https://developer.apple.com/documentation/SwiftUI/ToolbarItemPlacement) (SwiftUI), [`inputAccessoryView`](https://developer.apple.com/documentation/UIKit/UIResponder/inputAccessoryView) (UIKit), and [`UIKeyboardLayoutGuide`](https://developer.apple.com/documentation/UIKit/UIKeyboardLayoutGuide) (UIKit).

### tvOS

tvOS displays a linear virtual keyboard when people select a text field using the Siri Remote.

When people activate a digit entry view, tvOS displays a digit-specific keyboard. For guidance, see [Digit entry views](https://developer.apple.com/design/human-interface-guidelines/digit-entry-views).

### visionOS

In visionOS, the system-provided virtual keyboard supports both direct and indirect gestures and appears in a separate window that people can move where they want. You don’t need to account for the location of the keyboard in your layouts.

<video width="1920" controls=""><source src="https://docs-assets.developer.apple.com/published/3c8aebece31aa29aa80653d9e1e342e0/visionos-virtual-keyboard.mp4"></video> [Play](#)

### watchOS

On Apple Watch, a text field can show a keyboard if the device screen is large enough. Otherwise, the system lets people use dictation or Scribble to enter information. You can’t change the keyboard type in watchOS, but you can set the content type of the text field. The system uses this information to make text entry easier, such as by offering suggestions. For developer guidance, see [`textContentType(_:)`](https://developer.apple.com/documentation/SwiftUI/View/textContentType\(_:\)) (SwiftUI).

People can also use a nearby paired iPhone to enter text on Apple Watch.

## Resources

#### Related

[Entering data](https://developer.apple.com/design/human-interface-guidelines/entering-data)

[Keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards)

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[`keyboardType(_:)`](https://developer.apple.com/documentation/SwiftUI/View/keyboardType\(_:\)) — SwiftUI

[`textContentType(_:)`](https://developer.apple.com/documentation/SwiftUI/View/textContentType\(_:\)) — SwiftUI

[`UIKeyboardType`](https://developer.apple.com/documentation/UIKit/UIKeyboardType) — UIKit

## Change log

| Date | Changes |
| --- | --- |
| June 9, 2025 | Added guidance for displaying custom controls above the keyboard, and updated to reflect virtual keyboard availability in watchOS. |
| February 2, 2024 | Clarified the virtual keyboard’s support for direct and indirect gestures in visionOS. |
| December 5, 2023 | Added artwork for visionOS. |
| June 21, 2023 | Changed page title from Onscreen keyboards and updated to include guidance for visionOS. |


---


# Status

---
title: "Activity rings"
source: "https://developer.apple.com/design/human-interface-guidelines/activity-rings"
author:
published:
created: 2026-06-11
description: "Activity rings show an individual’s daily progress toward Move, Exercise, and Stand goals."
tags:
  - "clippings"
---
![A stylized representation of a set of move, exercise, and stand activity rings denoting progress. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/a4e9350cdde57b85e3a794556fb749e2/components-activity-ring-intro~dark%402x.png)

In watchOS, the Activity ring element always contains three rings, whose colors and meanings match those the Activity app provides. In iOS, the Activity ring element contains either a single Move ring representing an approximation of activity, or all three rings if an Apple Watch is paired.

## Best practices

**Display Activity rings when they’re relevant to the purpose of your app.** If your app is related to health or fitness, and especially if it contributes information to HealthKit, people generally expect to find Activity rings in your interface. For example, if you structure a workout or health session around the completion of Activity rings, consider displaying the element on a workout metrics screen so that people can track their progress during their session. Similarly, if you provide a summary screen that appears at the conclusion of a workout, you could display Activity rings to help people check on their progress toward their daily goals.

![A screenshot of an in-progress workout screen that displays the current timer value, followed by a list of the current Move, Exercise, and Stand values. The screen also displays an image of the Activity rings, where the state of each ring represents the current value.](https://docs-assets.developer.apple.com/published/868194b00a492b5d029cb3737ee7c7b9/activity-rings-summary%402x.png)

**Use Activity rings only to show Move, Exercise, and Stand information.** Activity rings are designed to consistently represent progress in these specific areas. Don’t replicate or modify Activity rings for other purposes. Never use Activity rings to display other types of data. Never show Move, Exercise, and Stand progress in another ring-like element.

**Use Activity rings to show progress for a single person.** Never use Activity rings to represent data for more than one person, and make sure it’s obvious whose progress you’re showing by using a label, a photo, or an avatar.

**Always keep the visual appearance of Activity rings the same, regardless of where you display them.** Follow these guidelines to provide a consistent experience:

- Never change the colors of the rings; for example, don’t use filters or modify opacity.
- Always display Activity rings on a black background.
- Prefer enclosing the rings and background within a circle. To do this, adjust the corner radius of the enclosing view rather than applying a circular mask.
- Ensure that the black background remains visible around the outermost ring. If necessary, add a thin, black stroke around the outer edge of the ring, and avoid including a gradient, shadow, or any other visual effect.
- Always scale the rings appropriately so they don’t seem disconnected or out of place.
- When necessary, design the surrounding interface to blend with the rings; never change the rings to blend with the surrounding interface.

**To display a label or value that’s directly associated with an Activity ring, use the colors that match it.** To display the ring-specific labels *Move*, *Exercise*, and *Stand*, or to display a person’s current and goal values for each ring, use the following colors, specified as RGB values.

| Move | Exercise | Stand |
| --- | --- | --- |
| ![R-250,G-17,B-79](https://docs-assets.developer.apple.com/published/ccc83e73658e27cc5159061e37d67051/activity-rings-color-swatch-red~dark%402x.png) | ![R-166,G-255,B-0](https://docs-assets.developer.apple.com/published/e84f5b0a57e0d447a4314ad13bb82b69/activity-rings-color-swatch-green~dark%402x.png) | ![R-0,G-255,B-246](https://docs-assets.developer.apple.com/published/5b990c29bd06cd5960207482fe48ff9b/activity-rings-color-swatch-blue~dark%402x.png) |

**Maintain Activity ring margins.** An Activity ring element must include a minimum outer margin of no less than the distance between rings. Never allow other elements to crop, obstruct, or encroach upon this margin or the rings themselves.

**Differentiate other ring-like elements from Activity rings.** Mixing different ring styles can lead to a visually confusing interface. If you must include other rings, use padding, lines, or labels to separate them from Activity rings. Color and scale can also help provide visual separation.

**Don’t send notifications that repeat the same information the Activity app sends.** The system already delivers Move, Exercise, and Stand progress updates, so it’s confusing for people to receive redundant information from your app. Also, don’t show an Activity ring element in your app’s notifications. It’s fine to reference Activity progress in a notification, but do so in a way that’s unique to your app and doesn’t replicate the same information the system provides.

**Don’t use Activity rings for decoration.** Activity rings provide information to people; they don’t just embellish your app’s design. Never display Activity rings in labels or background graphics.

**Don’t use Activity rings for branding.** Use Activity rings strictly to display Activity progress in your app. Never use Activity rings in your app’s icon or marketing materials.

## Platform considerations

*No additional considerations for iPadOS or watchOS. Not supported in macOS, tvOS, or visionOS.*

### iOS

Activity rings are available in iOS with [`HKActivityRingView`](https://developer.apple.com/documentation/HealthKitUI/HKActivityRingView). The appearance of the Activity ring element changes automatically depending on whether an Apple Watch is paired:

- With an Apple Watch paired, iOS shows all three Activity rings.
- Without an Apple Watch paired, iOS shows the Move ring only, which represents an approximation of a person’s activity based on their steps and workout information from other apps.

![A screenshot of the Activity summary in the iOS Fitness app with Apple Watch paired. All three Activity rings are displayed.](https://docs-assets.developer.apple.com/published/eab44acde68216f8cbace4a59594b7b6/activity-rings-watch-paired%402x.png)

Apple Watch paired

![A screenshot of the Activity summary in the iOS Fitness app with no Apple Watch paired. Only the Move ring is displayed.](https://docs-assets.developer.apple.com/published/ef6b2bf87ac8e2917dae8283236c2965/activity-rings-no-watch-paired%402x.png)

No Apple Watch paired

Because iOS shows Activity rings whether or not an Apple Watch is paired, activity history can include a combination of both styles. For example, Activity rings in Fitness have three rings when a person exercises with their Apple Watch paired, and only the Move ring when they exercise without their Apple Watch.

## Resources

#### Related

[Workouts](https://developer.apple.com/design/human-interface-guidelines/workouts)

#### Developer documentation

[`HKActivityRingView`](https://developer.apple.com/documentation/HealthKitUI/HKActivityRingView) — HealthKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| March 29, 2024 | Enhanced guidance for displaying Activity rings and listed specific colors for displaying related content. |
| December 5, 2023 | Added artwork representing Activity rings in iOS. |

---
title: "Gauges"
source: "https://developer.apple.com/design/human-interface-guidelines/gauges"
author:
published:
created: 2026-06-11
description: "A gauge displays a specific numerical value within a range of values."
tags:
  - "clippings"
---
![A stylized representation of a circular numeric gauge above a linear percentage gauge. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/e11c37d9383e457f6f6ac510db66a257/components-gauges-intro~dark%402x.png)

In addition to indicating the current value in a range, a gauge can provide more context about the range itself. For example, a temperature gauge can use text to identify the highest and lowest temperatures in the range and display a spectrum of colors that visually reinforce the changing values.

## Anatomy

A gauge uses a circular or linear path to represent a range of values, mapping the current value to a specific point on the path. A standard gauge displays an indicator that shows the current value’s location; a gauge that uses the capacity style displays a fill that stops at the value’s location on the path.

Circular and linear gauges in both standard and capacity styles are also available in a variant that’s visually similar to watchOS complications. This variant — called accessory — works well in iOS Lock Screen widgets and anywhere you want to echo the appearance of complications.

## Best practices

**Write succinct labels that describe the current value and both endpoints of the range.** Although not every gauge style displays all labels, VoiceOver reads the visible labels to help people understand the gauge without seeing the screen.

**Consider filling the path with a gradient to help communicate the purpose of the gauge.** For example, a temperature gauge might use colors that range from red to blue to represent temperatures that range from hot to cold.

## Platform considerations

*No additional considerations for iOS, iPadOS, visionOS, or watchOS. Not supported in tvOS.*

### macOS

In addition to supporting gauges, macOS also defines a level indicator that displays a specific numerical value within a range. You can configure a level indicator to convey capacity, rating, or — rarely — relevance.

The capacity style can depict discrete or continuous values.

![An image of a continuous capacity indicator that uses the default green fill to indicate an amount of about two-thirds of the total capacity.](https://docs-assets.developer.apple.com/published/5b1ce5ce24fb7f819874616ea54c65eb/indicators-continuous~dark%402x.png)

**Continuous.** A horizontal translucent track that fills with a solid bar to indicate the current value.

![An image of a discrete capacity indicator that uses the default green fill to indicate an amount of three-quarters of the total capacity.](https://docs-assets.developer.apple.com/published/34f67e956ecd1cce97f01db966674bed/indicators-discrete~dark%402x.png)

**Discrete.** A horizontal row of separate, equally sized, rectangular segments. The number of segments matches the total capacity, and the segments fill completely — never partially — with color to indicate the current value.

**Consider using the continuous style for large ranges.** A large value range can make the segments of a discrete capacity indicator too small to be useful.

**Consider changing the fill color to inform people about significant parts of the range.** By default, the fill color for both capacity indicator styles is green. If it makes sense in your app, you can change the fill color when the current value reaches certain levels, such as very low, very high, or just past the middle. You can change the fill color of the entire indicator or you can use the tiered state to show a sequence of several colors in one indicator, as shown below.

![An image of a continuous capacity indicator in which the leftmost one-eigth is red, the next three-eighths are yellow, the next one-fourth is green, and the last one-fourth is unfilled.](https://docs-assets.developer.apple.com/published/9eba02983632023ecedb41ed55429d49/indicators-continuous-tiered~dark%402x.png)

Tiered level appearance

For guidance using the rating style to help people rank something, see [Rating indicators](https://developer.apple.com/design/human-interface-guidelines/rating-indicators).

Although rarely used, the relevance style can communicate relevancy using a shaded horizontal bar. For example, a relevance indicator might appear in a list of search results, helping people visualize the relevancy of the results when sorting or comparing multiple items.

## Resources

#### Related

[Ratings and reviews](https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews)

#### Developer documentation

[`Gauge`](https://developer.apple.com/documentation/SwiftUI/Gauge) — SwiftUI

[`NSLevelIndicator`](https://developer.apple.com/documentation/AppKit/NSLevelIndicator) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| September 23, 2022 | New page. |


---
title: "Progress indicators"
source: "https://developer.apple.com/design/human-interface-guidelines/progress-indicators"
author:
published:
created: 2026-06-11
description: "Progress indicators let people know that your app isn’t stalled while it loads content or performs lengthy operations."
tags:
  - "clippings"
---
![A stylized representation of a spinning indeterminate activity indicator above a progress bar. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/a10a0246c422e48f019bb2c5c2d17391/components-progress-indicators-intro~dark%402x.png)

Some progress indicators also give people a way to estimate how long they have to wait for something to complete. All progress indicators are transient, appearing only while an operation is ongoing and disappearing after it completes.

Because the duration of an operation is either known or unknown, there are two types of progress indicators:

- *Determinate*, for a task with a well-defined duration, such as a file conversion
- *Indeterminate*, for unquantifiable tasks, such as loading or synchronizing complex data

Both determinate and indeterminate progress indicators can have different appearances depending on the platform. A determinate progress indicator shows the progress of a task by filling a linear or circular track as the task completes. *Progress bars* include a track that fills from the leading side to the trailing side. *Circular progress indicators* have a track that fills in a clockwise direction.

![An image of a horizontal progress bar in macOS filled almost to the midpoint with solid color.](https://docs-assets.developer.apple.com/published/823ee6ef5f12751e2ae349e5543c1968/progress-indicator-determinate-bar~dark%402x.png)

Progress bar

![An image of a circular progress indicator in macOS filled almost to the eight o'clock position with solid color.](https://docs-assets.developer.apple.com/published/aae692e04d47dc5ba8063237adfac393/progress-indicator-determinate-circle~dark%402x.png)

Circular progress indicator

An indeterminate progress indicator — also called an *activity indicator* — uses an animated image to indicate progress. All platforms support a circular image that appears to spin; however, macOS also supports an indeterminate progress bar.

![An image of a spinning, circular activity indicator in macOS.](https://docs-assets.developer.apple.com/published/2648f9c9c61eba58ca3ae1faf5f80640/progress-indicator-intermediate-spinner~dark%402x.png)

macOS

![An image of a spinning activity indicator in watchOS.](https://docs-assets.developer.apple.com/published/02a8427a04f946d9b80d2907f84ab365/activity-indicators-watch%402x.png)

watchOS

For developer guidance, see [`ProgressView`](https://developer.apple.com/documentation/SwiftUI/ProgressView).

## Best practices

**When possible, use a determinate progress indicator.** An indeterminate progress indicator shows that a process is occurring, but it doesn’t help people estimate how long a task will take. A determinate progress indicator can help people decide whether to do something else while waiting for the task to complete, restart the task at a different time, or abandon the task.

**Be as accurate as possible when reporting advancement in a determinate progress indicator.** Consider evening out the pace of advancement to help people feel confident about the time needed for the task to complete. Showing 90 percent completion in five seconds and the last 10 percent in 5 minutes can make people wonder if your app is still working and can even feel deceptive.

**Keep progress indicators moving so people know something is continuing to happen.** People tend to associate a stationary indicator with a stalled process or a frozen app. If a process stalls for some reason, provide feedback that helps people understand the problem and what they can do about it.

**When possible, switch a progress bar from indeterminate to determinate.** If an indeterminate process reaches a point where you can determine its duration, switch to a determinate progress bar. People generally prefer a determinate progress indicator, because it helps them gauge what’s happening and how long it will take.

**Don’t switch from the circular style to the bar style.** Activity indicators (also called *spinners*) and progress bars are different shapes and sizes, so transitioning between them can disrupt your interface and confuse people.

**If it’s helpful, display a description that provides additional context for the task.** Be accurate and succinct. Avoid vague terms like *loading* or *authenticating* because they seldom add value.

**Display a progress indicator in a consistent location.** Choosing a consistent location for a progress indicator helps people reliably find the status of an operation across platforms or within or between apps.

**When it’s feasible, let people halt processing.** If people can interrupt a process without causing negative side effects, include a Cancel button. If interrupting the process might cause negative side effects — such as losing the downloaded portion of a file — it can be useful to provide a Pause button in addition to a Cancel button.

**Let people know when halting a process has a negative consequence.** When canceling a process results in lost progress, it’s helpful to provide an [alert](https://developer.apple.com/design/human-interface-guidelines/alerts) that includes an option to confirm the cancellation or resume the process.

## Platform considerations

*No additional considerations for tvOS or visionOS.*

### iOS, iPadOS

#### Refresh content controls

A refresh control lets people immediately reload content, typically in a table view, without waiting for the next automatic content update to occur. A refresh control is a specialized type of activity indicator that’s hidden by default, becoming visible when people drag down the view they want to reload. In Mail, for example, people can drag down the list of Inbox messages to check for new messages.

![A screenshot of a refresh content control spinning while Mail checks for new messages.](https://docs-assets.developer.apple.com/published/d404928a549d858de68eeb87380a72c0/refresh-controls~dark%402x.png)

**Perform automatic content updates.** Although people appreciate being able to do an immediate content refresh, they also expect automatic refreshes to occur periodically. Don’t make people responsible for initiating every update. Keep data fresh by updating it regularly.

**Supply a short title only if it adds value.** Optionally, a refresh control can include a title. In most cases, this is unnecessary, as the animation of the control indicates that content is loading. If you do include a title, don’t use it to explain how to perform a refresh. Instead, provide information of value about the content being refreshed. A refresh control in Podcasts, for example, uses a title to tell people when the last podcast update occurred.

For developer guidance, see [`UIRefreshControl`](https://developer.apple.com/documentation/UIKit/UIRefreshControl).

### macOS

In macOS, an indeterminate progress indicator can have a bar or circular appearance. Both versions use an animated image to indicate that the app is performing a task.

![An image of a completely filled horizontal progress bar in macOS. The fill is animated to cycle through various shade changes as progress continues.](https://docs-assets.developer.apple.com/published/ca6a699ac7a7097dca91c9fa49231249/progress-indicator-intermediate-bar~dark%402x.png)

Indeterminate progress bar

![An image of a spinning, circular activity indicator in macOS.](https://docs-assets.developer.apple.com/published/2648f9c9c61eba58ca3ae1faf5f80640/progress-indicator-intermediate-spinner~dark%402x.png)

Indeterminate circular progress indicator

**Prefer an activity indicator (spinner) to communicate the status of a background operation or when space is constrained.** Spinners are small and unobtrusive, so they’re useful for asynchronous background tasks, like retrieving messages from a server. Spinners are also good for communicating progress within a small area, such as within a text field or next to a specific control, such as a button.

**Avoid labeling a spinning progress indicator.** Because a spinner typically appears when people initiate a process, a label is usually unnecessary.

### watchOS

By default the system displays the progress indicators in white over the scene’s background color. You can change the color of the progress indicator by setting its tint color.

![An image of a progress bar filling from left to right in watchOS.](https://docs-assets.developer.apple.com/published/33bbf8ea9d047a5933e60cb120d3556e/progress-bar-watch%402x.png)

Progress bar

![An image of a circular progress indicator filling clockwise in watchOS.](https://docs-assets.developer.apple.com/published/9327014cf549f926741534698be7d5ee/progress-ring-watch%402x.png)

Circular progress indicator

![An image of a spinning activity indicator in watchOS.](https://docs-assets.developer.apple.com/published/02a8427a04f946d9b80d2907f84ab365/activity-indicators-watch%402x.png)

Activity indicator

## Resources

#### Developer documentation

[`ProgressView`](https://developer.apple.com/documentation/SwiftUI/ProgressView) — SwiftUI

[`UIProgressView`](https://developer.apple.com/documentation/UIKit/UIProgressView) — UIKit

[`UIActivityIndicatorView`](https://developer.apple.com/documentation/UIKit/UIActivityIndicatorView) — UIKit

[`UIRefreshControl`](https://developer.apple.com/documentation/UIKit/UIRefreshControl) — UIKit

[`NSProgressIndicator`](https://developer.apple.com/documentation/AppKit/NSProgressIndicator) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| September 12, 2023 | Combined guidance common to all platforms. |
| June 5, 2023 | Updated guidance to reflect changes in watchOS 10. |


---
title: "Rating indicators"
source: "https://developer.apple.com/design/human-interface-guidelines/rating-indicators"
author:
published:
created: 2026-06-11
description: "A rating indicator uses a series of horizontally arranged graphical symbols — by default, stars — to communicate a ranking level."
tags:
  - "clippings"
---
![A stylized representation of a rating indicator denoting a ranking of three out of five stars. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/5e8e6af5d03ecb1593a8a4ae3ad4a982/components-rating-indicators-intro~dark%402x.png)

A rating indicator doesn’t display partial symbols; it rounds the value to display complete symbols only. Within a rating indicator, symbols are always the same distance apart and don’t expand or shrink to fit the component’s width.

## Best practices

**Make it easy to change rankings.** When presenting a list of ranked items, let people adjust the rank of individual items inline without navigating to a separate editing screen.

**If you replace the star with a custom symbol, make sure that its purpose is clear.** The star is a very recognizable ranking symbol, and people may not associate other symbols with a rating scale.

## Platform considerations

*No additional considerations for macOS. Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Ratings and reviews](https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews)

#### Developer documentation

[`NSLevelIndicator.Style.rating`](https://developer.apple.com/documentation/AppKit/NSLevelIndicator/Style/rating) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| September 23, 2022 | New page. |

---

# System Experiences
---
title: "App Shortcuts"
source: "https://developer.apple.com/design/human-interface-guidelines/app-shortcuts"
author:
published:
created: 2026-06-11
description: "An App Shortcut gives people access to your app’s key functions or content throughout the system."
tags:
  - "clippings"
---
![A stylized representation of the Notes app appearing as the result in the Top Hit area of Spotlight, along with App Shortcuts for creating a new note and opening two other recent notes. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/daacc3c7645b23b8922f72b5a584d758/components-app-shortcuts-intro~dark%402x.png)

People can initiate App Shortcuts using features like Siri, Spotlight, and the Shortcuts app; using hardware features like the [Action button](https://developer.apple.com/design/human-interface-guidelines/action-button) on iPhone or Apple Watch; or by [squeezing](https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble#Squeeze) Apple Pencil.

Because App Shortcuts are part of your app, they are available immediately when installation finishes. For example, a journaling app could offer an App Shortcut for making a new journal entry that’s available before a person opens the app for the first time. Once someone starts using your app, its App Shortcuts can reflect their choices, like those from FaceTime for calling recent contacts.

App Shortcuts use [App Intents](https://developer.apple.com/documentation/AppIntents) to define actions within your app to make available to the system. Each App Shortcut includes one or more actions that represent a set of steps people might want to perform to accomplish a task. For example, a home security app might combine the two common actions of turning off the lights and locking exterior doors when a person goes to sleep at night into a single App Shortcut. Each app can include up to 10 App Shortcuts.

For developer guidance, see [App Shortcuts](https://developer.apple.com/documentation/AppIntents/app-shortcuts).

## Best practices

**To surface common types of app functionality throughout the system, consider adopting app schemas instead.** Apps in common domain areas can adopt [app schemas](https://developer.apple.com/documentation/AppIntents/app-schema-domains) to make their actions and content available to Apple Intelligence. On supported devices, this lets Siri and other system experiences surface app features contextually without the need to adopt individual App Shortcuts. For guidance, see [Siri](https://developer.apple.com/design/human-interface-guidelines/siri). For developer guidance, see [Apple Intelligence and Siri AI](https://developer.apple.com/documentation/AppIntents/apple-intelligence-and-siri-ai) and [Making actions and content discoverable by Apple Intelligence](https://developer.apple.com/documentation/AppIntents/making-actions-and-content-discoverable-by-apple-intelligence).

App Shortcuts are useful for exposing unique features or custom content to the system in areas not covered by app schemas.

**Offer App Shortcuts for your app’s most common and important tasks.** Straightforward tasks that people can complete without leaving their current context work best, but you can also open your app if it helps people complete multistep tasks more easily.

**Add flexibility by letting people choose from a set of options.** An App Shortcut can include a single optional value, or parameter, if it makes sense. For example, a meditation app could offer an App Shortcut that lets someone begin a specific type of meditation: “Start \[morning, daily, sleep\] meditation.” Include predictable and familiar values as options, because people won’t have the list in front of them for reference. For developer guidance, see [Adding parameters to an app intent](https://developer.apple.com/documentation/AppIntents/Adding-parameters-to-an-app-intent).

![A diagram of the activation phrase of a shortcut for ordering a drink from a coffee app. The activation phrase contains an optional value for the name of the drink, which is underlined and called out as the shortcut's parameter.](https://docs-assets.developer.apple.com/published/c498310c2f20dc4e1dd2b5a2a9e7895c/app-intents-parameter-diagram~dark%402x.png)

**Ask for clarification in response to a request that’s missing optional information.** For example, someone might say “Start meditation” without specifying the type (morning, daily, or sleep); you could follow up by suggesting the one they used most recently, or one based on the current time of day. If one option is most likely, consider presenting it as the default, and provide a short list of alternatives to choose from if a person doesn’t want the default choice.

**Keep voice interactions simple.** If your phrase feels too complicated when you say it aloud, it’s probably too difficult to remember or say correctly. For example, “Start \[sleep\] meditation with nature sounds” appears to have two possible parameters: the meditation type, and the accompanying sound. If additional information is absolutely required, ask for it in a subsequent step. For additional guidance on writing dialogue text for voice interactions, see [Siri](https://developer.apple.com/design/human-interface-guidelines/siri).

**Make App Shortcuts discoverable in your app.** People are most likely to remember and use App Shortcuts for tasks they do often, once they know the shortcut is available. Consider showing occasional tips in your app when people perform common actions to let them know an App Shortcut exists. For developer guidance, see [`SiriTipUIView`](https://developer.apple.com/documentation/AppIntents/SiriTipUIView).

### Responding to App Shortcuts

As a person engages with an App Shortcut, your app can respond in a variety of ways, including with dialogue that Siri speaks aloud and custom visuals like snippets and Live Activities.

- [Snippets](https://developer.apple.com/design/human-interface-guidelines/snippets) are great for custom views that display static information or dialog options, like showing the weather at a person’s location or confirming an order. For developer guidance, see [Displaying static and interactive snippets](https://developer.apple.com/documentation/AppIntents/displaying-static-and-interactive-snippets).
- [Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities) offer continuous access to information that’s likely to remain relevant and change over a period of time, and are great for timers and countdowns that appear until an event is complete. For developer guidance, see [`LiveActivityIntent`](https://developer.apple.com/documentation/AppIntents/LiveActivityIntent).

**Provide enough detail for interaction on audio-only devices.** People can receive responses on audio-only devices such as AirPods and HomePod too, and may not always be able to see content onscreen. Include all critical information in the full dialogue text of your App Shortcuts. For developer guidance, see [`init(full:supporting:systemImageName:)`](https://developer.apple.com/documentation/AppIntents/IntentDialog/init\(full:supporting:systemImageName:\)).

## Editorial guidelines

**Provide brief, memorable activation phrases and natural variants.** Because an App Shortcut phrase (or a variant you define) is what people say to run an App Shortcut with Siri, it’s important to keep it brief to make it easier to remember. You have to include your app name, but you can be creative with it. For example, Keynote accepts both “Create a Keynote” and “Add a new presentation in Keynote” as App Shortcut phrases for creating a new document. For developer guidance, see [`AppShortcutPhrase`](https://developer.apple.com/documentation/AppIntents/AppShortcutPhrase).

**When referring to App Shortcuts or the Shortcuts app, always use title case and make sure that *Shortcuts* is plural.** For example, *MyApp integrates with Shortcuts to provide a quick way to get things done with just a tap or by asking Siri, and offers App Shortcuts you can place on the Action button.*

**When referring to individual shortcuts (not App Shortcuts or the Shortcuts app), use lowercase.** For example, *Run a shortcut by asking Siri or tapping a suggestion on the Lock Screen.*

## Platform considerations

*No additional considerations for visionOS or watchOS. Not supported in tvOS.*

### iOS, iPadOS

App Shortcuts can appear in the Top Hit area of Spotlight when people search for your app, or in the Shortcuts area below. Each App Shortcut includes a symbol from [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) that you choose to represent its functionality, or a preview image of an item that the shortcut links to directly.

**Order shortcuts based on importance.** The order you choose determines how App Shortcuts initially appear in both Spotlight and the Shortcuts app, so it’s helpful to include the most generally useful ones first. Once people start using your App Shortcuts, the system updates to prioritize the ones they use most frequently.

### macOS

App Shortcuts aren’t supported in macOS. However, actions you create for your app using App Intents are supported, and people can build custom shortcuts using them with the Shortcuts app on Mac.

## Resources

#### Related

[Siri](https://developer.apple.com/design/human-interface-guidelines/siri)

[Siri Style Guide](https://developer.apple.com/siri/style-guide/)

[Shortcuts User Guide](https://support.apple.com/guide/shortcuts/welcome/ios)

#### Developer documentation

[App Intents](https://developer.apple.com/documentation/AppIntents)

[SiriKit](https://developer.apple.com/documentation/SiriKit)

[Getting started with the App Intents framework](https://developer.apple.com/documentation/AppIntents/getting-started-with-the-app-intents-framework) — App Intents

[Defining app entities for your custom data types](https://developer.apple.com/documentation/AppIntents/defining-app-entities-for-your-custom-data-types) — App Intents

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Added guidance for adopting app schemas. |
| January 17, 2025 | Updated and streamlined guidance. |
| June 5, 2023 | New page. |


---
title: "Complications"
source: "https://developer.apple.com/design/human-interface-guidelines/complications"
author:
published:
created: 2026-06-11
description: "A complication displays timely, relevant information on the watch face, where people can view it each time they raise their wrist."
tags:
  - "clippings"
---
![A stylized representation of an Apple Watch face that includes the time and a set of differently sized complications with labels. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/861b1fe9e055a53b5dba2bf4b3ae23e3/components-complications-intro~dark%402x.png)

People often prefer apps that provide multiple, powerful complications, because it gives them quick ways to view the data they care about, even when they don’t open the app.

Most watch faces can display at least one complication; some can display four or more.

Starting in watchOS 9, the system organizes complications (also known as *accessories*) into several families — like [circular](https://developer.apple.com/design/human-interface-guidelines/complications#Circular) and [inline](https://developer.apple.com/design/human-interface-guidelines/complications#Inline) — and defines some recommended layouts you can use to display your complication data. A watch face can specify the family it supports in each complication slot. Complications that work in earlier versions of watchOS can use the [legacy templates](https://developer.apple.com/design/human-interface-guidelines/complications#Legacy-templates), which define nongraphic complication styles that don’t take on a wearer’s selected color.

## Best practices

**Identify essential, dynamic content that people want to view at a glance.** Although people can use a complication to quickly launch an app, the complication behavior they appreciate more is the display of relevant information that always feels up to date. A static complication that doesn’t display meaningful data may be less likely to remain in a prominent position on the watch face.

**Support all complication families when possible.** Supporting more families means that your complications are available on more watch faces. If you can’t display useful information for a particular complication family, provide an image that represents your app — like your app icon — that still lets people launch your app from the watch face.

**Consider creating multiple complications for each family.** Supporting multiple complications helps you take advantage of shareable watch faces and lets people configure a watch face that’s centered on an app they love. For example, an app that helps people train for triathlons could offer three circular complications — one for each segment of the race — each of which deep-links to the segment-specific area in the app. This app could also offer a shareable watch face that’s preconfigured to include its swimming, biking, and running complications and to use its custom images and colors. When people choose this watch face, they don’t have to do any configuration before they can start using it. For guidance, see [Watch faces](https://developer.apple.com/design/human-interface-guidelines/watch-faces).

**Define a different deep link for each complication you support.** It works well when each complication opens your app to the most relevant area. If all the complications you support open the same area in your app, they can seem less useful.

**Keep privacy in mind.** With the Always-On Retina display, information on the watch face might be visible to people other than the wearer. Make sure you help people prevent potentially sensitive information from being visible to others. For guidance, see [Always On](https://developer.apple.com/design/human-interface-guidelines/always-on).

**Carefully consider when to update data.** You provide a complication’s data in the form of a timeline where each entry has a value that specifies the time at which to display your data on the watch face. Different data sets might require different time values. For example, a meeting app might display information about an upcoming meeting an hour before the meeting starts, but a weather app might display forecast information at the time those conditions are expected to occur. You can update the timeline a limited number of times each day, and the system stores a limited number of timeline entries for each app, so you need to choose times that enhance the usefulness of your data. For developer guidance, see [Migrating ClockKit complications to WidgetKit](https://developer.apple.com/documentation/WidgetKit/Converting-A-ClockKit-App#Configure-your-timeline-provider).

## Visual design

**Choose a ring or gauge style based on the data you need to display.** Many families support a ring or gauge layout that provides consistent ways to represent numerical values that can change over time. For example:

- The closed style can convey a value that’s a percentage of a whole, such as for a battery gauge.
- The open style works well when the minimum and maximum values are arbitrary — or don’t represent a percentage of the whole — like for a speed indicator.
- Similar to the open style, the segmented style also displays values within an app-defined range, and can convey rapid value changes, such as in the Noise complication.

**Make sure images look good in tinted mode.** In tinted mode, the system applies a solid color to a complication’s text, gauges, and images, and desaturates full-color images unless you provide tinted versions of them. For developer guidance, see [`WidgetRenderingMode`](https://developer.apple.com/documentation/WidgetKit/WidgetRenderingMode). (If you’re using legacy templates, tinted mode applies only to graphic complications.) To help your complications perform well in tinted mode:

- Avoid using color as the only way to communicate important information. You want people to get the same information in tinted mode as they do in nontinted mode.
- When necessary, provide an alternative tinted-mode version of a full-color image. If your full-color image doesn’t look good when it’s desaturated, you can supply a different version of the image for the system to use in tinted mode.

**Recognize that people might prefer to use tinted mode for complications, instead of viewing them in full color.** When people choose tinted mode, the system automatically desaturates your complication, converting it to grayscale and tinting its images, gauges, and text using a single color that’s based on the wearer’s selected color.

**When creating complication content, generally use line widths of two points or greater.** Thinner lines can be difficult to see at a glance, especially when the wearer is in motion. Use line weights that suit the size and complexity of the image.

**Provide a set of static placeholder images for each complication you support.** The system uses placeholder images when there’s no other content to display for your complication’s data. For example, when people first install your app, the system can display a static placeholder while it checks to see if your app can generate a localized placeholder to use instead. Placeholder images can also appear in the carousel from which people select complications. Note that complication image sizes vary per layout (and per legacy template) and the size of a placeholder image may not match the size of the actual image you supply for that complication. For developer guidance, see [`placeholder(in:)`](https://developer.apple.com/documentation/WidgetKit/TimelineProvider/placeholder\(in:\)).

## Circular

Circular layouts can include text, gauges, and full-color images in circular areas on the Infograph and Infograph Modular watch faces. The circular family also defines extra-large layouts for displaying content on the X-Large watch face.

![A white musical notes icon displayed within a red circle. The circle’s outline is bright red for about ninety percent of the circumference and dull red for about ten percent, showing current progress.](https://docs-assets.developer.apple.com/published/894b82d3c9a300e9ee13ccb6b5db1b18/circular-closed-gauge-image%402x.png)

Closed gauge image

![The number one hundred in white text displayed within a green circle. The circle’s outline appears to overlap the starting point on the circumference by about five percent, showing current progress.](https://docs-assets.developer.apple.com/published/4c708bff423e1259099caeb43d49671e/circular-closed-gauge-text%402x.png)

Closed gauge text

![The number one point zero in white text, surrounded by a partial circle that begins at about the 8:00 position and ends at about the 4:00 position. The partial circle’s outline shades from green at the 8:00 position to violet the 4:00 position. A small green sun icon appears at about the 6:00 position.](https://docs-assets.developer.apple.com/published/654cf781ef7b3aae9d4849238bbc4518/circular-open-gauge-image%402x.png)

Open gauge image

![The number forty-two in white text, surrounded by a partial circle that begins at about the 8:00 position and ends at about the 4:00 position. The partial circle’s outline shades from blue at the 8:00 position to violet the 4:00 position. The letters A, Q, I appear in green text at about the 6:00 position.](https://docs-assets.developer.apple.com/published/e03f6469e57138b5b81c415a14822592/circular-open-gauge-simple-text%402x.png)

Open gauge text

![The number seventy-two in white text, surrounded by a partial circle that begins at about the 8:00 position and ends at about the 4:00 position. The partial circle’s outline shades from green at the 8:00 position to yellow the 4:00 position. Two numbers appear side by side at about the 6:00 position. Fifty-five appears in green text on the left and seventy-six appears in orange text on the right.](https://docs-assets.developer.apple.com/published/07a43e66647416847d4c126f2cc9a3a1/circular-open-gauge-range-text%402x.png)

Open gauge range

![An image of the breathe app icon.](https://docs-assets.developer.apple.com/published/f89731b0962fff02483c177a06a158e1/graphic-circular-image%402x.png)

Image

![A sunset icon displayed above the time seven twenty-four PM, centered within a circular area.](https://docs-assets.developer.apple.com/published/77444d60c23fb81c91b3cca54fdd0bc3/complication-graphic-circular-stack%402x.png)

Stack image

![Two lines of text centered within a circular area. The top line is the Apple stock symbol A A P L in white and the second line is the number 121.96 in green.](https://docs-assets.developer.apple.com/published/d91868e8b2928ef9ae237d15eb98fed0/complication-graphic-circular-stack-text%402x.png)

Stack text

You can also add text to accompany a regular-size circular image, using a design that curves the text along the bezel of some watch faces, like Infograph. The text can fill nearly 180 degrees of the bezel before truncating.

![A line of white text that appears to follow the curve of the upper third of a circle. The text reads 8:00 AM yoga, flow studio. Centered below the text is the calendar date friday twenty-three displayed in a circular area.](https://docs-assets.developer.apple.com/published/1d10fccea806be8f043ccc0f39ea4caf/bezel-circular-text%402x.png)

Closed gauge image

As you design images for a regular-size circular complication, use the following values for guidance.

| Image | 40mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- |
| Image | 42x42 pt (84x84 px @2x) | 44.5x44.5 pt (89x89 px @2x) | 47x47 pt (94x94 px @2x) | 50x50 pt (100x100 px @2x) |
| Closed gauge | 27x27 pt (54x54 px @2x) | 28.5x28.5 pt (57x57 px @2x) | 31x31 pt (62x62 px @2x) | 32x32 pt (64x64 px @2x) |
| Open gauge | 11x11 pt (22x22 px @2x) | 11.5x11.5 pt (23x23 px @2x) | 12x12 pt (24x24 px @2x) | 13x13 pt (26x26 px @2x) |
| Stack (not text) | 28x14 pt (56x28 px @2x) | 29.5x15 pt (59X30 px @2x) | 31x16 pt (62x32px @ 2x) | 33.5x16.5 pt (67x33 px @2x) |

A SwiftUI view that implements a regular-size circular complication uses the following default text values:

- Style: Rounded
- Weight: Medium
- Text size: 12 pt (40mm), 12.5 pt (41mm), 13 pt (44mm), 14.5 pt (45mm/49mm)

If you want to design an oversized treatment of important information that can appear on the X-Large watch face — for example, the Contacts complication, which features a contact photo — use the extra-large versions of the circular family’s layouts. The following layouts let you display full-color images, text, and gauges in a large circular region that fills most of the X-Large watch face. Some of the text fields can support multicolor text.

![A white musical notes icon displayed within a red circle. The circle’s outline is bright red for about sixty-six percent of the circumference and dull red for about ten percent, showing current progress.](https://docs-assets.developer.apple.com/published/6e62e84e78d7206a561aaadff4f7bf9d/complication-graphic-xl-circular-closed-gauge-image%402x.png)

Closed gauge image

![The number one eighty-five in blue text displayed within a blue circle. The circle’s outline is bright blue for eighty-five percent of the circumference and dull blue for fifteen percent, showing current progress.](https://docs-assets.developer.apple.com/published/88e7205fd0f8faa2b99412ab707b02d4/complication-graphic-xl-circular-closed-gauge-text%402x.png)

Closed gauge text

![The number fifty in light-blue text, surrounded by a partial light-blue circle that includes a teardrop shape at the bottom.](https://docs-assets.developer.apple.com/published/0b73bd54f4052f97317b84828b8ff150/complication-graphic-xl-circular-open-gauge-image%402x.png)

Open gauge image

![The number twenty-nine in green text, surrounded by a partial white circle that includes the letters A, Q, I in green text at the bottom.](https://docs-assets.developer.apple.com/published/8a6e7a02ffe907d8c0dd63ffb66e199a/complication-graphic-xl-circular-open-gauge-simple-text%402x.png)

Open gauge text

![The number fifty-six in white text, surrounded by a partial circle that shades from green at the 8:00 position to red at the 4:00 position. Two numbers appear side by side at the bottom of the partial circle. Fifty-two appears in green text on the left and eighty-nine appears in red text on the right.](https://docs-assets.developer.apple.com/published/80ec1e90fe34971189a61fc5a3fe04ab/complication-graphic-xl-circular-open-gauge-range-text%402x.png)

Open gauge range

![An image of the Breathe app icon.](https://docs-assets.developer.apple.com/published/78a8e3548c6f994f9565cd2e4b4e103b/complication-graphic-xl-circular-image%402x.png)

Image

![A red sunset icon displayed above the time seven twenty-four PM, centered within a circular area.](https://docs-assets.developer.apple.com/published/77444d60c23fb81c91b3cca54fdd0bc3/complication-graphic-xl-circular-stack-image%402x.png)

Stack image

![Two lines of text centered within a circular area. The top line is the Apple stock symbol A A P L in white and the second line is the number 121.96 in green.](https://docs-assets.developer.apple.com/published/d91868e8b2928ef9ae237d15eb98fed0/complication-graphic-xl-circular-stack-text%402x.png)

Stack text

Use the following values for guidance as you create images for an extra-large circular complication.

| Image | 40mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- |
| Image | 120x120 pt (240x240 px @2x) | 127x127 pt (254x254 px @2x) | 132x132 pt (264x264 px @2x) | 143x143 pt (286x286 px @2x) |
| Open gauge | 31x31 pt (62x62 px @2x) | 33x33 pt (66x66 px @2x) | 33x33 pt (66x66 px @2x) | 37x37 pt (74x74 px @2x) |
| Closed gauge | 77x77 pt (154x154 px @2x) | 81.5x81.5 (163x163 px @2x) | 87x87 pt (174x174 px @2x) | 91.5x91.5 (183x183 px @2x) |
| Stack | 80x40 pt (160x80 px @2x) | 85x42 (170x84 px @2x) | 87x44 pt (174x88 px @2x) | 95x48 pt (190x96 px @2x ) |

Use the following values to create no-content placeholder images for your circular-family complications.

| Layout | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- | --- |
| Circular | – | 42x42 pt (84x84 px @2x) | 44.5x44.5 pt (89x89 px @2x) | 47x47 pt (94x94 px @2x) | 50x50 pt (100x100 px @2x) |
| Bezel | – | 42x42 pt (84x84 px @2x) | 44.5x44.5 pt (89x89 px @2x) | 47x47 pt (94x94 px @2x) | 50x50 pt (100x100 px @2x) |
| Extra Large | – | 120x120 pt (240x240 px @2x) | 127x127 pt (254x254 px @2x) | 132x132 pt (264x264 px @2x) | 143x143 pt (286x286 px @2x) |

A SwiftUI view that implements an extra-large circular layout uses the following default text values:

- Style: Rounded
- Weight: Medium
- Text size: 34.5 pt (40mm), 36.5 pt (41mm), 36.5 pt (44mm), 41 pt (45mm/49mm)

## Corner

Corner layouts let you display full-color images, text, and gauges in the corners of the watch face, like Infograph. Some of the templates also support multicolor text.

![An icon showing a yellow sun partially obscured by a white cloud within a circular area.](https://docs-assets.developer.apple.com/published/d2505fe8bcd6129c02eee89133fae163/corner-circular-image%402x.png)

Circular image

![The value fourteen minutes and fifty-nine seconds displayed next to a thin solid bar. The text and the bar appear to follow the curve of the bottom-right quadrant of a circle. The timer app icon appears below the time value.](https://docs-assets.developer.apple.com/published/a21715e44b62556c939eb1031d4d7f55/corner-gauge-image%402x.png)

Gauge image

![The weather values fifty-five, shown in green, and seventy-six, shown in orange, displayed with a shaded solid bar between them. The bar shades from green to orange to match the values. The text and the bar appear to follow the curve of the top-right quadrant of a circle. The value seventy-two degrees appears in large white text above the temperature range.](https://docs-assets.developer.apple.com/published/9820a8d14b8494f9bc3992c504baf134/corner-gauge-text%402x.png)

Gauge text

![Two lines of text, both of which appear to follow the curve of the top-left quadrant of a circle. The top line contains the word cup in large white text. The bottom line contains the time ten oh nine AM followed by a plus sign and zero hours, all in orange text.](https://docs-assets.developer.apple.com/published/6a3616ce205f69ee7c3deebb63f24c82/corner-stack-text%402x.png)

Stack text

![A line displaying zero hours, zero minutes, and zero seconds in orange text. The line appears to follow the curve of the bottom-left quadrant of a circle. The  stopwatch app icon appears below the line of text.](https://docs-assets.developer.apple.com/published/c829cc0f1c923486c897b4328e11559a/corner-text-image%402x.png)

Text image

As you design images for a corner complication, use the following values for guidance.

| Image | 40mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- |
| Circular | 32x32 pt (64x64 px @2x) | 34x34 pt (68x68 px @2x) | 36x36 pt (72x72 px @2x) | 38x38 pt (76x76 px @2x ) |
| Gauge | 20x20 pt (40x40 px @2x) | 21x21 pt (42x42 px @2x) | 22x22 pt (44x44 px @2x) | 24x24 pt (48x48 px @2x) |
| Text | 20x20 pt (40x40 px @2x) | 21x21 pt (42x42 px @2x) | 22x22 pt (44x44 px @2x) | 24x24 pt (48x48 px @2x) |

Use the following values to create no-content placeholder images for your corner-family complications.

| 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- |
| – | 20x20 pt (40x40 px @2x) | 21x21 pt (42x42 px @2x) | 22x22 pt (44x44 px @2x) | 24x24 pt (48x48 px @2x) |

A SwiftUI view that implements a corner layout uses the following default text values:

- Style: Rounded
- Weight: Semibold
- Text size: 10 pt (40mm), 10.5 pt (41mm), 11 pt (44mm), 12 pt (45mm/49mm)

## Inline

Inline layouts include utilitarian small and large layouts.

Utilitarian small layouts are intended to occupy a rectangular area in the corner of a watch face, such as the Chronograph and Simple watch faces. The content can include an image, interface icon, or a circular graph.

![The letters L, O, N displayed above the time six oh nine.](https://docs-assets.developer.apple.com/published/269280772375293a9bba7c48384bbc81/complication-utility-small-flat%402x.png)

Flat

![Two tear drop icons, each centered within a partial ring.](https://docs-assets.developer.apple.com/published/3321ec0b2fcd3a1aa7d7e50b082a82e2/complication-utility-small-ring-image%402x.png)

Ring image

![Two partial rings, each displaying the number sixty-three centered within them.](https://docs-assets.developer.apple.com/published/2fc1e12d51df2d6c708385b7d33ae3ad/complication-utility-small-ring-text%402x.png)

Ring text

![An image of the moon.](https://docs-assets.developer.apple.com/published/2316eb7e29bc98cbe606a332543e41ac/complication-utility-small-square%402x.png)

Square

As you design images for a utilitarian small layout, use the following values for guidance.

| Content | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- | --- |
| Flat | 9-21x9 pt (18-42x18 px @2x) | 10-22x10 pt (20-44x20 px @2x) | 10.5-23.5x21 pt (21-47x21 @2x) | N/A | 12-26x12 pt (24-52x24 px @2x) |
| Ring | 14x14 pt (28x28 px @2x) | 14x14 pt (28x28 px @2x) | 15x15 pt (30x30 px @2x) | 16x16 pt (32x32 px @2x) | 16.5x16.5 pt (33x33 px @2x) |
| Square | 20x20 pt (40x40 px @2x) | 22x22 pt (44x44 px @2x) | 23.5x23.5 pt (47x47 px @2x) | 25x25 pt (50x50 px @2x) | 26x26 pt (52x52 px @2x) |

The utilitarian large layout is primarily text-based, but also supports an interface icon placed on the leading side of the text. This layout spans the bottom of a watch face, like the Utility or Motion watch faces.

![The text eleven AM photo shoot displayed on one line in a large text size.](https://docs-assets.developer.apple.com/published/71cce6286d76ea16f2821b0cfdcb453e/complication-utility-large-flat%402x.png)

Large flat

As you design images for a utilitarian large layout, use the following values for guidance.

| Content | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- | --- |
| Flat | 9-21x9 pt (18-42x18 px @2x) | 10-22x10 pt (20-44x20 px @2x) | 10.5-23.5x10.5 pt (21-47x21 px @2x) | N/A | 12-26x12 pt (24-52x24 px @2x) |

## Rectangular

Rectangular layouts can display full-color images, text, a gauge, and an optional title in a large rectangular region. Some of the text fields can support multicolor text.

The large rectangular region works well for showing details about a value or process that changes over time, because it provides room for information-rich charts, graphs, and diagrams. For example, the Heart Rate complication displays a graph of heart-rate values within a 24-hour period. The graph uses high-contrast white and red for the primary content and a lower-contrast gray for the graph lines and labels, making the data easy to understand at a glance.

Starting with watchOS 10, if you have created a rectangular layout for your watchOS app, the system may display it in the Smart Stack. You can optimize this presentation in a few ways:

- By supplying background color or content that communicates information or aids in recognition
- By using [intents](https://developer.apple.com/documentation/appintents/app-intents) to specify relevancy, and help ensure that your widget is displayed in the Smart Stack at times that are most appropriate and useful to people
- By creating a custom layout of your information that is optimized for the Smart Stack

For developer guidance, see [`WidgetFamily.accessoryRectangular`](https://developer.apple.com/documentation/WidgetKit/WidgetFamily/accessoryRectangular). See [Widgets](https://developer.apple.com/design/human-interface-guidelines/widgets) for additional guidance on designing widgets for the Smart Stack.

![Three lines of left-aligned text. The first line uses blue text to display the words water reminders. The second line uses white text to display the words thirty-two ounces consumed. The third line uses gray text to display the words four day streak, woo hoo.](https://docs-assets.developer.apple.com/published/eacc51c96f809a72dc4e293e1ce12231/rectangular-standard-body%402x.png)

Standard body

![Two lines of text displayed above a bar that can fill with color to indicate progress. The first line uses blue text to display a tear drop icon followed by the words water reminder. The second line uses white text to display the words thirty-two ounces consumed. The bar uses the same blue color as used in the first line of text to fill the bar from the left to about seventy percent of the total length.](https://docs-assets.developer.apple.com/published/cf5c53f181d423b5e950c27b3a8056d6/rectangular-text-gauge%402x.png)

Text gauge

![A line of text displayed above a graph. The text displays in white the words sixty-eight B, P, M, followed by the words two minutes ago, in red text. The graph shows many heart rate values over time.](https://docs-assets.developer.apple.com/published/f1b05dfd5648f270edc50eae0cbc2834/rectangular-large-image%402x.png)

Large image

Use the following values for guidance as you create images for a rectangular layout.

| Content | 40mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- |
| Large image with title \* | 150x47 pt (300x94 px @2x) | 159x50 pt (318x100 px @2x) | 171x54 pt (342x108 px @2x) | 178.5x56 pt (357x112 px @2x) |
| Large image without title \* | 162x69 pt (324x138 px @2x) | 171.5x73 pt (343x146 px @2x) | 184x78 pt (368x156 px @2x) | 193x82 pt (386x164 px @2x) |
| Standard body | 12x12 pt (24x24 px @2x) | 12.5x12.5 pt (25x25 px @2x) | 13.5x13.5 pt (27x27 px @2x) | 14.5x14.5 pt (29x29 px @2x) |
| Text gauge | 12x12 pt (24x24 px @2x) | 12.5x12.5 pt (25x25 px @2x) | 13.5x13.5 pt (27x27 px @2x) | 14.5x14.5 pt (29x29 px @2x) |

A SwiftUI view that implements a rectangular layout uses the following default text values:

- Style: Rounded
- Weight: Medium
- Text size: 16.5 pt (40mm), 17.5 pt (41mm), 18 pt (44mm), 19.5 pt (45mm/49mm)

## Legacy templates

### Circular small

Circular small templates display a small image or a few characters of text. They appear in the corner of the watch face (for example, in the Color watch face).

![A tear drop icon centered within a partial ring.](https://docs-assets.developer.apple.com/published/099b811bae2a48a89ccd01a8a526dc78/complication-circular-small-ring-image%402x.png)

Ring image

![The number sixty-three centered within a partial ring.](https://docs-assets.developer.apple.com/published/1e800aa127d18b31519bf181383bf13f/complication-circular-small-ring-text%402x.png)

Ring text

![A stopwatch icon centered within a circular area.](https://docs-assets.developer.apple.com/published/ea77fbe94ab1c99437b6f05635904912/complication-circular-small-simple-image%402x.png)

Simple image

![The number sixty-eight and the degree symbol centered within a circular area.](https://docs-assets.developer.apple.com/published/a5f5c73d96c14ed8b45d4ed14cf5d3fe/complication-circular-small-simple-text%402x.png)

Simple text

![A sunset icon displayed above the time seven twenty-four PM, centered within a circular area.](https://docs-assets.developer.apple.com/published/bdbfa5a07a29ae3c91413454c0d45f5c/complication-circular-small-stack-image%402x.png)

Stack image

![The letters L, O, N displayed above the time six oh nine.](https://docs-assets.developer.apple.com/published/0bc5cc4c6505b400a2b3ed317c47293c/complication-circular-small-stack-text%402x.png)

Stack text

As you design images for a circular small complication, use the following values for guidance.

| Image | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- | --- |
| Ring | 20x20 pt (40x40 px @2x) | 22x22 pt (44x44 px @2x) | 23.5x23.5 pt (47x47 px @2x) | 24x24 pt (48x48 px @2x) | 26x26 pt (52x52 px @2x) |
| Simple | 16x16 pt (32x32 px @2x) | 18x18 pt (36x36 px @2x) | 19x19 pt (38x38 px @2x) | 20x20 pt (40x40 px @2x) | 21.5x21.5 pt (43x43 px @2x) |
| Stack | 16x7 pt (32x14 px @2x) | 17x8 pt (34x16 px @2x) | 18x8.5 pt (36x17 px @2x) | 19x9 pt (38x18 px @2x) | 19x9.5 pt (38x19 px @2x) |
| Placeholder | 16x16 pt (32x32 px @2x) | 18x18x pt (36x36 px @2x) | 19x19 pt (38x38 px @2x) | 20x20 pt (40x40 px @2x) | 21.5x21.5 pt (43x43 px @2x) |

### Modular small

Modular small templates display two stacked rows consisting of an icon and content, a circular graph, or a single larger item (for example, the bottom row of complications on the Modular watch face).

![Text and numbers arranged in a two-row column. The top row displays the letters C and P and the number fourteen. The bottom row displays the letters M and H and the number twenty-eight.](https://docs-assets.developer.apple.com/published/d4768440b750b0614aca0bab1754c1bd/complication-modular-small-columns-text%402x.png)

Columns text

![A tear drop icon centered within a partial ring.](https://docs-assets.developer.apple.com/published/f89c9c4226b921580000237320197983/complication-modular-small-ring-image%402x.png)

Ring image

![The number sixty-three centered within a partial ring.](https://docs-assets.developer.apple.com/published/e9e15b071c1e272ef99ee09a583d6214/complication-modular-small-ring-text%402x.png)

Ring text

![An image of the moon.](https://docs-assets.developer.apple.com/published/d5a7bd5314f4a682df263d9f32224665/complication-modular-small-simple-image%402x.png)

Simple image

![The number sixty-eight and the degree symbol.](https://docs-assets.developer.apple.com/published/ea5c2c9f8f7d19da47f656816d13ccc4/complication-modular-small-simple-text%402x.png)

Simple text

![A sunset icon displayed above the time seven twenty-four PM.](https://docs-assets.developer.apple.com/published/74d96206654ce136baea6153f8f5916e/complication-modular-small-stack-image%402x.png)

Stack image

![The letters L, O, N displayed above the time six oh nine.](https://docs-assets.developer.apple.com/published/82cbeeb9536e51537483b6eb9294955d/complication-modular-small-stack-text%402x.png)

Stack text

As you design icons and images for a modular small complication, use the following values for guidance.

| Image | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- | --- |
| Ring | 18x18 pt (36x36 px @2x) | 19x19 pt (38x38 px @2x) | 20x20 pt (40x40 px @2x) | 21x21 pt (42x42 px @2x) | 22.5x22.5 pt (45x45 px @2x) |
| Simple | 26x26 pt (52x52 px @2x) | 29x29 pt (58x58 px @2x) | 30.5x30.5 pt (61x61 px @2x) | 32x32 pt (64x64 px @2x) | 34.5x34.5 pt (69x69 px @2x) |
| Stack | 26x14 pt (52x28 px @2x) | 29x15 pt (58x30 px @2x) | 30.5x16 pt (61x32 px @2x) | 32x17 pt (64x34 px @2x) | 34.5x18 pt (69x36 px @2x) |
| Placeholder | 26x26 pt (52x52 px @2x) | 29x29 pt (58x58 px @2x) | 30.5x30.5 pt (61x61 px @2x) | 32x32 pt (64x64 px @2x) | 34.5x34.5 pt (69x69 px @2x) |

### Modular large

Modular large templates offer a large canvas for displaying up to three rows of content (for example, in the center of the Modular watch face).

![Activity-related information displayed in a three-row column. The top row displays a calorie count of 396 out of 660. The middle row displays a minute count of 13 out of 30. The bottom row displays an hour count of 3 out of 12.](https://docs-assets.developer.apple.com/published/9e6f3cc81365a53a8509935db81ab4f0/complication-modular-large-columns%402x.png)

Columns

![Weather-related information displayed in three left-aligned lines of text. The top row displays the location Cupertino California. The middle row displays sixty-eight degrees and cloudy. The bottom row displays a forecast high of seventy-two degrees and low of sixty-two degrees.](https://docs-assets.developer.apple.com/published/97d75fa71e7d4dcac61d89286cd9e415/complication-modular-large-standard-body%402x.png)

Standard body

![Sports-related information displayed in a two-column, two-row table with a title. The table title is Final Score. The first table row contains the number 14 followed by the text Central Prep. The second table row contains the number 28 followed by the text Mission High.](https://docs-assets.developer.apple.com/published/ab811ad4c90cc2c030da750ebd0be495/complication-modular-large-table%402x.png)

Table

![Calendar-related information displayed in two lines of fully justified text. The first line displays the word wednesday. The second line displays the abbreviation mar and the number nine in text that is about twice as tall as the text in the first line.](https://docs-assets.developer.apple.com/published/877462cb5be4b9764cf101897b0acc2a/complication-modular-large-tall-body%402x.png)

Tall body

As you design icons and images for a modular large complication, use the following values for guidance.

| Content | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- | --- |
| Columns | 11-32x11 pt (22-64x22 px @2x) | 12-37x12 pt (24-74x24 px @2x) | 12.5-39x12.5 pt (25-78x25 px @2x) | 14-42x14 pt (28-84x28 px @2x) | 14.5-44x14.5 pt (29-88x29 px @2x) |
| Standard body | 11-32x11 pt (22-64x22 px @2x) | 12-37x12 pt (24-74x24 px @2x) | 12.5-39x12.5 pt (25-78x25 px @2x) | 14-42x14 pt (28-84x28 px @2x) | 14.5-44x14.5 pt (29-88x29 px @2x) |
| Table | 11-32x11 pt (22-64x22 px @2x) | 12-37x12 pt (24-74x24 px @2x) | 12.5-39x12.5 pt (25-78x25 px @2x) | 14-42x14 pt (28-84x28 px @2x) | 14.5-44x14.5 pt (29-88x29 px @2x) |

### Extra large

Extra large templates display larger text and images (for example, on the X-Large watch faces).

![A tear drop icon centered within a partial ring.](https://docs-assets.developer.apple.com/published/f89c9c4226b921580000237320197983/complication-extralarge-ring-image%402x.png)

Ring image

![The number sixty-three centered within a partial ring.](https://docs-assets.developer.apple.com/published/e9e15b071c1e272ef99ee09a583d6214/complication-extralarge-ring-text%402x.png)

Ring text

![An image of the moon.](https://docs-assets.developer.apple.com/published/d5a7bd5314f4a682df263d9f32224665/complication-extralarge-simple-image%402x.png)

Simple image

![The number sixty-eight and the degree symbol.](https://docs-assets.developer.apple.com/published/ea5c2c9f8f7d19da47f656816d13ccc4/complication-extralarge-simple-text%402x.png)

Simple text

![A sunset icon displayed above the time seven twenty-four PM.](https://docs-assets.developer.apple.com/published/74d96206654ce136baea6153f8f5916e/complication-extralarge-stack-image%402x.png)

Stack image

![The letters L, O, N displayed above the time six oh nine.](https://docs-assets.developer.apple.com/published/82cbeeb9536e51537483b6eb9294955d/complication-extralarge-stack-text%402x.png)

Stack text

As you design icons and images for an extra large complication, use the following values for guidance.

| Image | 38mm | 40mm/42mm | 41mm | 44mm | 45mm/49mm |
| --- | --- | --- | --- | --- | --- |
| Ring | 63x63 pt (126x126 px @2x) | 66.5x66.5 pt (133x133 px @2x) | 70.5x70.5 pt (141x141 px @2x) | 73x73 pt (146x146 px @2x) | 79x79 pt (158x158 px @2x) |
| Simple | 91x91 pt (182x182 px @2x) | 101.5x101.5 pt (203x203 px @2x) | 107.5x107.5 pt (215x215 px @2x) | 112x112 pt (224x224 px @2x) | 121x121 pt (242x242 px @2x ) |
| Stack | 78x42 pt (156x84 px @2x) | 87x45 pt (174x90 px @2x) | 92x47.5 pt (184x95 px @2x) | 96x51 pt (192x102 px @2x) | 103.5x53.5 pt (207x107 px @2x) |
| Placeholder | 91x91 pt (182x182 px @2x) | 101.5x101.5 pt (203x203 px @2x) | 107.5x107.5 pt (215x215 px @2x) | 112x112 pt (224x224 px @2x) | 121x121 pt (242x242 px @2x) |

## Platform considerations

*Not supported in iOS, iPadOS, macOS, tvOS, or visionOS.*

## Resources

#### Related

[Watch faces](https://developer.apple.com/design/human-interface-guidelines/watch-faces)

#### Developer documentation

[WidgetKit](https://developer.apple.com/documentation/WidgetKit)

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| October 24, 2023 | Replaced links to deprecated ClockKit documentation with links to WidgetKit documentation. |
| June 5, 2023 | Updated guidance for rectangular complications to support them as widgets in the Smart Stack. |
| September 14, 2022 | Added specifications for Apple Watch Ultra. |

---
title: "Controls"
source: "https://developer.apple.com/design/human-interface-guidelines/controls"
author:
published:
created: 2026-06-11
description: "A control provides quick access to a feature of your app from Control Center, the Lock Screen, or the Action button."
tags:
  - "clippings"
---
![A partial screenshot of controls in Control Center, such as the Airplane Mode toggle, Wi-Fi toggle, and AirPlay button. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/3eb51c82ce94c19b99ff18e912b90052/components-controls-intro~dark%402x.png)

A control is a button or toggle that provides quick access to your app’s features from other areas of the system. Control buttons perform an action, link to a specific area of your app, or launch a [camera experience on a locked device](https://developer.apple.com/design/human-interface-guidelines/controls#Camera-experiences-on-a-locked-device). Control toggles switch between two states, such as on and off.

People can add controls to Control Center by pressing and holding in an empty area of Control Center, to the Lock Screen by customizing their Lock Screen, and to the Action button by configuring the Action button in the Settings app.

## Anatomy

Controls contain a symbol image, a title, and, optionally, a value. The symbol visually represents what the control does and can be a symbol from [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) or a custom symbol. The title describes what the control relates to, and the value represents the state of the control. For example, the title can display the name of a light in a room, while the value can display whether it’s on or off.

![A diagram showing the placement of the symbol image, the title, and the value for a control toggle.](https://docs-assets.developer.apple.com/published/47cae127aedbe70212bb6aa8a6f44914/control-medium-anatomy~dark%402x.png)

Controls display their information differently depending on where they appear:

- In Control Center, a control displays its symbol and, at larger sizes, its title and value.
- On the Lock Screen, a control displays its symbol.
- On iPhone devices with a control assigned to the Action button, pressing and holding it displays the control’s symbol in the Dynamic Island, as well as its value (if present).

![A partial screenshot of Control Center on iPhone, highlighting that the Silent mode control is active, with a symbol of a bell with a line drawn through it and red tint.](https://docs-assets.developer.apple.com/published/414191a77f562b12876630f46e617663/control-control-center~dark%402x.png)

Control toggle in Control Center

![A partial screenshot of the bottom of the Lock Screen on iPhone, highlighting that the Silent mode control is active on the right, with a symbol of a bell with a line drawn through it and red tint.](https://docs-assets.developer.apple.com/published/5816024fd99021045fb28d4679157794/control-lock-screen~dark%402x.png)

Control toggle on the Lock Screen

![A partial screenshot that displays the Dynamic Island at the top of the Home Screen on iPhone, showing that the Silent mode control is active with a red tinted symbol of a bell with a line drawn through it in the leading area and red tinted text that says Silent in the trailing area.](https://docs-assets.developer.apple.com/published/c31bf6beef4943fb92f43a81568f53fc/control-dynamic-island~dark%402x.png)

Control toggle in the Dynamic Island performed from the Action button

## Best practices

**Offer controls for actions that provide the most benefit without having to launch your app.** For example, launching a Live Activity from a control creates an easy and seamless experience that informs someone about progress without having to navigate to your app to stay up to date. For guidance, see [Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities).

**Update controls when someone interacts with them, when an action completes, or remotely with a push notification.** Update the contents of a control to accurately reflect the state and show if an action is still in progress.

**Choose a descriptive symbol that suggests the behavior of the control.** Depending on where a person adds a control, it may not display the title and value, so the symbol needs to convey enough information about the control’s action. For control toggles, provide a symbol for both the on and off states. For example, use the SF Symbols `door.garage.open` and `door.garage.closed` to represent a control that opens and closes a garage door. For guidance, see [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

**Use symbol animations to highlight state changes.** For control toggles, animate the transition between both on and off states. For control buttons with actions that have a duration, animate indefinitely while the action performs and stop animating when the action is complete. For developer guidance, see [Symbols](https://developer.apple.com/documentation/Symbols) and [`SymbolEffect`](https://developer.apple.com/documentation/Symbols/SymbolEffect).

**Select a tint color that works with your app’s brand.** The system applies this tint color to a control toggle’s symbol in its on state. When a person performs the action of a control from the Action button, the system also uses this tint color to display the value and symbol in the Dynamic Island. For guidance, see [Branding](https://developer.apple.com/design/human-interface-guidelines/branding).

![An inactive control toggle with a light bulb symbol that isn't tinted.](https://docs-assets.developer.apple.com/published/1e5e0fcc2b10638b8f2aa7dc2a6015d2/control-lightbulb-not-tinted~dark%402x.png)

Nontinted control toggle in the off state

![An active control toggle with a light bulb symbol that's tinted yellow.](https://docs-assets.developer.apple.com/published/b958fd859678f2c2cd0d579b6dc2b4a2/control-lightbulb-tinted~dark%402x.png)

Tinted control toggle in the on state

**Help people provide additional information the system needs to perform an action.** A person may need to configure a control to perform a desired action — for example, select a specific light in a house to turn on and off. If a control requires configuration, prompt people to complete this step when they first add it. People can reconfigure the control at any time. For developer guidance, see [`promptsForUserConfiguration()`](https://developer.apple.com/documentation/SwiftUI/ControlWidgetConfiguration/promptsForUserConfiguration\(\)).

![A representation of a control with the ability to set an option to a value a person chooses.](https://docs-assets.developer.apple.com/published/34643dea3fdacca3f710da69a76746c6/control-configuration-options~dark%402x.png)

**Provide hint text for the Action button.** When a person presses the Action button, the system displays hint text to help them understand what happens when they press and hold. When someone presses and holds the Action button, the system performs the action configured to it. Use verbs to construct the hint text. For developer guidance, see [`controlWidgetActionHint(_:)`](https://developer.apple.com/documentation/SwiftUI/View/controlWidgetActionHint\(_:\)-5yoyh).

![A partial screenshot of the Home Screen on iPhone that displays hint text for the Action button. The hint text is Hold for Silent.](https://docs-assets.developer.apple.com/published/8a6bf0bbf6ff3459072d09e4030de874/controls-action-button-coaching-text-on~dark%402x.png)

![A partial screenshot of the Home Screen on iPhone that displays hint text for the Action button. The hint text is Hold for Ring.](https://docs-assets.developer.apple.com/published/a3bb3e8166bd0db2829e37726298cde7/controls-action-button-coaching-text-off~dark%402x.png)

**If your control title or value can vary, include a placeholder.** Placeholder information tells people what your control does when the title and value are situational. The system displays this information when someone brings up the controls gallery in Control Center or the Lock Screen and chooses your control, or before they assign it to the Action button.

**Hide sensitive information when the device is locked.** When the device is locked, consider having the system redact the title and value to hide personal or security-related information. Specify if the system needs to redact the symbol state as well. If specified, the system redacts the title and value, and displays the symbol in its off state.

![A medium-size control toggle displaying a symbol of a light bulb, a title, and value text.](https://docs-assets.developer.apple.com/published/7a4f06821c0d086aa7b093a4a10201e3/control-regular-text~dark%402x.png)

Control toggle with no information hidden

![A medium-size control toggle with redacted text.](https://docs-assets.developer.apple.com/published/7f7bf09ea15105deae2f3ccfbae83aed/control-redacted-text~dark%402x.png)

Control toggle with information hidden on a locked device

**Require authentication for actions that affect security.** For example, require people to unlock their device to access controls to lock or unlock the door to their house or start their car. For developer guidance, see [`IntentAuthenticationPolicy`](https://developer.apple.com/documentation/AppIntents/IntentAuthenticationPolicy).

## Camera experiences on a locked device

If your app supports camera capture, starting with iOS 18 you can create a control that launches directly to your app’s camera experience while the device is locked. For any task beyond capture, a person must authenticate and unlock their device to complete the task in your app. For developer guidance, see [LockedCameraCapture](https://developer.apple.com/documentation/LockedCameraCapture).

**Use the same camera UI in your app and your camera experience.** Sharing UI leverages people’s familiarity with the app. By using the same UI, the transition to the app is seamless when someone captures content and taps a button to perform additional tasks, such as posting to a social network or editing a photo.

**Provide instructions for adding the control.** Help people understand how to add the control that launches this camera experience.

## Platform considerations

*No additional considerations for iOS, iPadOS, or macOS. Not supported in watchOS, tvOS, or visionOS.*

## Resources

#### Related

[Widgets](https://developer.apple.com/design/human-interface-guidelines/widgets)

[Action button](https://developer.apple.com/design/human-interface-guidelines/action-button)

#### Developer documentation

[LockedCameraCapture](https://developer.apple.com/documentation/LockedCameraCapture)

[WidgetKit](https://developer.apple.com/documentation/WidgetKit)

## Change log

| Date | Changes |
| --- | --- |
| June 10, 2024 | New page. |

---
title: "Live Activities"
source: "https://developer.apple.com/design/human-interface-guidelines/live-activities"
author:
published:
created: 2026-06-11
description: "A Live Activity lets people track the progress of an activity, event, or task at a glance."
tags:
  - "clippings"
---
![A stylized representation of the Dynamic Island, in collapsed and expanded form, displaying the score of a live sporting event. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/8ba0fe15117b6dd1d412da83a589dd69/components-live-activities-intro~dark%402x.png)

Live Activities let people keep track of tasks and events in glanceable locations across devices. They go beyond push notifications, delivering frequent content and status updates over a few hours and letting people interact with the displayed information.

For example, a Live Activity might show the remaining time until a food delivery order arrives, live in-game information for a soccer match, or real-time fitness metrics and interactive controls to pause or cancel a workout.

Live Activities start on iPhone or iPad and automatically appear in system locations across a person’s devices:

| Platform or system experience | Location |
| --- | --- |
| iPhone and iPad | Lock Screen, Home Screen, in the Dynamic Island and StandBy on iPhone |
| Mac | The menu bar |
| Apple Watch | Smart Stack |
| CarPlay | CarPlay Dashboard |

## Anatomy

Live Activities appear across the system in various locations like the *Dynamic Island* and the Lock Screen. It serves as a unified home for alerts and indicators of ongoing activity. Depending on the device and system location where a Live Activity appears, the system chooses a *presentation* style or a combination of styles to compose the appearance of your Live Activity. As a result, your Live Activity must support:

In iOS and iPadOS, your Live Activity appears throughout the system using these presentations. Additionally, the system uses them to create default appearances for other contexts. For example, the compact presentation appears in the Dynamic Island on iPhone and consists of two elements that the system combines into a single view for Apple Watch and in CarPlay.

### Compact

In the Dynamic Island, the system uses the compact presentation when only one Live Activity is active. The presentation consists of two separate elements: one on the leading side of the TrueDepth camera and one on the trailing side. Despite its limited space, the compact presentation displays up-to-date information about your app’s Live Activity.

![An illustration that shows the compact leading and compact trailing views in the Dynamic Island.](https://docs-assets.developer.apple.com/published/8842ef88b9d7e812693e4ec5805548a9/type-compact~dark%402x.png)

For design guidance, see [Compact presentation](https://developer.apple.com/design/human-interface-guidelines/live-activities#Compact-presentation).

### Minimal

When multiple Live Activities are active, the system uses the minimal presentation to display two of them in the Dynamic Island. One appears attached to the Dynamic Island while the other appears detached. Depending on its content size, the detached minimal presentation appears circular or oval. As with the compact presentation, people tap the minimal presentation to open its app or touch and hold it to see the expanded presentation.

![An illustration that shows the minimal presentation in the Dynamic Island.](https://docs-assets.developer.apple.com/published/6383baab658f4749a808fbc4c0f832ff/type-minimal~dark%402x.png)

For design guidance, see [Minimal presentation](https://developer.apple.com/design/human-interface-guidelines/live-activities#Minimal-presentation).

### Expanded

When people touch and hold a Live Activity in compact or minimal presentation, the system displays the expanded presentation.

![An illustration that shows the expanded view in the Dynamic Island.](https://docs-assets.developer.apple.com/published/6d7ab5a4a34f45b1f3d5d69ecaf7d54e/type-expanded~dark%402x.png)

For design guidance, see [Expanded presentation](https://developer.apple.com/design/human-interface-guidelines/live-activities#Expanded-presentation).

### Lock Screen

The system uses the Lock Screen presentation to display a banner at the bottom of the Lock Screen. In this presentation, use a layout similar to the expanded presentation.

![A screenshot of a Live Activity on the Lock Screen of iPhone that supports the Dynamic Island.](https://docs-assets.developer.apple.com/published/e1443b50f756ca51b3e57ca9d6179672/live-activity-lock-screen~dark%402x.png)

When you alert people about Live Activity updates on devices that don’t support the Dynamic Island, the Lock Screen presentation briefly appears as a banner that overlays the Home Screen or other apps.

![A screenshot of a Live Activity that appears as a banner on the Home Screen of iPhone without Dynamic Island support.](https://docs-assets.developer.apple.com/published/d92cec1d6b142d5f2f11ff979b513f13/live-activity-notch~dark%402x.png)

For design guidance, see [Lock Screen presentation](https://developer.apple.com/design/human-interface-guidelines/live-activities#Lock-Screen-presentation).

### StandBy

On iPhone in StandBy, your Live Activity appears in the minimal presentation. When someone taps it, it transitions to the Lock Screen presentation, scaled up by 2x to fill the screen. If your Lock Screen presentation uses a custom background color, the system automatically extends it to the whole screen to create a seamless, full-screen design.

![An image that shows the Lock Screen presentation of a Live Activity in StandBy, scaled up by 2x, with a dotted border to indicate the 2x scaling of the Live Activity.](https://docs-assets.developer.apple.com/published/fbbd5973af16593f3fd5ee7a2ddbebf8/live-activity-standby-default-outline%402x.png)

For design guidance, see [StandBy presentation](https://developer.apple.com/design/human-interface-guidelines/live-activities#StandBy-presentation).

## Best practices

**Offer Live Activities for tasks and events that have a defined beginning and end.** Live Activities work best for tracking short to medium duration activities that don’t exceed eight hours.

**Focus on important information that people need to see at a glance.** Your Live Activity doesn’t need to display everything. Think about what information people find most useful and prioritize sharing it in a concise way. When a person wants to learn more, they can tap your Live Activity to open your app where you can provide additional detail.

**Don’t use a Live Activity to display ads or promotions**. Live Activities help people stay informed about ongoing events and tasks, so it’s important to display only information that’s related to those events and tasks.

**Avoid displaying sensitive information.** Live Activities are prominently visible and could be viewed by casual observers; for example, on the Lock Screen or in the Always-On display. For content people might consider sensitive or private, display an innocuous summary and let people tap the Live Activity to view the sensitive information in your app. Alternatively, redact views that may contain sensitive information and let people configure whether to show sensitive data. For developer guidance, see [Creating a widget extension](https://developer.apple.com/documentation/WidgetKit/Creating-a-Widget-Extension#Hide-sensitive-content).

**Create a Live Activity that matches your app’s visual aesthetic and personality in both dark and light appearances.** This makes it easier for people to recognize your Live Activity and creates a visual connection to your app.

**If you include a logo mark, display it without a container.** This better integrates the logo mark with your Live Activity layout. Don’t use the entire app icon.

**Don’t add elements to your app that draw attention to the Dynamic Island.** Your Live Activity appears in the Dynamic Island while your app isn’t in use, and other items can appear in the Dynamic Island when your app is open.

**Ensure text is easy to read.** Use large, heavier-weight text — a medium weight or higher. Use small text sparingly and make sure key information is legible at a glance.

![An illustration that shows text in the Dynamic Island that's small and difficult to read.](https://docs-assets.developer.apple.com/published/21bc46b06e1c88512a1759e9c8c6ac20/live-activities-text-incorrect-size~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration that shows text in the Dynamic Island with heavier weights and legible size.](https://docs-assets.developer.apple.com/published/d1fcd07a6cad125022602c426ac64c59/live-activities-text-correct-size~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

### Creating Live Activity layouts

**Adapt to different screen sizes and presentations.** Live Activities scale to fit various device screens. Create layouts and assets for various devices and scale factors, recognizing that the actual size on screen may vary or change. Ensure they look great everywhere by using the values in [Specifications](https://developer.apple.com/design/human-interface-guidelines/live-activities#Specifications) as guidance and providing appropriately sized content.

**Adjust element size and placement for efficient use of space.** Create a layout that only uses the space you need to clearly display its content. Adapt the size and placement of elements in your Live Activity so they fit well together.

**Use familiar layouts for custom views and layouts.** Templates with default system margins and recommended text sizes are available in [Apple Design Resources](https://developer.apple.com/design/resources/). Using them helps your Live Activity remain legible at a glance and fit in with the visual language of its surroundings; for example, the Smart Stack on Apple Watch.

![An illustration that shows content in the Dynamic Island with even margins.](https://docs-assets.developer.apple.com/published/94050cf8d781f41ecb996b751cf841a0/live-activities-margins~dark%402x.png)

**Use consistent margins and concentric placement.** Use even, matching margins between rounded shapes and the edges of the Live Activity, including corners, to ensure a harmonious fit. This prevents elements from poking into the rounded shape of the Live Activity and creating visual tension. For example, when placing a rounded rectangle near a corner of your Live Activity, match its corner radius to the outer corner radius of the Live Activity by subtracting the margin and using a SwiftUI container to apply the correct corner radius. For developer guidance, see [`ContainerRelativeShape`](https://developer.apple.com/documentation/SwiftUI/ContainerRelativeShape).

![An illustration a Live Activity that draws content to the edge of the Dynamic Island.](https://docs-assets.developer.apple.com/published/c50f7dd66c4ac7363bc03feb2456179f/live-activities-rounded-shapes~dark%402x.png)

Keep content compact and snug within a margin that’s concentric to the outer edge of the Live Activity.

![An illustration that shows how a Live Activity places an icon too far from the edge of the Dynamic Island.](https://docs-assets.developer.apple.com/published/9e8dbec5f93a6eac71a176bfe92c1326/live-activities-content-incorrect-position~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration that shows how a Live Activity places an icon close to the edge of the Dynamic Island without poking into the rounded shape of the Dynamic Island.](https://docs-assets.developer.apple.com/published/dafb12ebe6d0a35d94b3665425873664/live-activities-content-correct-position~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

**When separating a block of content, place it in an inset container shape or use a thick line.** Don’t draw content all the way to the edge of the Dynamic Island.

![An illustration that shows how a Live Activity draws content all the way to the edge of the Dynamic Island to separate content.](https://docs-assets.developer.apple.com/published/28f7fb5a500e05d773de00ee227445c4/live-activities-separating-content-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration of a Live Activity with content in an inset, rounded shape to group it together.](https://docs-assets.developer.apple.com/published/31c13f5df91af6cb13374f593ec49b26/live-activities-separating-content-pill~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

![An illustration of a Live Activity that uses a line to separate a block of content.](https://docs-assets.developer.apple.com/published/d26026e45d5a8997067d51ea433b953d/live-activities-separating-content-separator~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

![An illustration that shows a Live Activity with blurred text that's too far from the edge of the Dynamic Island.](https://docs-assets.developer.apple.com/published/7f0f99ab4f5a73ea22d6e2be4b1fd340/live-activities-blur-content-incorrect-position~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration that shows a Live Activity with blurred text that's close to the edge of the Dynamic Island without poking into the rounded shape of the Dynamic Island.](https://docs-assets.developer.apple.com/published/d1bac863510cac2bad31acdb74c204cf/live-activities-blur-content-correct-position~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

**Dynamically change the height of your Live Activity on the Lock Screen or in the expanded presentation.** When there’s less information to show, reduce the height of the Live Activity to only use the space needed for the content. When more information becomes available, increase the height to display additional content. For example, a rideshare app might display a more compact Live Activity without additional details while it locates a driver. The app’s height extends as more information is available to display the estimated pickup time, driver details, and so on.

### Choosing colors

**Carefully consider using a custom background color and opacity.** You can’t customize background colors for compact, minimal, and expanded presentations. However, you can use a custom background color for the Lock Screen presentation. If you set a custom background color or image for the Lock Screen presentation, ensure sufficient contrast — especially for tint colors on devices that feature an Always-On display with reduced luminance.

**Use color to express the character and identity of your app.** Live Activities in the Dynamic Island use a black opaque background. Consider using bold colors for text and objects to convey the personality and brand of your app. Bold colors make your Live Activity recognizable at a glance, stand out from other Live Activities, and feel like a small, glanceable part of your app. Additionally, bold colors can help reinforce the relationship between elements in the Live Activity itself.

**Tint your Live Activity’s key line color so that it matches your content.** When the background is dark — for example, in Dark Mode — a key line appears around the Dynamic Island to distinguish it from other content. Choose a key line color that’s consistent with the color of other elements in your Live Activity. For developer guidance, see [Creating custom views for Live Activities](https://developer.apple.com/documentation/ActivityKit/creating-custom-views-for-live-activities#Use-custom-colors).

### Adding transitions and animating content updates

In addition to extending and contracting transitions, Live Activities use system and custom animations with a maximum duration of two seconds. Note that the system doesn’t perform animations on Always-On displays with reduced luminance.

**Use animations to reinforce the information you’re communicating and to bring attention to updates.** In addition to moving the position of elements, you can animate elements in and out with the default content-replace transition, or create custom transitions using scale, opacity, and movement. For example, a sports app might use numeric content transitions for score changes or fade a timer in and out when it reaches zero.

**Animate layout changes.** Content updates can require a change to your Live Activity layout — for example, when it expands to fill the screen in StandBy or when more information becomes available. During the transition to a new layout, preserve as much of the existing layout as possible by animating existing elements to their new positions rather than removing and animating them back in.

**Try to avoid overlapping elements.** Sometimes, it’s best to animate out certain elements and then re-animate them in at a new position to avoid colliding with other parts of your transition. For example, when animating items in lists, only animate the element that moves to a new position and use fade-in-and-out transitions for the other list items.

For developer guidance, see [Animating data updates in widgets and Live Activities](https://developer.apple.com/documentation/WidgetKit/Animating-data-updates-in-widgets-and-live-activities).

### Offering interactivity

**Make sure tapping the Live Activity opens your app at the right location.** Take people directly to related details and actions — don’t make them navigate to find relevant information. For developer guidance on SwiftUI views that support deep linking to specific screens, see [Linking to specific app scenes from your widget or Live Activity](https://developer.apple.com/documentation/WidgetKit/Linking-to-specific-app-scenes-from-your-widget-or-Live-Activity).

**Focus on simple, direct actions.** Buttons or toggles take up space that might otherwise display useful information. Only include interactive elements for essential functionality that’s directly related to your Live Activity and that people activate once or temporarily pause and resume, like music playback, workouts, or apps that access the microphone to record live audio. If you offer interactivity, prefer limiting it to a single element to help people avoid accidentally tapping the wrong control.

**Consider letting people respond to event or progress updates.** If an update to your Live Activity is something that a person could respond to, consider offering a button or toggle to let people take action. For example, the Live Activity of a rideshare app could include a button to contact the driver while waiting for a ride to arrive.

### Starting, updating, and ending a Live Activity

**Start Live Activities at appropriate times, and make it easy for people to turn them off in your app.** People expect Live Activities to start and provide important updates for a task at hand or at specific times, even automatically. For example, they might expect a Live Activity to start after a food order, making a rideshare request, or when their favorite sports team’s match begins. However, Live Activities that appear unexpectedly can be surprising or even unwanted. Consider offering controls that allow people to turn off a Live Activity in the app view that corresponds to the activity. For example, a sports app may offer a button that lets people unfollow a game or team. When people can’t easily control the appearance of Live Activities from your app, they may choose to turn off Live Activities in Settings altogether.

**Offer an App Shortcut that starts your Live Activity.** App Shortcuts expose functionality to the system, allowing access in various contexts. For example, create an App Shortcut that allows people to start your Live Activity using the Action button on iPhone. For more information, see [App Shortcuts](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts).

**Update a Live Activity only when new content is available.** If the underlying content or status remains the same, maintain the same display until the underlying content or status changes.

**Alert people only for essential updates that require their attention.** Live Activity alerts light up the screen and by default play the notification sound to alert people about updates they shouldn’t miss. Alerts also show the expanded presentation in the Dynamic Island or a banner on devices that don’t support the Dynamic Island. To ensure your Live Activities provide the most value, avoid alerting people too often or with updates that aren’t crucial, and don’t use push notifications alongside Live Activities for the same updates.

**Let people track multiple events efficiently with a single Live Activity.** Instead of creating separate Live Activities people need to jump between to track different events, prefer a single Live Activity that uses a dynamic layout and rotates through events. For example, a sports app could offer a single Live Activity that cycles through scored points, substitutions, and fouls across multiple matches.

**Always end a Live Activity immediately when the task or event ends, and consider setting a custom dismissal time.** When a Live Activity ends, the system immediately removes it from the Dynamic Island and in CarPlay. On the Lock Screen, in the Mac menu bar, and the watchOS Smart Stack, it remains for up to four hours. Depending on the Live Activity, showing a summary may only be relevant for a brief time after it ends. Consider choosing a custom dismissal time that’s proportional to the duration of your Live Activity. In most cases, 15 to 30 minutes is adequate. For example, a rideshare app could end its Live Activity when a ride completes and remain visible for 30 minutes to allow people to view the ride summary and leave a tip. For developer guidance, refer to [Displaying live data with Live Activities](https://developer.apple.com/documentation/ActivityKit/displaying-live-data-with-live-activities#End-the-Live-Activity).

## Presentation

Your Live Activity needs to support all locations, devices, and their corresponding appearances. Because it appears across systems at different dimensions, create Live Activity layouts that best support each place they appear.

**Start with the iPhone design, then refine it for other contexts.** Create standard designs for each presentation first. Then, depending on the functionality that your Live Activity provides, design additional custom layouts for specific contexts like iPhone in StandBy, CarPlay, or Apple Watch. For more information about custom layouts, refer to [StandBy](https://developer.apple.com/design/human-interface-guidelines/live-activities#StandBy), [CarPlay](https://developer.apple.com/design/human-interface-guidelines/live-activities#CarPlay), and [watchOS](https://developer.apple.com/design/human-interface-guidelines/live-activities#watchOS).

### Compact presentation

**Focus on the most important information.** Use the compact presentation to show dynamic, up-to-date information that’s essential to the Live Activity and easy to understand. For example, a sports app could display two team logos and the score.

**Ensure unified information and design of the compact presentations in the Dynamic Island.** Though the TrueDepth camera separates the leading and trailing elements, design them to read as a single piece of information, and use consistent color and typography to help create a connection between both elements.

**Keep content as narrow as possible and ensure it’s snug against the TrueDepth camera.** Try not to obscure key information in the status bar, and don’t add padding between content and the TrueDepth camera. Maintain a balanced layout with similarly sized views for both leading and trailing elements; for example, use shortened units or less precise data to maintain appropriate width and balance.

![An illustration that shows a compact presentation that appears unbalanced and too wide because it uses padding around the TrueDepth camera.](https://docs-assets.developer.apple.com/published/4488822ad2ae17bab7390c48f15b786d/live-activities-unbalanced-content~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration that shows a compact presentation that’s snug around the TrueDepth camera.](https://docs-assets.developer.apple.com/published/5079b0f816bcc75ae00c82e6d0029ba0/live-activities-balanced-content~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

**Link to relevant app content.** When people tap a compact Live Activity, open your app directly to the related details. Ensure both leading and trailing elements link to the same screen.

### Minimal presentation

**Ensure that your Live Activity is recognizable in the minimal presentation.** If possible, display updated information rather than just a logo, while ensuring people can quickly recognize your app. For example, the Timer app’s minimal Live Activity presentation displays the remaining time instead of a static icon.

### Expanded presentation

**Maintain the relative placement of elements to create a coherent layout between presentations.** The expanded presentation is an enlarged version of the compact or minimal presentation. Ensure information and layouts expand predictably when the Live Activity expands.

**Wrap content tightly around the TrueDepth camera.** Arrange content close to the TrueDepth camera, and try to avoid leaving too much room around it to use space more efficiently and to help diminish the camera’s presence.

![An illustration that shows an expanded presentation of a Live Activity that leaves empty space next to the TrueDepth camera.](https://docs-assets.developer.apple.com/published/e3cf0bd0bec9610afeae644ebeeb2894/live-activities-layout-incorrect~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration that shows an expanded presentation of a Live Activity that uses the space next to the TrueDepth camera.](https://docs-assets.developer.apple.com/published/f7a0f758400e9d1d6f4138baf24bde85/live-activities-layout-correct~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

### Lock Screen presentation

**Don’t replicate notification layouts.** Create a unique layout that’s specific to the information that appears in the Live Activity.

**Choose colors that work well on a personalized Lock Screen.** People customize their Lock Screen with wallpapers, custom tint colors, and widgets. To make a Live Activity fit a custom Lock Screen aesthetic while remaining legible, use custom background or tint colors and opacity sparingly.

**Make sure your design, assets, and colors look great and offer enough contrast in Dark Mode and on an Always-On display.** By default, a Live Activity on the Lock Screen uses a light background color in the light appearance and a dark background color in the dark appearance. If you use a custom background color, choose a color that works well in both modes or a different color for each appearance. Verify your choices on a device with an Always-On display with reduced luminance because the system adapts colors as needed in this appearance. For guidance, see [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode) and [Always On](https://developer.apple.com/design/human-interface-guidelines/always-on); for developer guidance, see [About asset catalogs](https://help.apple.com/xcode/mac/current/#/dev10510b1f7).

**Verify the generated color of the dismiss button.** The system automatically generates a matching dismiss button based on the background and foreground colors of your Live Activity. Verify that the generated color matches your design and adjust it if needed using [`activitySystemActionForegroundColor(_:)`](https://developer.apple.com/documentation/SwiftUI/View/activitySystemActionForegroundColor\(_:\)).

**Use standard margins to align your design with notifications.** The standard layout margin for Live Activities on the Lock Screen is 14 points. While tighter margins may be appropriate for elements like graphics or buttons, avoid crowding the edges and creating a cluttered appearance. For developer guidance, see [`padding(_:_:)`](https://developer.apple.com/documentation/SwiftUI/View/padding\(_:_:\)).

### StandBy presentation

**Update your layout for StandBy.** Make sure assets look great at the larger scale, and consider creating a custom layout that makes use of the extra space. For developer guidance, see [Creating custom views for Live Activities](https://developer.apple.com/documentation/ActivityKit/creating-custom-views-for-live-activities).

**Consider using the default background color in StandBy.** The default background color seamlessly blends your Live Activity with the device bezel, achieves a softer look that integrates with a person’s surroundings, and allows the system to scale the Live Activity slightly larger because it doesn’t need to account for the margins around the TrueDepth camera.

**Use standard margins and avoid extending graphic elements to the edge of the screen.** Without standard margins, content gets cut off as the Live Activity extends, making it feel broken.

**Verify your design in Night Mode.** In Night Mode, the system applies a red tint to your Live Activity. Check that your Live Activity design uses colors that provide enough contrast in Night Mode.

![A Live Activity, scaled to fill the screen on iPhone in StandBy.](https://docs-assets.developer.apple.com/published/c7f65b20bec28281075a61264019fe50/live-activity-standby-night-mode%402x.png)

## CarPlay

In CarPlay, the system automatically combines the leading and trailing elements of the compact presentation into a single layout that appears on CarPlay Dashboard.

Your Live Activity design applies to both CarPlay and Apple Watch, so design for both contexts. While Live Activities on Apple Watch can be interactive, the system deactivates interactive elements in CarPlay. For more information, refer to [watchOS](https://developer.apple.com/design/human-interface-guidelines/live-activities#watchOS) below. For developer guidance, refer to [Creating custom views for Live Activities](https://developer.apple.com/documentation/ActivityKit/creating-custom-views-for-live-activities).

**Consider creating a custom layout if your Live Activity would benefit from larger text or additional information.** Instead of using the default appearance in CarPlay, declare support for a [`ActivityFamily.small`](https://developer.apple.com/documentation/WidgetKit/ActivityFamily/small) supplemental activity family.

**Carefully consider including buttons or toggles in your custom layout.** In CarPlay, the system deactivates interactive elements in your Live Activity. If people are likely to start or observe your Live Activity while driving, prefer displaying timely content rather than buttons and toggles.

## Platform considerations

*No additional considerations for iOS or iPadOS. Not supported in tvOS or visionOS.*

### macOS

Active Live Activities automatically appear in the Menu bar of a paired Mac using the compact, minimal, and expanded presentations. Clicking the Live Activity launches iPhone Mirroring to display your app.

### watchOS

When a Live Activity begins on iPhone, it appears on a paired Apple Watch at the top of the Smart Stack. By default, the view displayed in the Smart Stack combines the leading and trailing elements from the Live Activity’s compact presentation on iPhone.

If you offer a watchOS app and someone taps the Live Activity in the Smart Stack, it opens your watchOS app. Without a watchOS app, tapping opens a full-screen view with a button to open your app on the paired iPhone.

**Consider creating a custom watchOS layout.** While the system provides a default view automatically, a custom layout designed for Apple Watch can show more information and add interactive functionality like a button or toggle.

**Carefully consider including buttons or toggles in your custom layout.** The custom watchOS layout also applies to your Live Activity in CarPlay where the system deactivates interactive elements. If people are likely to start or observe your Live Activity while driving, don’t include buttons or toggles in your custom watchOS layout. For developer guidance, see [Creating custom views for Live Activities](https://developer.apple.com/documentation/ActivityKit/creating-custom-views-for-live-activities).

![An illustration that shows the compact presentation of a Live Activity in the Dynamic Island on iPhone.](https://docs-assets.developer.apple.com/published/481b75d356054b0d5720523718230c72/live-activities-ios-dynamic-island-default~dark%402x.png)

iPhone compact view

![An illustration that shows the automatically generated default presentation of a Live Activity in a Smart Stack view, with the leading and trailing elements from the iPhone compact view spaced apart in the lower corners.](https://docs-assets.developer.apple.com/published/2eb864dc6317a167b8b171711c65cc28/live-activity-watch-default-implementation~dark%402x.png)

Default Smart Stack view

![An illustration that shows a custom presentation of a Live Activity in a Smart Stack view, with a balanced design that shows a graphical countdown timer balanced with explanatory text.](https://docs-assets.developer.apple.com/published/39c4ee7d3f3f041f95247a80fcd96af5/live-activity-watch-custom-implementation~dark%402x.png)

Custom Smart Stack view

**Focus on essential information and significant updates.** Use space in the Smart Stack as efficiently as possible and think of the most useful information that a Live Activity can convey:

- Progress, like the estimated arrival time of a delivery
- Interactive elements, like stopwatch or timer controls
- Significant updates, like sports score changes

## Specifications

When you design your Live Activities, use the following values for guidance.

### CarPlay dimensions

The system may scale your Live Activity to best fit a vehicle’s screen size and resolution. Use the listed values to verify your design:

| Live Activity size (pt) |
| --- |
| 240x78 |
| 240x100 |
| 170x78 |

Test your designs with the CarPlay simulator and the following configurations for Smart Display Zoom — available in in Settings > Display in CarPlay:

| Configuration | Resolution (pt) |
| --- | --- |
| Widescreen | 1920x720 |
| Portrait | 900x1200 |
| Standard | 800x480 |

### iOS dimensions

All values listed in the tables below are in points.

| Screen dimensions (portrait) | Compact leading | Compact trailing | Minimal (width given as a range) | Expanded (height given as a range) | Lock Screen (height given as a range) |
| --- | --- | --- | --- | --- | --- |
| 430x932 | 62.33x36.67 | 62.33x36.67 | 36.67–45x36.67 | 408x84–160 | 408x84–160 |
| 393x852 | 52.33x36.67 | 52.33x36.67 | 36.67–45x36.67 | 371x84–160 | 371x84–160 |

The Dynamic Island uses a corner radius of 44 points, and its rounded corner shape matches the TrueDepth camera.

| Presentation type | Device | Dynamic Island width (pt) |
| --- | --- | --- |
| Compact or minimal | iPhone 17 Pro Max | 250 |
|  | iPhone 17 Pro | 230 |
|  | iPhone Air | 250 |
|  | iPhone 17 | 230 |
|  | iPhone 16 Pro Max | 250 |
|  | iPhone 16 Pro | 230 |
|  | iPhone 16 Plus | 250 |
|  | iPhone 16 | 230 |
|  | iPhone 15 Pro Max | 250 |
|  | iPhone 15 Pro | 230 |
|  | iPhone 15 Plus | 250 |
|  | iPhone 15 | 230 |
|  | iPhone 14 Pro Max | 250 |
|  | iPhone 14 Pro | 230 |
| Expanded | iPhone 17 Pro Max | 408 |
|  | iPhone 17 Pro | 371 |
|  | iPhone Air | 408 |
|  | iPhone 17 | 371 |
|  | iPhone 16 Pro Max | 408 |
|  | iPhone 16 Pro | 371 |
|  | iPhone 16 Plus | 408 |
|  | iPhone 16 | 371 |
|  | iPhone 15 Pro Max | 408 |
|  | iPhone 15 Pro | 371 |
|  | iPhone 15 Plus | 408 |
|  | iPhone 15 | 371 |
|  | iPhone 14 Pro Max | 408 |
|  | iPhone 14 Pro | 371 |

### iPadOS dimensions

All values listed in the table below are in points.

| Screen dimensions (portrait) | Lock Screen (height given as a range) |
| --- | --- |
| 1366x1024 | 500x84–160 |
| 1194x834 | 425x84–160 |
| 1012x834 | 425x84–160 |
| 1080x810 | 425x84–160 |
| 1024x768 | 425x84–160 |

### macOS dimensions

Use the provided iOS dimensions.

### watchOS dimensions

Live Activities in the Smart Stack use the same dimensions as watchOS widgets.

| Apple Watch size | Size of a Live Activity in the Smart Stack (pt) |
| --- | --- |
| 40mm | 152x69.5 |
| 41mm | 165x72.5 |
| 44mm | 173x76.5 |
| 45mm | 184x80.5 |
| 49mm | 191x81.5 |

## Resources

#### Developer documentation

[ActivityKit](https://developer.apple.com/documentation/ActivityKit)

[SwiftUI](https://developer.apple.com/documentation/SwiftUI)

[WidgetKit](https://developer.apple.com/documentation/WidgetKit)

[Developing a WidgetKit strategy](https://developer.apple.com/documentation/WidgetKit/Developing-a-WidgetKit-strategy) — WidgetKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| December 16, 2025 | Updated guidance for all platforms, and added guidance for macOS and CarPlay. |
| June 10, 2024 | Added guidance for Live Activities in watchOS. |
| October 24, 2023 | Expanded and updated guidance and added new artwork. |
| June 5, 2023 | Updated guidance to include features of iOS 17 and iPadOS 17. |
| November 3, 2022 | Updated artwork and specifications. |
| September 23, 2022 | New page. |

---
title: "Notifications"
source: "https://developer.apple.com/design/human-interface-guidelines/notifications"
author:
published:
created: 2026-06-11
description: "A notification gives people timely, high-value information they can understand at a glance."
tags:
  - "clippings"
---
![A stylized representation of a notification mockup. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/a91ef4486438f9d6ccaf9811fbe8f45c/components-notification-intro~dark%402x.png)

Before you can send any notifications to people, you have to get their consent (for developer guidance, see [Asking permission to use notifications](https://developer.apple.com/documentation/UserNotifications/asking-permission-to-use-notifications)). After agreeing, people generally use settings to specify the styles of notification they want to receive, and to specify delivery times for notifications that have different levels of urgency. To learn more about the ways people can customize the notification experience, see [Managing notifications](https://developer.apple.com/design/human-interface-guidelines/managing-notifications).

## Anatomy

Depending on the platform, a notification can use various styles, such as:

- A banner or view on a Lock Screen, Home Screen, Home View, or desktop
- A badge on an app icon
- An item in Notification Center

In addition, a notification related to direct communication — like a phone call or message — can provide an interface that’s distinct from noncommunication notifications, featuring prominent contact images (or *avatars*) and group names instead of the app icon.

## Best practices

**Provide concise, informative notifications.** People turn on notifications to get quick updates, so you want to provide valuable information succinctly.

**Avoid sending multiple notifications for the same thing, even if someone hasn’t responded.** People attend to notifications at their convenience. If you send multiple notifications for the same thing, you fill up Notification Center, and people may turn off all notifications from your app.

**Avoid sending a notification that tells people to perform specific tasks within your app.** If it makes sense to offer simple tasks that people can perform without opening your app, you can provide [notification actions](https://developer.apple.com/design/human-interface-guidelines/notifications#Notification-actions). Otherwise, avoid telling people what to do because it’s hard for people to remember such instructions after they dismiss the notification.

**Use an alert — not a notification — to display an error message.** People are familiar with both alerts and notifications, so you don’t want to cause confusion by using the wrong component. For guidance, see [Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts).

**Handle notifications gracefully when your app is in the foreground.** Your app’s notifications don’t appear when your app is in the front, but your app still receives the information. In this scenario, present the information in a way that’s discoverable but not distracting or invasive, such as incrementing a badge or subtly inserting new data into the current view. For example, when a new message arrives in a mailbox that people are currently viewing, Mail simply adds it to the list of unread messages because sending a notification about it would be unnecessary and distracting.

**Avoid including sensitive, personal, or confidential information in a notification.** You can’t predict what people will be doing when they receive a notification, so it’s essential to avoid including private information that could be visible to others.

## Content

When a notification includes a title, the system displays it at the top where it’s most visible. In a notification related to direct communication, the system automatically displays the sender’s name in the title area; in a noncommunication notification, the system displays your app name if you don’t provide a title.

**Create a short title if it provides context for the notification content.** Prefer brief titles that people can read at a glance, especially on Apple Watch, where space is limited. When possible, take advantage of the prominent notification title area to provide useful information, like a headline, event name, or email subject. If you can only provide a generic title for a noncommunication notification — like New Document — it can be better to let the system display your app name instead. Use title-style [capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64) and no ending punctuation.

**Write succinct, easy-to-read notification content.** Use complete sentences, sentence case, and proper punctuation, and don’t truncate your message — the system does this automatically when necessary.

**Provide generically descriptive text to display when notification previews aren’t available.** In Settings, people can choose to hide notification previews for all apps. In this situation, the system shows only your app icon and the default title *Notification*. To give people sufficient context to know whether they want to view the full notification, write body text that succinctly describes the notification content without revealing too many details, like “Friend request,” “New comment,” “Reminder,” or “Shipment” (for developer guidance, see [`hiddenPreviewsBodyPlaceholder`](https://developer.apple.com/documentation/UserNotifications/UNNotificationCategory/hiddenPreviewsBodyPlaceholder)). Use sentence-style [capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64) for this text.

**Avoid including your app name or icon.** The system automatically displays a large version of your app icon at the leading edge of each notification; in a communication notification, the system displays the sender’s contact image badged with a small version of your icon.

**Consider providing a sound to supplement your notifications.** Sound can be a great way to distinguish your app’s notifications and get someone’s attention when they’re not looking at the device. You can create a custom sound that coordinates with the style of your app or use a system-provided alert sound. If you use a custom sound, make sure it’s short, distinctive, and professionally produced. A notification sound can enhance the user experience, but don’t rely on it to communicate important information, because people may not hear it. Although people might also want a vibration to accompany alert sounds, you can’t provide such a vibration programmatically. For developer guidance, see [`UNNotificationSound`](https://developer.apple.com/documentation/UserNotifications/UNNotificationSound).

## Notification actions

A notification can present a customizable detail view that contains up to four buttons people use to perform actions without opening your app. For example, a Calendar event notification provides a Snooze button that postpones the event’s alarm for a few minutes. For developer guidance, see [Handling notifications and notification-related actions](https://developer.apple.com/documentation/UserNotifications/handling-notifications-and-notification-related-actions).

**Provide beneficial actions that make sense in the context of your notification.** Prefer actions that let people perform common, time-saving tasks that eliminate the need to open your app. For each button, use a short, title-case term or phrase that clearly describes the result of the action. Don’t include your app name or any extraneous information in the button label, keep the text brief to avoid truncation, and take localization into account as you write it.

**Avoid providing an action that merely opens your app.** When people tap a notification or its preview, they expect your app to display related content, so presenting an action button that does the same thing clutters the detail view and can be confusing.

**Prefer nondestructive actions.** If you must provide a destructive action, make sure people have enough context to avoid unintended consequences. The system gives a distinct appearance to the actions you identify as destructive.

**Provide a simple, recognizable interface icon for each notification action.** An interface icon reinforces an action’s meaning, helping people instantly understand what it does. The system displays your interface icon on the trailing side of the action title. When you use [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), you can choose an existing symbol that represents your command or edit a related symbol to create a custom icon.

## Badging

A badge is a small, filled oval containing a number that can appear on an app icon to indicate the number of unread notifications that are available. After people address unread notifications, the badge disappears from the app icon, reappearing when new notifications arrive. People can choose whether to allow an app to display badges in their notification settings.

**Use a badge only to show people how many unread notifications they have.** Don’t use a badge to convey numeric information that isn’t related to notifications, such as weather-related data, dates and times, stock prices, or game scores.

**Make sure badging isn’t the only method you use to communicate essential information.** People can turn off badging for your app, so if you rely on it to show people when there’s important information, people can miss the message. Always make sure that you make important information easy for people to find as soon as they open your app.

**Keep badges up to date.** Update your app’s badge as soon as people open the corresponding notifications. You don’t want people to think there are new notifications available, only to find that they’ve already viewed them all. Note that reducing a badge’s count to zero removes all related notifications from Notification Center.

**Avoid creating a custom image or component that mimics the appearance or behavior of a badge.** People can turn off notification badges if they choose, and will become frustrated if they have done so and then see what appears to be a badge.

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, tvOS, or visionOS.*

### watchOS

On Apple Watch, notifications occur in two stages: *short look* and *long look*. People can also view notifications in Notification Center. On supported devices, people can double-tap to respond to notifications.

You can help people have a great notification experience by designing app-specific assets and actions that are relevant on Apple Watch. If your watchOS app has an iPhone companion that supports notifications, watchOS can automatically provide default short-look and long-look interfaces if necessary.

#### Short looks

A short look appears when the wearer’s wrist is raised and disappears when it’s lowered.

![An illustration that represents a short look notification from a generic app. It includes a large primary image in the center, a title, and a short preview of the notification content.](https://docs-assets.developer.apple.com/published/609f4ae816d78b5c87a340416f4874a9/notifications-short-looks%402x.png)

**Avoid using a short look as the only way to communicate important information.** A short look appears only briefly, giving people just enough time to see what the notification is about and which app sent it. If your notification information is critical, make sure you deliver it in other ways, too.

**Keep privacy in mind.** Short looks are intended to be discreet, so it’s important to provide only basic information. Avoid including potentially sensitive information in the notification’s title.

#### Long looks

Long looks provide more detail about a notification. If necessary, people can swipe vertically or use the Digital Crown to scroll a long look. After viewing a long look, people can dismiss it by tapping it or simply by lowering their wrist.

![An illustration that represents a long look notification from a generic app. It includes a small primary image in the upper left corner, badging a platter with the notification title and content. Beneath the notification are two full width action buttons, the second of which extends off the screen to indicate that the view is scrollable.](https://docs-assets.developer.apple.com/published/a48f434c960e0f14429018803ee4b180/notifications-long-looks%402x.png)

A custom long-look interface can be static or dynamic. The *static* interface lets you display a notification’s message along with additional static text and images. The *dynamic* interface gives you access to the notification’s full content and offers more options for configuring the appearance of the interface.

You can customize the content area for both static and dynamic long looks, but you can’t change the overall structure of the interface. The system-defined structure includes a *sash* at the top of the interface and a Dismiss button at the bottom, below all custom buttons.

**Consider using a rich, custom long-look notification to let people get the information they need without launching your app.** You can use SwiftUI [Animations](https://developer.apple.com/documentation/SwiftUI/Animations) to create engaging, interruptible animations; alternatively, you can use [SpriteKit](https://developer.apple.com/documentation/SpriteKit) or [SceneKit](https://developer.apple.com/documentation/SceneKit).

**At the minimum, provide a static interface; prefer providing a dynamic interface too.** The system defaults to the static interface when the dynamic interface is unavailable, such as when there is no network or the iPhone companion app is unreachable. Be sure to create the resources for your static interface in advance and package them with your app.

**Choose a background appearance for the sash.** The system-provided sash, at the top of the long-look interface, displays your app icon and name. You can customize the sash’s color or give it a blurred appearance. If you display a photo at the top of the content area, you’ll probably want to use the blurred sash, which has a light, translucent appearance that gives the illusion of overlapping the image.

**Choose a background color for the content area.** By default, the long look’s background is transparent. If you want to match the background color of other system notifications, use white with 18% opacity; otherwise, you can use a custom color, such as a color within your brand’s palette.

**Provide up to four custom actions below the content area.** For each long look, the system uses the notification’s type to determine which of your custom actions to display as buttons in the notification UI. In addition, the system always displays a Dismiss button at the bottom of the long-look interface, below all custom buttons. If your watchOS app has an iPhone companion that supports notifications, the system shares the actionable notification types already registered by your iPhone app and uses them to configure your custom action buttons.

#### Double tap

People can double-tap to respond to notifications on supported devices. When a person responds to a notification with a double tap, the system selects the first nondestructive action as the response.

**Keep double tap in mind when choosing the order of custom actions you present as responses to a notification.** Because a double tap runs the first nondestructive action, consider placing the action that people use most frequently at the top of the list. For example, a parking app that provides custom actions for extending the time on a paid parking spot could offer options to extend the time by 5 minutes, 15 minutes, or an hour, with the most common choice listed first.

## Resources

#### Related

[Managing notifications](https://developer.apple.com/design/human-interface-guidelines/managing-notifications)

[Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)

#### Developer documentation

[Asking permission to use notifications](https://developer.apple.com/documentation/UserNotifications/asking-permission-to-use-notifications) — User Notifications

[User Notifications UI](https://developer.apple.com/documentation/UserNotificationsUI)

[User Notifications](https://developer.apple.com/documentation/UserNotifications)

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| October 24, 2023 | Updated watchOS platform considerations with guidance for presenting notification responses to double tap. |

---
title: "Snippets"
source: "https://developer.apple.com/design/human-interface-guidelines/snippets"
author:
published:
created: 2026-06-11
description: "When someone performs a task with Siri or an App Shortcut, a snippet shows the result or asks for confirmation."
tags:
  - "clippings"
---
![A stylized representation of a snippet, showing a proposed date and time for a Calendar event along with a Done button. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/d12ea96eeb0f77aadad84df962336653/components-snippets-intro~dark%402x.png)

Snippets are compact views that appear in response to an action that someone takes using [Siri](https://developer.apple.com/design/human-interface-guidelines/siri), Spotlight, or the Shortcuts app.

You can present a snippet related to one of your app’s actions by including it with an [app intent](https://developer.apple.com/documentation/AppIntents) that you design to meet the specific needs of a task. For example, you might design a snippet for checking the weather forecast or updating progress toward a daily goal.

There are two snippet types: confirmation and result. A *confirmation* snippet lets people confirm or cancel an action, and may include options that affect the result. By contrast, a *result* snippet provides information — possibly as the outcome of a confirmation — that doesn’t require further action. An app intent that displays a snippet always shows a result, while the confirmation step is optional.

![A partial screenshot showing a confirmation snippet on iPhone. The snippet includes an order summary at the top, with a Cancel button and an Order button at the bottom for the person to cancel or confirm the order.](https://docs-assets.developer.apple.com/published/1517ef7bb2890797c7a3ce9787311a8b/snippets-confirmation-type~dark%402x.png)

A confirmation snippet requires additional input to proceed.

![A partial screenshot showing a result snippet on iPhone. The snippet includes an order status and shipping date at the top, with a Done button at the bottom for the person to dismiss the snippet.](https://docs-assets.developer.apple.com/published/a9fccd54637d13c0aeea5466dcf03569/snippets-result-type~dark%402x.png)

A result snippet provides information without requiring further action.

For developer guidance, see [Displaying static and interactive snippets](https://developer.apple.com/documentation/AppIntents/displaying-static-and-interactive-snippets).

## Anatomy

A snippet consists of the following elements:

- **Dialogue.** The app intent dialogue that Siri speaks to communicate the snippet’s information. The system includes the dialogue text by default and places it above the custom view.
- **Custom view.** A view that visually communicates the snippet’s information. A custom view can include one or more buttons for modifying the content of the snippet, getting more information, or taking another action.
- **System-provided button(s).** A confirmation snippet includes two system-provided buttons under the custom view: a secondary Cancel button and a primary button with a customizable label. A result snippet includes a single Done button that dismisses the view.

![An illustration of a snippet's anatomy. The dialogue appears at the top of the snippet. The custom view appears in the middle, with a maximum height of 400 pt. Two system-provided buttons appear at the bottom: the secondary button on the left and the primary button on the right.](https://docs-assets.developer.apple.com/published/57d8967f313d760014db87e0da96b9b9/snippets-custom-view-layout~dark%402x.png)

## Best practices

**Ensure legibility.** Check for sufficient contrast between the snippet’s custom content and the system-provided background in both light and dark appearances, and keep consistent margins for the content within the view. This clarifies the layout and helps people interpret the snippet quickly and reliably.

**Keep content concise.** Snippets exist to facilitate lightweight, quick interactions, so it’s important to keep their content short and easily legible. To ensure all content is visible, create custom views that are no taller than the 400-point maximum height. When considering the amount of text to include, be mindful that fonts draw at various sizes based on a person’s preferred text size setting. For a result snippet, if you need to provide more detail, deep-link to the content in your app instead of including it in the custom view.

**Choose a descriptive label for a confirmation snippet’s primary button.** You can choose an appropriate label from among those that the [system provides](https://developer.apple.com/documentation/AppIntents/ConfirmationActionName), or you can supply a custom label. For example, when designing a snippet to order coffee, labeling the primary button Order is clearer than labeling it OK or Proceed. If you don’t specify a label, the system default is Continue.

**Communicate a snippet’s purpose visually.** Don’t rely on showing the dialogue text to convey a snippet’s purpose. While the spoken app intent dialogue is essential for interactions when someone isn’t looking at the screen, prefer to omit it from a snippet’s visual representation and use the custom view to convey its information instead.

![An illustration of a result snippet from Calendar that shows details for an upcoming event. The dialogue at the top repeats the information from the custom view, so that the event title, date, time, and participants are included in both places.](https://docs-assets.developer.apple.com/published/7980e36e36ec552023f59c29cf2659a4/snippet-response-heavy-dialogue-incorrect~dark%402x.png)

![An illustration of a result snippet from Calendar that shows details for an upcoming event. The snippet omits the dialogue from the top and includes the event title, date, time, and participants in the custom view only.](https://docs-assets.developer.apple.com/published/3afb4ea249452e55ed1d5f352878a284/snippet-response-light-dialogue-correct~dark%402x.png)

## Platform considerations

*No additional considerations for iOS, iPadOS, or macOS. Not supported in tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Siri](https://developer.apple.com/design/human-interface-guidelines/siri)

[App Shortcuts](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts)

[Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities)

#### Developer documentation

[App Intents](https://developer.apple.com/documentation/AppIntents)

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | New page. |

---
title: "Status bars"
source: "https://developer.apple.com/design/human-interface-guidelines/status-bars"
author:
published:
created: 2026-06-11
description: "A status bar appears along the upper edge of the screen and displays information about the device’s current state, like the time, cellular carrier, and battery level."
tags:
  - "clippings"
---
![A stylized representation of an iPhone status bar with labels showing the time and cellular, Wi-Fi, and battery levels. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/a98e051d26f39ac2a6fc9ac357976d6c/components-status-bar-intro~dark%402x.png)

## Best practices

**Obscure content under the status bar.** By default, the background of the status bar is transparent, allowing content beneath to show through. This transparency can make it difficult to see information presented in the status bar. If controls are visible behind the status bar, people may attempt to interact with them and be unable to do so. Be sure to keep the status bar readable, and don’t imply that content behind it is interactive. Prefer using a scroll edge effect to place a blurred view behind the status bar. For developer guidance, see [`ScrollEdgeEffectStyle`](https://developer.apple.com/documentation/SwiftUI/ScrollEdgeEffectStyle) and [`UIScrollEdgeEffect`](https://developer.apple.com/documentation/UIKit/UIScrollEdgeEffect).

**Consider temporarily hiding the status bar when displaying full-screen media.** A status bar can be distracting when people are paying attention to media. Temporarily hide these elements to provide a more immersive experience. The Photos app, for example, hides the status bar and other interface elements when people browse full-screen photos.

![A screenshot of the top half of the Photos app on iPhone, showing a photo filling the screen. The status bar is visible at the top of the screen.](https://docs-assets.developer.apple.com/published/7312261e2309c5707b50e5361375c651/status-bar-visible%402x.png)

The Photos app with the status bar visible

![A screenshot of the top half of the Photos app on iPhone, showing a photo filling the screen. The status bar is hidden, and only the photo is visible.](https://docs-assets.developer.apple.com/published/546831607b77b71bf7928e60e9949e9b/status-bar-hidden%402x.png)

The Photos app with the status bar hidden

**Avoid permanently hiding the status bar.** Without a status bar, people have to leave your app to check the time or see if they have a Wi-Fi connection. Let people redisplay a hidden status bar with a simple, discoverable gesture. For example, when browsing full-screen photos in the Photos app, a single tap shows the status bar again.

## Platform considerations

*No additional considerations for iOS or iPadOS. Not supported in macOS, tvOS, visionOS, or watchOS.*

## Resources

#### Developer documentation

[`UIStatusBarStyle`](https://developer.apple.com/documentation/UIKit/UIStatusBarStyle) — UIKit

[`preferredStatusBarStyle`](https://developer.apple.com/documentation/UIKit/UIViewController/preferredStatusBarStyle) — UIKit

---
title: "Top Shelf"
source: "https://developer.apple.com/design/human-interface-guidelines/top-shelf"
author:
published:
created: 2026-06-11
description: "The Apple TV Home Screen provides an area called Top Shelf, which showcases your content in a rich, engaging way while also giving people access to their favorite apps in the Dock."
tags:
  - "clippings"
---
![A stylized representation of a horizontal list of media previews above rows of Apple TV apps. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/1a10068f9c4352bd02af05918db8de31/components-top-shelf-intro~dark%402x.png)

When you support full-screen Top Shelf, people can swipe through multiple full-screen content views, play trailers and previews, and get more information about your content.

Top Shelf is a unique opportunity to highlight new, featured, or recommended content and let people jump directly to your app or game to view it. For example, when people select Apple TV in the Dock, full-screen previews immediately begin playing and soon the Dock slides away. As people watch previews for the first show, they can swipe through previews of all other featured shows, stopping to select Play or More Info for a preview that interests them.

The system defines several layout templates that you can use to give people a compelling Top Shelf experience when they select your app in the Dock. To help you position content, you can download these templates from [Apple Design Resources](https://developer.apple.com/design/resources/#tvos-apps).

## Best practices

**Help people jump right into your content.** Top Shelf provides a path to the content people care about most. Two of the system-provided layout templates — [carousel actions](https://developer.apple.com/design/human-interface-guidelines/top-shelf#Carousel-actions) and [carousel details](https://developer.apple.com/design/human-interface-guidelines/top-shelf#Carousel-details) — each include two buttons by default: A primary button intended to begin playback and a More Info button intended to open your app to a view that displays details about the content.

**Feature new content.** For example, showcase new releases or episodes, highlight upcoming movies and shows, and avoid promoting content that people have already purchased, rented, or watched.

**Personalize people’s favorite content.** People typically put the apps they use most often into Top Shelf. You can personalize their experience by showing targeted recommendations in the Top Shelf content you supply, letting people resume media playback or jump back into active gameplay.

**Avoid showing advertisements or prices.** People put your app into Top Shelf because you’ve already sold them on it, so they may not appreciate seeing lots of ads from your app. Showing purchasable content in the Top Shelf is fine, but prefer putting the focus on new and exciting content, and consider displaying prices only when people show interest.

**Showcase compelling dynamic content that can help draw people in and encourage them to view more.** If necessary, you can supply static images, but people typically prefer a captivating, dynamic Top Shelf experience that features the newest or highest rated content. To provide this experience, prefer creating [layered images](https://developer.apple.com/design/human-interface-guidelines/images#Layered-images) to display in Top Shelf.

**If you don’t provide the recommended full-screen content, supply at least one static image as a fallback.** The system displays a static image when your app is in the Dock and in focus and full-screen content is unavailable. tvOS flips and blurs the image, ensuring that it fits into a width of 1920 pixels at the 16:9 aspect ratio. Use the following values for guidance.

| Image size |
| --- |
| 2320x720 pt (2320x720 px @1x, 4640x1440 px @2x) |

**Avoid implying interactivity in a static image.** A static Top Shelf image isn’t focusable, and you don’t want to make people think it’s interactive.

## Dynamic layouts

Dynamic Top Shelf images can appear in several ways:

- A carousel of full-screen video and images that includes two buttons and optional details
- A row of focusable content
- A set of scrolling banners

### Carousel actions

The carousel actions layout style focuses on full-screen video and images and includes a few unobtrusive controls that help people see more. This layout style works especially well to showcase content that people already know something about. For example, it’s great for displaying user-generated content, like photos, or new content from a franchise or show that people are likely to enjoy.

**Provide a title.** Include a succinct title, like the title of the show or movie or the title of a photo album. If necessary, you can also provide a brief subtitle. For example, a subtitle for a photo album could be a range of dates; a subtitle for an episode could be the name of the show.

### Carousel details

This layout style extends the carousel actions layout style, giving you the opportunity to include some information about the content. For example, you might provide information like a plot summary, cast list, and other metadata that helps people decide whether to choose the content.

**Provide a title that identifies the currently playing content.** The content title appears near the top of the screen so it’s easy for people to read it at a glance. Above the title, you can also provide a succinct phrase or app attribution, like “Featured on *My App*.”

### Sectioned content row

This layout style shows a single labeled row of sectioned content, which can work well to highlight recently viewed content, new content, or favorites. Row content is focusable, which lets people scroll quickly through it. A label appears when an individual piece of content comes into focus, and small movements on the remote’s Touch surface bring the focused image to life. You can also configure a sectioned content row to show multiple labels.

**Provide enough content to constitute a complete row.** At a minimum, load enough images in a sectioned content row to span the full width of the screen. In addition, include at least one label for greater platform consistency and to provide additional context.

You can use the following image sizes in a sectioned content row.

#### Poster (2:3)

![An illustration showing an outlined rectangle that contains a slightly smaller rectangle, which contains a slight narrower rectangle. The outermost rectangle represents the actual size, the middle rectangle represents the visible or safe zone, and the innermost rectangle represents the unfocused size.](https://docs-assets.developer.apple.com/published/4a6f8bfeaa330815dcc459d9fec7ae38/icons-and-images-content-layout-2x3~dark%402x.png)

| Aspect | Image size |
| --- | --- |
| Actual size | 404x608 pt (404x608 px @1x, 808x1216 px @2x) |
| Focused/Safe zone size | 380x570 pt (380x570 px @1x, 760x1140 px @2x) |
| Unfocused size | 333x570 pt (333x570 px @1x, 666x1140 px @2x) |

#### Square (1:1)

![An illustration showing an outlined square that contains a slightly smaller square, which contains a slightly smaller square. The outermost  square represents the actual size, the middle square represents the visible or safe zone, and the innermost square represents the unfocused size.](https://docs-assets.developer.apple.com/published/bce61b0adedbf538b2d5df995528dc3e/icons-and-images-content-layout-1x1~dark%402x.png)

| Aspect | Image size |
| --- | --- |
| Actual size | 608x608 pt (608x608 px @1x, 1216x1216 px @2x) |
| Focused/Safe zone size | 570x570 pt (570x570 px @1x, 1140x1140 px @2x) |
| Unfocused size | 500x500 pt (500x500 px @1x, 1000x1000 px @2x) |

#### 16:9

![An illustration showing an outlined rectangle that contains a slightly smaller rectangle, which contains a slightly smaller rectangle. The outermost rectangle represents the actual size, the middle rectangle represents the visible or safe zone, and the innermost rectangle represents the unfocused size.](https://docs-assets.developer.apple.com/published/01b27b08b0a4a223ac547d5bd6444f9f/icons-and-images-content-layout-16x9~dark%402x.png)

| Aspect | Image size |
| --- | --- |
| Actual size | 908x512 pt (908x512 px @1x, 1816x1024 px @2x) |
| Focused/Safe zone size | 852x479 pt (852x479 px @1x, 1704x958 px @2x) |
| Unfocused size | 782x440 pt (782x440 px @1x, 1564x880 px @2x) |

**Be aware of additional scaling when combining image sizes.** If your Top Shelf design includes a mixture of image sizes, keep in mind that images will automatically scale up to match the height of the tallest image if necessary. For example, a 16:9 image scales to 500 pixels high if included in a row with a poster or square image.

#### Scrolling inset banner

This layout shows a series of large images, each of which spans almost the entire width of the screen. Apple TV automatically scrolls through these banners on a preset timer until people bring one into focus. The sequence circles back to the beginning after the final image is reached.

When a banner is in focus, a small, circular gesture on the remote’s Touch surface enacts the system focus effect, animating the item, applying lighting effects, and, if the banner contains layered images, producing a 3D effect. Swiping on the Touch surface pans to the next or previous banner in the sequence. Use this style to showcase rich, captivating content, such as a popular new movie.

**Provide three to eight images.** A minimum of three images is recommended for a scrolling banner to feel effective. More than eight images can make it hard to navigate to a specific image.

**If you need text, add it to your image.** This layout style doesn’t show labels under content, so all text must be part of the image itself. In layered images, consider elevating text by placing it on a dedicated layer above the others. Add the text to the accessibility label of the image too, so [VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover) can read it.

![An illustration showing a wide rectangle that contains of a smaller rectangle, which contains a slightly narrower rectangle. The outermost rectangle represents the actual size, the middle rectangle represents the visible or safe zone, and the innermost rectangle represents the unfocused size.](https://docs-assets.developer.apple.com/published/aa45b9ea88ed8bdd7043e88ec32347c5/icons-and-images-content-layout-extra-wide~dark%402x.png)

Use the following size for a scrolling inset banner image:

| Aspect | Image size |
| --- | --- |
| Actual size | 1940x692 pt (1940x692 px @1x, 3880x1384 px @2x) |
| Focused/Safe zone size | 1740x620 pt (1740x620 px @1x, 3480x1240 px @2x) |
| Unfocused size | 1740x560 pt (1740x560 px @1x, 3480x1120 px @2x) |

## Platform considerations

*Not supported in iOS, iPadOS, macOS, visionOS, or watchOS.*

## Resources

#### Related

[Apple Design Resources](https://developer.apple.com/design/resources/#tvos-apps)


---
title: "Watch faces"
source: "https://developer.apple.com/design/human-interface-guidelines/watch-faces"
author:
published:
created: 2026-06-11
description: "A watch face is a view that people choose as their primary view in watchOS."
tags:
  - "clippings"
---
![A stylized representation of a series of Apple Watch faces. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/8774d941bca52891ee8aa0b924f1c295/components-faces-intro~dark%402x.png)

The watch face is at the heart of the watchOS experience. People choose a watch face they want to see every time they raise their wrist, and they customize it with their favorite complications. People can even customize different watch faces for different activities, so they can switch to the watch face that fits their current context.

In watchOS 7 and later, people can share the watch faces they configure. For example, a fitness instructor might configure a watch face to share with their students by choosing the Gradient watch face, customizing the color, and adding their favorite health and fitness complications. When the students add the shared watch face to their Apple Watch or the Watch app on their iPhone, they get a custom experience without having to configure it themselves.

You can also configure a watch face to share from within your app, on your website, or through Messages, Mail, or social media. Offering shareable watch faces can help you introduce more people to your complications and your app.

## Best practices

**Help people discover your app by sharing watch faces that feature your complications.** Ideally, you support multiple complications so that you can showcase them in a shareable watch face and provide a curated experience. For some watch faces, you can also specify a system accent color, images, or styles. If people add your watch face but haven’t installed your app, the system prompts them to install it.

**Display a preview of each watch face you share.** Displaying a preview that highlights the advantages of your watch face can help people visualize its benefits. You can get a preview by using the iOS Watch app to email the watch face to yourself. The preview includes an illustrated device bezel that frames the face and is suitable for display on websites and in watchOS and iOS apps. Alternatively, you can replace the illustrated bezel with a high-fidelity hardware bezel that you can download from [Apple Design Resources](https://developer.apple.com/design/resources/#product-bezels) and composite onto the preview. For developer guidance, see [Sharing an Apple Watch face](https://developer.apple.com/documentation/ClockKit/sharing-an-apple-watch-face).

**Aim to offer shareable watch faces for all Apple Watch devices.** Some watch faces are available on Series 4 and later — such as California, Chronograph Pro, Gradient, Infograph, Infograph Modular, Meridian, Modular Compact, and Solar Dial — and Explorer is available on Series 3 (with cellular) and later. If you use one of these faces in your configuration, consider offering a similar configuration using a face that’s available on Series 3 and earlier. To help people make a choice, you can clearly label each shareable watch face with the devices it supports.

**Respond gracefully if people choose an incompatible watch face.** The system sends your app an error when people try to use an incompatible watch face on Series 3 or earlier. In this scenario, consider immediately offering an alternative configuration that uses a compatible face instead of displaying an error. Along with the previews you provide, help people understand that they might receive an alternative watch face if they choose a face that isn’t compatible with their Apple Watch.

## Platform considerations

*Not supported in iOS, iPadOS, macOS, tvOS, or visionOS.*

## Resources

#### Related

[Apple Design Resources — Product Bezels](https://developer.apple.com/design/resources/#product-bezels)

#### Developer documentation

[Sharing an Apple Watch face](https://developer.apple.com/documentation/ClockKit/sharing-an-apple-watch-face) — ClockKit

---
title: "Widgets"
source: "https://developer.apple.com/design/human-interface-guidelines/widgets"
author:
published:
created: 2026-06-11
description: "A widget provides quick access to essential information and focused interactions from your app or game in additional contexts."
tags:
  - "clippings"
---
![A stylized representation of a set of different-sized widgets on an iPad Home Screen. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/bff97eb5bd4fb782145390ce6ae1a0ee/components-widgets-intro~dark%402x.png)

Widgets help people organize and personalize their devices by displaying timely, glanceable content and offering specific functionality. They appear in various contexts for a consistent experience across platforms. For example, a person might place a Weather widget:

- On the Home Screen and Lock Screen of their iPhone and iPad
- On the desktop and Notification Center of their Mac
- On a horizontal or vertical surface when they wear Apple Vision Pro
- At a fixed position in the Smart Stack of Apple Watch

## Anatomy

Widgets come in different sizes, ranging from small accessory widgets on iPhone, iPad, and Apple Watch to system family widgets that include an extra large size on iPad, Mac, and Apple Vision Pro. Additionally, widgets adapt their appearance to the context in which they appear and respond to a person’s device customization. Consider the following aspects when you design widgets:

- The widget size to support
- The context — devices and system experiences — in which the widget may appear
- The rendering modes and color treatment that the widget receives based on the size and context

The WidgetKit framework provides default appearances and treatments for each widget size to fit the system experience or device where it appears. However, it’s important to consider creating a custom widget design that can provide the best experience for your content in each specific context.

### System family widgets

System family widgets offer a broad range of sizes and may include one or more interactive elements.

The following table shows supported contexts for each system family widget size:

| Widget size | iPhone | iPad | Mac | Apple Vision Pro |
| --- | --- | --- | --- | --- |
| System small | Home Screen, Today View, StandBy, and CarPlay | Home Screen, Today View, and Lock Screen | Desktop and Notification Center | Horizontal and vertical surfaces |
| System medium | Home Screen and Today View | Home Screen and Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System large | Home Screen and Today View | Home Screen and Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System extra large | Not supported | Home Screen and Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System extra large portrait | Not supported | Not supported | Not supported | Horizontal and vertical surfaces |

### Accessory widgets

Accessory widgets display a very limited amount of information because of their size.

They appear on the following devices:

| Widget size | iPhone | iPad | Apple Watch |
| --- | --- | --- | --- |
| Accessory circular | Lock Screen | Lock Screen | Watch complications and in the Smart Stack |
| Accessory corner | Not supported | Not supported | Watch complications |
| Accessory inline | Lock Screen | Lock Screen | Watch complications |
| Accessory rectangular | Lock Screen | Lock Screen | Watch complications and in the Smart Stack |

### Appearances

A widget can appear in full-color, in monochrome with a tint color, or in a clear, translucent style. Depending on the location, device, and a person’s customization, the system may apply a tinted or clear appearance to the widget and its included full-color images, symbols, and glyphs.

For example, a small system widget appears differently depending on the device and location:

- On the Home Screen of iPhone and iPad, people choose from different appearances for widgets: light, dark, clear, and tinted. In light and dark appearances, widgets have a full-color design. In a clear appearance, the system desaturates the widget and adds translucency, highlights, and the Liquid Glass material. In a tinted appearance, the system desaturates the widget and its content, then applies a person’s selected tint color.

![An image of the small Stocks widget on the Home Screen in the full-color appearance.](https://docs-assets.developer.apple.com/published/c001f107005e17afb9e12d48d162dcb2/widgets-stocks-default%402x.png)

Full-color

![An image of the small Stocks widget on the Home Screen in the clear appearance.](https://docs-assets.developer.apple.com/published/ad7a87eea7f2be4863cf6a2e8d8a7639/widgets-stocks-clear%402x.png)

Clear

![An image of the small Stocks widget on the Home Screen in the tinted appearance.](https://docs-assets.developer.apple.com/published/25e58f2c47d8b6d863187721d5c4abe9/widgets-stocks-tinted%402x.png)

Tinted

- On Apple Vision Pro, the widget appears as a 3D object, surrounded by a frame. It takes on a full-color appearance with a glass- or paper-like coating layer that responds to lighting conditions. Additionally, people can choose a tinted appearance that applies a color from a set of system-provided color palettes.

![An image of the small Stocks widget on Apple Vision Pro.](https://docs-assets.developer.apple.com/published/4b4e42b658c77b47c0f40d4d433d7b3b/widgets-stocks-visionos-frame%402x.png)

- On the Lock Screen of iPad, the widget takes on a monochromatic appearance without a tint color.

![An image of the small Stocks widget on the Lock Screen, showing the price of Apple stock.](https://docs-assets.developer.apple.com/published/58aef111a6a92a03981f5998720bca48/widgets-stocks-ipad-lock-screen%402x.png)

- On the Lock Screen of iPhone in StandBy, the widget appears scaled up in size with the background removed. When the ambient light falls below a threshold, the system renders the widget with a monochromatic red tint.

![An image of the Stocks widget on the Lock Screen in StandBy, showing the price of Apple stock.](https://docs-assets.developer.apple.com/published/cc1129210235e90f1ee9045eaf85dfb9/widgets-stocks-standby%402x.png)

StandBy

![An image of the Stocks widget on the Lock Screen that uses the dark appearance in low-light conditions, showing the price of Apple stock.](https://docs-assets.developer.apple.com/published/eb666a28d966abb92b34bdb0d14d8e0b/widgets-stocks-standby-night-mode%402x.png)

iPhone in StandBy during low-light conditions

Similarly, a rectangular accessory widget appears as follows:

- On the Lock Screen of iPhone and iPad, it takes on a monochromatic appearance without a tint color.
- On Apple Watch, the widget can appear as a watch complication in both full-color and tinted appearances, and it can also appear in the Smart Stack.

Each appearance described above includes a [rendering mode](https://developer.apple.com/design/human-interface-guidelines/widgets#Rendering-modes) that depends on the platform and a person’s appearance settings:

- The system uses the [full color](https://developer.apple.com/documentation/WidgetKit/WidgetRenderingMode/fullColor) rendering mode for system family widgets across all platforms to display your widget in full color. It doesn’t change the color of your views.
- The system uses the [accented](https://developer.apple.com/documentation/WidgetKit/WidgetRenderingMode/accented) rendering mode for system family widgets across all platforms and for accessory widgets on Apple Watch. In the accented rendering mode, the system removes the background and replaces it with a tinted color effect for a tinted appearance and a Liquid Glass background for a clear appearance. Additionally, it divides the widget’s views into an accent group and a primary group, and then applies a solid color to each group.
- The system uses the [vibrant](https://developer.apple.com/documentation/WidgetKit/WidgetRenderingMode/vibrant) rendering mode for widgets on the Lock Screen of iPhone and iPad, and on iPhone in StandBy in low-light conditions. It desaturates text, images, and gauges, and creates a vibrant effect by coloring your content appropriately for the Lock Screen background or a macOS desktop. Note that people can customize the Lock Screen with a tint color, and the system applies a red tint for widgets that appear on iPhone in StandBy in low-light conditions.

The following table lists the occurrences for each rendering mode per platform:

| Platform | Full-color | Accented | Vibrant |
| --- | --- | --- | --- |
| iPhone | Home Screen, Today view, StandBy and CarPlay (with the background removed) | Home Screen and Today view | Lock Screen, StandBy in low-light conditions |
| iPad | Home Screen and Today view | Home Screen and Today view | Lock Screen |
| Apple Watch | Smart Stack, complications | Smart Stack, complications | Not supported |
| Mac | Desktop and Notification Center | Not supported | Desktop |
| Apple Vision Pro | Horizontal and vertical surfaces | Horizontal and vertical surfaces | Not supported |

For additional design guidance, see [Rendering modes](https://developer.apple.com/design/human-interface-guidelines/widgets#Rendering-modes). For developer guidance, see [Preparing widgets for additional platforms, contexts, and appearances](https://developer.apple.com/documentation/WidgetKit/Preparing-widgets-for-additional-contexts-and-appearances) and [`WidgetRenderingMode`](https://developer.apple.com/documentation/WidgetKit/WidgetRenderingMode).

## Best practices

**Choose simple ideas that relate to your app’s main purpose.** Include timely content and relevant functionality. For example, people who use the Weather app are often most interested in the current high and low temperatures and weather conditions, so the Weather widgets prioritize this information.

![An image of a small Weather widget showing current conditions for Cupertino. In text, the widget displays a temperature of 70 degrees, the condition Sunny, and forecast high and low temperatures of 75 degrees and 59 degrees, respectively. The widget also displays a yellow sun symbol above the word Sunny and the filled-in location indicator to the right of the word Cupertino.](https://docs-assets.developer.apple.com/published/6a3718b9d1eb04c89acbf3c32cf9101e/widgets-ios-weather-small%402x.png)

**Aim to create a widget that gives people quick access to the content they want.** People appreciate widgets that display meaningful content and offer useful actions and deep links to key areas of your app. Replicating an app icon offers little additional value, and people may be less likely to keep it on their screens.

**Prefer dynamic information that changes throughout the day.** If a widget’s content never appears to change, people may not keep it in a prominent position. Although widgets don’t update from minute to minute, it’s important to find ways to keep their content fresh to invite frequent viewing.

**Look for opportunities to surprise and delight.** For example, you might design a unique visual treatment for your calendar widget to display on meaningful occasions, like birthdays or holidays.

**Offer widgets in multiple sizes when doing so adds value.** Small widgets use their limited space to typically show a single piece of information while larger sizes support additional layers of information and actions. Avoid expanding a smaller widget’s content to simply fill a larger area. It’s more important to create one widget in the size that best represents the content than providing the widget in all sizes.

**Balance information density.** Sparse layouts can make the widget seem unnecessary, while overly dense layouts are less glanceable. Create a layout that provides essential information at a glance and allows people to view additional details by taking a longer look. If your layout is too dense, consider improving its clarity by using a larger widget size or replacing text with graphics.

**Display only the information that’s directly related to the widget’s main purpose.** In larger widgets, you can display more data — or more detailed visualizations of the data — but you don’t want to lose sight of the widget’s primary purpose. For example, all Calendar widgets display a person’s upcoming events. In each size, the widget remains centered on events while expanding the range of information as the size increases.

**Use brand elements thoughtfully.** Incorporate brand colors, typefaces, and stylized glyphs to make your widget recognizable but don’t overpower useful information or make your widget look out of place. When you include brand elements, people seldom need your logo or app icon to help them recognize your widget. If your widget benefits from including a small logo — for example, if your widget displays content from multiple sources — a small logo in the top-right corner is sufficient.

**Choose between automatically displaying content and letting people customize displayed information.** In some cases, people need to configure a widget to ensure it displays the information that’s most useful for them. For example, the Stocks widget lets people select the stocks they wish to track. In contrast, some widgets — like the Podcasts widget — automatically display recent content, so people don’t need to customize them. For developer guidance, see [Making a configurable widget](https://developer.apple.com/documentation/WidgetKit/Making-a-Configurable-Widget).

**Avoid mirroring your widget’s appearance within your app.** Including an element in your app that looks like your widget but doesn’t behave like it can confuse people. Additionally, people may be less likely to try other ways to interact with such an element in your app because they expect it to behave like a widget.

**Let people know when authentication adds value.** If your widget provides additional functionality when someone is signed in to your app, make sure people know that. For example, an app that shows upcoming reservations might include a message like “Sign in to view reservations” when people are signed out.

### Updating widget content

To remain relevant and useful, widgets periodically refresh their information but don’t support continuous, real-time updates, and the system may adjust the limits for updates depending on various factors.

**Keep your widget up to date.** Finding the appropriate update frequency for your widget depends on knowing how often the data changes and estimating when people need to see new data. For example, a widget that provides information about tidal conditions at a beach is useful if it updates on an hourly basis even though conditions change constantly. If people are likely to check your widget more frequently than you can update it, consider displaying text that describes when the data was last updated.

**Use system functionality to refresh dates and times in your widget.** Because widget update frequency is limited, let the system automatically refresh date and time information to preserve update opportunities. Determine the update frequency that fits with the data you display and show content quickly without hiding stale data behind placeholder content. For developer guidance about widget updates, see [Keeping a widget up to date](https://developer.apple.com/documentation/WidgetKit/Keeping-a-Widget-Up-To-Date).

**Use animated transitions to bring attention to data updates.** By default, many SwiftUI views animate content updates. Additionally, use standard and custom animations with a duration of up to two seconds to let people know when new information is available or when content displays differently. For developer guidance, see [Animating data updates in widgets and Live Activities](https://developer.apple.com/documentation/WidgetKit/Animating-data-updates-in-widgets-and-live-activities).

### Adding interactivity

People tap or click a widget to launch its corresponding app. It can also include buttons and toggles to offer additional functionality without launching the app. For example, the Reminders widget includes toggles to mark a task as completed. When people interact with your widget in areas that aren’t buttons or toggles, the interaction launches your app.

![An image of the large Reminders widget with a toggle for each task. None of the tasks is complete.](https://docs-assets.developer.apple.com/published/84a57cc2503236512c1cd5d986edea6d/widgets-reminders-large-unselected~dark%402x.png)

Incomplete tasks

![An image of the large Reminders widget with a toggle for each task. The toggles for the first and third items in the list indicate that these tasks are complete.](https://docs-assets.developer.apple.com/published/b73a00ffbbd649ecf6ca89e644180203/widgets-reminders-large-selected~dark%402x.png)

Completed tasks

**Offer simple, relevant functionality and reserve complexity for your app.** Useful widgets offer an easy way to complete a task or action that’s directly related to its content.

**Ensure that a widget interaction opens your app at the right location.** Deep link to details and actions that directly relate to the widget’s content, and don’t make people navigate to the relevant area in the app. For example, when people click or tap a medium Stocks widget, the Stocks app opens to a page that displays information about the symbol.

![An image of a medium Stocks watchlist widget, listing two stock market indices and one stock symbol. Each row displays the index or symbol name on the left, a graph section in the middle, and a current quote, including a value change, on the right.](https://docs-assets.developer.apple.com/published/bfe482d5903ff332d0027450f18a6a43/widgets-stocks-medium%402x.png)

**Offer interactivity while remaining glanceable and uncluttered.** Multiple interaction targets — SwiftUI links, buttons, and toggles — might make sense for your content, but avoid creating app-like layouts in your widgets. Pay attention to the size of targets and make sure people can tap or click them with confidence and without accidentally performing unintended interactions. Note that inline accessory widgets offer only one tap target.

### Choosing margins and padding

Widgets scale to adapt to the screen sizes of different devices and onscreen areas. Supply content at appropriate sizes to make sure that your widget looks great on every device and let the system resize or scale it as necessary. In iOS, the system ensures that your widget looks good on small devices by resizing the content you design for large devices. In iPadOS, the system renders your widget at a large size before scaling it down for display on the Home Screen.

As you design for various devices and scale factors, use the values listed in [Specifications](https://developer.apple.com/design/human-interface-guidelines/widgets#Specifications) and the [Apple Design Resources](https://developer.apple.com/design/resources/) for guidance; for your production widget, use [SwiftUI](https://developer.apple.com/documentation/SwiftUI) to ensure flexibility.

**In general, use standard margins to ensure legibility.** Use the standard margin width for widgets — 16 points for most widgets — to avoid crowding their edges and creating a cluttered appearance. If you need to use tighter margins — for example, to create content groupings for graphics, buttons, or background shapes — setting margins of 11 points can work well. Additionally, note that widgets use smaller margins on the desktop on Mac and on the Lock Screen, including in StandBy. For developer guidance, see [`padding(_:_:)`](https://developer.apple.com/documentation/SwiftUI/View/padding\(_:_:\)).

**Coordinate the corner radius of your content with the corner radius of the widget.** To ensure that your content looks good within a widget’s rounded corners, use a SwiftUI container to apply the correct corner radius. For developer guidance, see [`ContainerRelativeShape`](https://developer.apple.com/documentation/SwiftUI/ContainerRelativeShape).

### Displaying text in widgets

**Prefer using the system font, text styles, and SF Symbols.** Using the system font helps your widget look at home on any platform, while making it easier for you to display great-looking text in a variety of weights, styles, and sizes. Use SF Symbols to align and scale symbols with text that uses the system font. If you use a custom font, do so sparingly, and be sure it’s easy for people to read at a glance. It often works well to use a custom font for the large text in a widget and SF Pro for the smaller text. For guidance, see [Typography](https://developer.apple.com/design/human-interface-guidelines/typography) and [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols).

**Avoid very small font sizes.** In general, display text using fonts at 11 points or larger. Text in a font that’s smaller than 11 points can be too hard for many people to read.

**Avoid rasterizing text.** Always use text elements and styles to ensure that your text scales well and to allow VoiceOver to speak your content.

### Using color

**Use color to enhance a widget’s appearance without competing with its content.** Beautiful colors draw the eye, but they’re best when they don’t prevent people from absorbing a widget’s information at a glance. In your asset catalog, you can also specify the colors you want the system to use as it generates your widget’s editing-mode user interface.

**Convey meaning without relying on specific colors to represent information.** Widgets can appear monochromatic (with or without a custom tint color), and in watchOS, the system may invert colors depending on the watch face a person chooses. Use text and iconography in addition to color to express meaning.

**Use full-color images judiciously.** When a person chooses a tinted or clear appearance for their widgets, the system by default desaturates full-color images. You can choose to render images in full-color, even when a person chooses a tinted or clear widget appearance. However, full-color images in these appearances draw special attention to the widget, which might make it feel as if the widget doesn’t belong to the platform. For example, a full-color image in a widget might appear out of place when a person chooses a clear widget appearance. Consider reserving full-color images to represent media content, such as album art for a music app’s widget, and use full-color images with smaller dimensions than the size of the widget.

## Rendering modes

### Full-color

**Support light and dark appearances.** Prefer light backgrounds for the light appearance and dark backgrounds for the dark appearance, and consider using the semantic system colors for text and backgrounds to let the colors dynamically adapt to the current appearance. You can also support different appearances by putting color variants in your asset catalog. For guidance, see [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode); for developer guidance, see [Asset management](https://developer.apple.com/documentation/Xcode/asset-management) and [Supporting Dark Mode in your interface](https://developer.apple.com/documentation/UIKit/supporting-dark-mode-in-your-interface).

![An image of the small Notes widget. Below the yellow bar that contains the app icon and name, the widget displays a single note in black text on a white background.](https://docs-assets.developer.apple.com/published/fe8bbb296cb8ad12a123b95562d7c1f5/widgets-notes-light-appearance%402x.png)

![An image of the small Notes widget. Below the yellow bar that contains the app icon and name, the widget displays a single note in white text on a black background.](https://docs-assets.developer.apple.com/published/3e2a0cd6e7b33ef2ea47970a271330fb/widgets-notes-dark-appearance%402x.png)

### Accented

**Group widget components into an accented and a primary group.** The accented rendering mode divides the widget’s view hierarchy into an accent group and a primary group. On iPhone, iPad, and Mac, the system tints primary and accented content white. On Apple Watch, the system tints primary content white and accented content in the color of the watch face.

For developer guidance, see [`widgetAccentable(_:)`](https://developer.apple.com/documentation/SwiftUI/View/widgetAccentable\(_:\)) and [Optimizing your widget for accented rendering mode and Liquid Glass](https://developer.apple.com/documentation/WidgetKit/optimizing-your-widget-for-accented-rendering-mode-and-liquid-glass).

### Vibrant

**Offer enough contrast to ensure legibility.** In the vibrant rendering mode, the opacity of pixels within an image determines the strength of the blurred background material effect. Fully transparent pixels let the background material pass through as is. The brightness of pixels determines how vibrant they appear on the Lock Screen. Brighter gray values provide more contrast, and darker values provide less contrast.

**Create optimized assets for the best vibrant effect.** Render content like images, numbers, and text at full opacity. Use white or light gray for the most prominent content and darker grayscale values for secondary elements to establish hierarchy. Confirm that image content has sufficient contrast in grayscale, and use opaque grayscale values, rather than opacities of white, to achieve the best vibrant material effect.

## Previews and placeholders

**Design a realistic preview to display in the widget gallery.** Highlighting your widget’s capabilities — and clearly representing the experiences each widget type or size can provide — helps people make an informed decision. You can display real data in your widget preview, but if the data takes too long to generate or load, display realistic simulated data instead.

**Design placeholder content that helps people recognize your widget.** An installed widget displays placeholder content while its data loads. Create an effective placeholder appearance by combining static interface components with semi-opaque shapes that stand in for dynamic content. For example, use rectangles of different widths to suggest lines of text, and circles or squares in place of glyphs and images.

![An image of a small Tips widget that displays placeholder content on top of a yellow background. In the bottom half of the widget, three horizontal bars in different shades of yellow represent lines of text.](https://docs-assets.developer.apple.com/published/9f4ce7356e15184d0183af0e5effa04a/widgets-tips-placeholder-content%402x.png)

![An image of a small Tips widget that displays actual data on top of a yellow background. The horizontal bars in the placeholder widget are replaced by three short lines of text in different shades of yellow.](https://docs-assets.developer.apple.com/published/aa5e504f019f5558fa61813932709755/widgets-tips-full-content%402x.png)

**Write a succinct widget description.** The widget gallery displays descriptions that help people understand what each widget does. Begin a description with an action verb — for example, “See the current weather conditions and forecast for a location” or “Keep track of your upcoming events and meetings.” Avoid including unnecessary phrases that reference the widget itself, like “This widget shows…,” “Use this widget to…,” or “Add this widget.” Use approachable language and [sentence-style capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64).

**Group your widget’s sizes together, and provide a single description.** If your widget is available in multiple sizes, group them together so people don’t think each size is a different widget. Provide a single description of your widget — regardless of how many sizes you offer — to avoid repetition and to help people understand how each size provides a slightly different perspective on the same content and functionality.

**Consider coloring the Add button.** After people choose your app in the widget gallery, an Add button appears below the group of widgets you offer. You can specify a color for this button to help remind people of your brand.

![An illustration that represents the widget gallery open to the small widget for the Notes app. Below the widget is a page control showing that this is the first page of six; below the page control is a button that uses the Notes app's yellow accent color.](https://docs-assets.developer.apple.com/published/4b66d08de86968054d14f148b4dd6654/widgets-add-button-tint-color-notes~dark%402x.png)

![An illustration that represents the widget gallery open to the small widget for the Weather app. Below the widget is a page control showing that this is the first page of six; below the page control is a button that uses the Weather app's blue accent color.](https://docs-assets.developer.apple.com/published/289343382044f9e5f22deb0afbbd44d5/widgets-add-button-tint-color-weather~dark%402x.png)

## Platform considerations

*No additional considerations for macOS. Not supported in tvOS.*

### iOS, iPadOS

Widgets on the Lock Screen are functionally similar to watch complications and follow design principles for [Complications](https://developer.apple.com/design/human-interface-guidelines/complications) in addition to design principles for widgets. Provide useful information in your Lock Screen widget, and don’t treat it only as an additional way for people to launch into your app. In many cases, a design for complications also works well for widgets on the Lock Screen (and vice versa), so consider creating them in tandem.

Your app can offer widgets on the Lock Screen in three different shapes: as inline text that appears above the clock, and as circular and rectangular shapes that appear below the clock.

![A partial screenshot of the Lock Screen on iPhone that shows a Calendar widget and two Weather widgets below the time. From the left, the widgets are an inline text widget and two circular widgets.](https://docs-assets.developer.apple.com/published/74bef9837a5db054f77edd1cd77e3c3c/widget-lock-screen-display-appearances~dark%402x.png)

**Support the Always-On display on iPhone.** Devices with the Always-On display render widgets on the Lock Screen with reduced luminance. Use levels of gray that provide enough contrast in the Always-On display, and make sure your content remains legible.

For developer guidance, see [Creating accessory widgets and watch complications](https://developer.apple.com/documentation/WidgetKit/Creating-accessory-widgets-and-watch-complications).

**Offer Live Activities to show real-time updates.** Widgets don’t show real-time information. If your app allows people to track the progress of a task or event for a limited amount of time with frequent updates, consider offering Live Activities. Widgets and Live Activities use the same underlying frameworks and share design similarities. As a result, it can be a good idea to develop widgets and Live Activities in tandem and reuse code and design components for both features. For design guidance on Live Activities, see [Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities); for developer guidance, see [ActivityKit](https://developer.apple.com/documentation/ActivityKit).

#### StandBy and CarPlay

On iPhone in StandBy, the system displays two small system family widgets side-by-side, scaled up so they fill the Lock Screen. By supporting StandBy, you also ensure your widgets work well in CarPlay. CarPlay and StandBy widgets both use the small system family widget with the background removed and scaled up to best fit the grid on the Widgets screen. Glanceable information and large text are especially important in CarPlay to make your widget easy to read on a car’s display.

**Limit usage of rich images or color to convey meaning in StandBy.** Instead, make use of the additional space by scaling up and rearranging text so people can glance at the widget content from a greater distance. To seamlessly blend with the black background, don’t use background colors for your widget when it appears in StandBy.

For developer guidance, see [Displaying the right widget background](https://developer.apple.com/documentation/WidgetKit/Displaying-the-right-widget-background).

On iPhone in StandBy in low-light conditions, the system renders widgets in a monochromatic look with a red tint.

![An image of iPhone in low-light conditions. It shows a Clock widget on the left that displays the time as 9:41 a.m. and a Weather widget set to Cupertino with the temperature at 70 degrees Fahrenheit on the right.](https://docs-assets.developer.apple.com/published/52d35d40b1ddb2272b2d9abed4354afb/widgets-standby-low-light%402x.png)

iPhone in low-light conditions

### visionOS

Widgets in visionOS are 3D objects that people place on a horizontal or vertical surface. When a person places a widget on a surface, the widget persists in that location even when the person turns Apple Vision Pro off and back on. Widgets have a consistent, real-world scale. Their size, *mounting style*, and *treatment style* impact how a person perceives them.

visionOS widgets appear in full-color by default, but they appear in the accented rendering mode when people personalize them with tint colors using a range of system-provided color palettes. Additionally, people can customize the frame width of widgets that use the elevated mounting style, and custom options that are unique to the widget. For example, visionOS doesn’t provide systemwide light or dark appearances. However, the Music poster widget offers its own customization option that lets people choose between a light and a dark theme that the app generates from the displayed album art.

For developer guidance, see [Updating your widgets for visionOS](https://developer.apple.com/documentation/WidgetKit/Updating-your-widgets-for-visionOS).

**Adapt your design and content for the spatial experience Apple Vision Pro provides.** In visionOS, widgets don’t float in isolation but are part of living rooms, kitchens, offices, and more. Consider this context early and think of widgets as part of someone’s surroundings when you bring your existing widgets to visionOS or design them from scratch. For example, the Music widget adapts to a poster-like appearance that’s glanceable across the room with large typography and a high-resolution image, and a productivity app might offer a small widget that easily fits on a desk.

**Test your widgets across the full range of system color palettes and in different lighting conditions.** Make sure your widget’s tone, contrast, and legibility remain consistent and intentional. If you choose to exclude UI elements from tinting, test your widget in every provided tint color palette to make sure the untinted elements remain legible when a person customizes their widgets with tint colors.

#### Thresholds and sizes

Widgets on Apple Vision Pro can adapt based on a person’s proximity, and visionOS provides widgets with two key thresholds to design for: the [`simplified`](https://developer.apple.com/documentation/WidgetKit/LevelOfDetail/simplified) threshold for when a person views a widget at a distance, and the [`default`](https://developer.apple.com/documentation/WidgetKit/LevelOfDetail/default) threshold when a person views it nearby.

![A placeholder image showing a widget viewed from a distance in visionOS.](https://docs-assets.developer.apple.com/published/0ab3137bf116e4640762c25ac6139f93/widgets-extra-large-portrait-far-proximity%402x.png)

Viewed from a distance

![A placeholder image showing a widget viewed from nearby in visionOS.](https://docs-assets.developer.apple.com/published/c3f6fbe96de6d0b9524ad7f2001755a6/widgets-extra-large-portrait-close-proximity%402x.png)

Viewed from nearby

Because widgets can appear throughout a person’s environment, it’s also important to match a widget’s size to the type of content it contains, and to be aware of how it appears at a variety of distances.

**Design a responsive layout that shows the right level of detail for each of the two thresholds.** When a person views the widget at a distance, display a simplified version of your widget that shows fewer details and has a larger type size, and remove interactive elements like buttons or toggles. When a person views the widget from nearby, show more details and use a smaller type size. To create a smooth and consistent experience and help your layout feel continuous, maintain shared elements across both distance thresholds.

**Offer widget family sizes that fit a person’s surroundings well.** Widgets map to real-world dimensions and have a permanent presence in a person’s spatial environment. Think about where people might place your widget — mounted to a wall, placed on a sideboard, or sitting next to a workplace — and choose a widget family size that’s right for that context. For example, offer a small system widget with content that people might place on a desk or an extra large widget to let people decorate their surroundings with something visually rich, like artwork or photography.

**Display content in a way that remains legible from a range of distances.** To make a widget feel intentional and proportionate to where they place it, people can scale a widget from 75 to 125 percent in size. Use print design principles like clear hierarchy, strong typography, and scale to make sure your content remains glanceable. Include high-resolution assets that look good scaled up to every size.

#### Mounting styles

The way a widget appears on a surface plays a big role in how a person perceives it. To make it feel intentional and integrated into their surroundings, people place a widget on surfaces in distinct mounting styles.

- **[Elevated](https://developer.apple.com/documentation/WidgetKit/WidgetMountingStyle/elevated) style**. On horizontal surfaces — for example, on a desk — the widget always appears elevated and gently tilts backward, providing a subtle angle that improves readability, and casts a soft shadow that helps it feel grounded on the surface. On vertical surfaces — for example, on a wall — the widget either appears elevated, sitting flush on the surface and similar to how you mount a picture frame.
- **[Recessed](https://developer.apple.com/documentation/WidgetKit/WidgetMountingStyle/recessed) style**. On vertical surfaces — for example, on a wall — the widget can appear recessed, with content set back into the surface, creating a depth effect that gives the illusion of a cutout in the surface. Horizontal surfaces don’t use the recessed mounting style.

By default, widgets use the elevated mounting style, because it works for horizontal and vertical surfaces.

**Choose the mounting style that fits your content and the experience you want to create.** By default, visionOS widgets use the elevated mounting style, which is ideal for content that you want to stand out and feel present, like reminders, media, or glanceable data. Recessed widgets are ideal for immersive or ambient content, like weather or editorial content, and people can only place them on a vertical surface. If a style doesn’t suit your widget, you can opt out of it for each widget. If you choose to only support the recessed mounting style, people can’t place the widget on a horizontal surface. For example, a weather app might only support the recessed mounting style to give the illusion of looking out of a window for its large and extra-large system family widgets, and only support the elevated style for its small system family widget.

**Test your elevated widget designs with each system-provided frame width.** People can choose from different system-defined frame widths for widgets that use the elevated mounting style. You can’t change your layout based on the frame width a person chooses, so make sure your widget layout stays visually balanced for each frame width.

#### Treatment styles

In addition to size and mounting style, the system applies one of two treatment styles to visionOS widgets. Choosing the right treatment for your widget helps reinforce the experience you want to create.

- The [`paper`](https://developer.apple.com/documentation/WidgetKit/WidgetTexture/paper) style creates a more grounded, print-like style that feels solid and makes the widget feel like part of its surroundings. When lighting conditions change, widgets in the paper style become darker or lighter in response.
- The [`glass`](https://developer.apple.com/documentation/WidgetKit/WidgetTexture/glass) style creates a lighter, layered look that adds depth and visual separation between foreground and background elements to emphasize clarity and contrast. The foreground elements always stay bright and legible, and don’t dim or brighten, even as ambient light changes.

**Choose the paper style for a print-like look that feels more like a real object in the room.** The entire widget responds to the ambient lighting and blends naturally into its surroundings. For example, the Music poster widget uses the paper style to display albums and playlists like framed artwork on a wall.

**Choose the glass style for information-rich widgets.** Glass visually separates foreground and background elements, allowing you to decide which parts of your interface adapt to the surroundings and which stay visually consistent. Foreground elements appear in full color, unaffected by ambient lighting, to make sure important content stays sharp and legible. For example, a News widget appears with editorial images in the background with a soft, print-like look. Its headlines stay in the foreground, crisp and easy to read.

### watchOS

**Provide a colorful background that conveys meaning.** By default, widgets in the Smart Stack use a black background. Consider using a custom background color that provides additional meaning. For example, the Stocks app uses a red background for falling stock values and a green background if a stock’s value rises.

**Encourage the system to display or elevate the position of your watchOS widget in the Smart Stack.** Relevancy information helps the system show your widget when people need it most. Relevance can be location-based or specific to ongoing system actions, like a workout. For developer guidance, see [RelevanceKit](https://developer.apple.com/documentation/RelevanceKit).

## Specifications

As you design your widgets, use the following values for guidance.

### iOS dimensions

| Screen size (portrait, pt) | Small (pt) | Medium (pt) | Large (pt) | Circular (pt) | Rectangular (pt) | Inline (pt) |
| --- | --- | --- | --- | --- | --- | --- |
| 430×932 | 170x170 | 364x170 | 364x382 | 76x76 | 172x76 | 257x26 |
| 428x926 | 170x170 | 364x170 | 364x382 | 76x76 | 172x76 | 257x26 |
| 414x896 | 169x169 | 360x169 | 360x379 | 76x76 | 160x72 | 248x26 |
| 414x736 | 159x159 | 348x157 | 348x357 | 76x76 | 170x76 | 248x26 |
| 393x852 | 158x158 | 338x158 | 338x354 | 72x72 | 160x72 | 234x26 |
| 390x844 | 158x158 | 338x158 | 338x354 | 72x72 | 160x72 | 234x26 |
| 375x812 | 155x155 | 329x155 | 329x345 | 72x72 | 157x72 | 225x26 |
| 375x667 | 148x148 | 321x148 | 321x324 | 68x68 | 153x68 | 225x26 |
| 360x780 | 155x155 | 329x155 | 329x345 | 72x72 | 157x72 | 225x26 |
| 320x568 | 141x141 | 292x141 | 292x311 | N/A | N/A | N/A |

### iPadOS dimensions

<table><thead><tr><th><p>Screen size (portrait, pt)</p></th><th><p>Target</p></th><th><p>Small (pt)</p></th><th><p>Medium (pt)</p></th><th><p>Large (pt)</p></th><th><p>Extra large (pt)</p></th></tr></thead><tbody><tr><td colspan="1" rowspan="2"><p>768x1024</p></td><td><p>Canvas</p></td><td><p>141x141</p></td><td><p>305.5x141</p></td><td><p>305.5x305.5</p></td><td><p>634.5x305.5</p></td></tr><tr><td><p>Device</p></td><td><p>120x120</p></td><td><p>260x120</p></td><td><p>260x260</p></td><td><p>540x260</p></td></tr><tr><td colspan="1" rowspan="2"><p>744x1133</p></td><td><p>Canvas</p></td><td><p>141x141</p></td><td><p>305.5x141</p></td><td><p>305.5x305.5</p></td><td><p>634.5x305.5</p></td></tr><tr><td><p>Device</p></td><td><p>120x120</p></td><td><p>260x120</p></td><td><p>260x260</p></td><td><p>540x260</p></td></tr><tr><td colspan="1" rowspan="2"><p>810x1080</p></td><td><p>Canvas</p></td><td><p>146x146</p></td><td><p>320.5x146</p></td><td><p>320.5x320.5</p></td><td><p>669x320.5</p></td></tr><tr><td><p>Device</p></td><td><p>124x124</p></td><td><p>272x124</p></td><td><p>272x272</p></td><td><p>568x272</p></td></tr><tr><td colspan="1" rowspan="2"><p>820x1180</p></td><td><p>Canvas</p></td><td><p>155x155</p></td><td><p>342x155</p></td><td><p>342x342</p></td><td><p>715.5x342</p></td></tr><tr><td><p>Device</p></td><td><p>136x136</p></td><td><p>300x136</p></td><td><p>300x300</p></td><td><p>628x300</p></td></tr><tr><td colspan="1" rowspan="2"><p>834x1112</p></td><td><p>Canvas</p></td><td><p>150x150</p></td><td><p>327.5x150</p></td><td><p>327.5x327.5</p></td><td><p>682x327.5</p></td></tr><tr><td><p>Device</p></td><td><p>132x132</p></td><td><p>288x132</p></td><td><p>288x288</p></td><td><p>600x288</p></td></tr><tr><td colspan="1" rowspan="2"><p>834x1194</p></td><td><p>Canvas</p></td><td><p>155x155</p></td><td><p>342x155</p></td><td><p>342x342</p></td><td><p>715.5x342</p></td></tr><tr><td><p>Device</p></td><td><p>136x136</p></td><td><p>300x136</p></td><td><p>300x300</p></td><td><p>628x300</p></td></tr><tr><td colspan="1" rowspan="2"><p>954x1373 *</p></td><td><p>Canvas</p></td><td><p>162x162</p></td><td><p>350x162</p></td><td><p>350x350</p></td><td><p>726x350</p></td></tr><tr><td><p>Device</p></td><td><p>162x162</p></td><td><p>350x162</p></td><td><p>350x350</p></td><td><p>726x350</p></td></tr><tr><td colspan="1" rowspan="2"><p>970x1389 *</p></td><td><p>Canvas</p></td><td><p>162x162</p></td><td><p>350x162</p></td><td><p>350x350</p></td><td><p>726x350</p></td></tr><tr><td><p>Device</p></td><td><p>162x162</p></td><td><p>350x162</p></td><td><p>350x350</p></td><td><p>726x350</p></td></tr><tr><td colspan="1" rowspan="2"><p>1024x1366</p></td><td><p>Canvas</p></td><td><p>170x170</p></td><td><p>378.5x170</p></td><td><p>378.5x378.5</p></td><td><p>795x378.5</p></td></tr><tr><td><p>Device</p></td><td><p>160x160</p></td><td><p>356x160</p></td><td><p>356x356</p></td><td><p>748x356</p></td></tr><tr><td colspan="1" rowspan="2"><p>1192x1590 *</p></td><td><p>Canvas</p></td><td><p>188x188</p></td><td><p>412x188</p></td><td><p>412x412</p></td><td><p>860x412</p></td></tr><tr><td><p>Device</p></td><td><p>188x188</p></td><td><p>412x188</p></td><td><p>412x412</p></td><td><p>860x412</p></td></tr></tbody></table>

\* When Display Zoom is set to More Space.

### visionOS dimensions

| Widget | Size in pt | Size in mm (scaled to 100%) |
| --- | --- | --- |
| Small | 158x158 | 268x268 |
| Medium | 338x158 | 574x268 |
| Large | 338x354 | 574x600 |
| Extra large | 450x338 | 763x574 |
| Extra large portrait | 338x450 | 574x763 |

### watchOS dimensions

| Apple Watch size | Size of a widget in the Smart Stack (pt) |
| --- | --- |
| 40mm | 152x69.5 |
| 41mm | 165x72.5 |
| 44mm | 173x76.5 |
| 45mm | 184x80.5 |
| 49mm | 191x81.5 |

## Resources

#### Related

[Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

#### Developer documentation

[WidgetKit](https://developer.apple.com/documentation/WidgetKit)

[Developing a WidgetKit strategy](https://developer.apple.com/documentation/WidgetKit/Developing-a-WidgetKit-strategy) — WidgetKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| December 16, 2025 | Updated guidance for all platforms, and added guidance for visionOS and CarPlay. |
| January 17, 2025 | Corrected watchOS widget dimensions. |
| June 10, 2024 | Updated to include guidance for accented widgets in iOS 18 and iPadOS 18. |
| June 5, 2023 | Updated guidance to include widgets in watchOS, widgets on the iPad Lock Screen, and updates for iOS 17, iPadOS 17, and macOS 14. |
| November 3, 2022 | Added guidance for widgets on the iPhone Lock Screen and updated design comprehensives for iPhone 14, iPhone 14 Pro, and iPhone 14 Pro Max. |

---

# Inputs
---
title: "Action button"
source: "https://developer.apple.com/design/human-interface-guidelines/action-button"
author:
published:
created: 2026-06-11
description: "The Action button gives people quick access to their favorite features on supported iPhone and Apple Watch models."
tags:
  - "clippings"
---
![A sketch of an arrow pointing toward the Action button on Apple Watch, suggesting initiating an action. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/804bb45292df928b48d0e7c7115d708e/inputs-action-button-intro~dark%402x.png)

On a supported device, people can use the Action button to run [App Shortcuts](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts) or access system-provided functionality, like turning the flashlight on or off. On Apple Watch Ultra, the Action button supports activity-related actions, including workouts and dives.

A person chooses a function for the Action button when they set up their device; later, they can adjust this choice in Settings. When someone associates an App Shortcut with the Action button, pressing the button runs the App Shortcut similarly to using their voice with Siri or tapping it in Spotlight.

When designing your app or game, think of the Action button as another way for someone to quickly access a function that they use on a regular basis.

## Best practices

**Support the Action button with a set of your app’s essential functions.** For example, if your cooking app includes an egg timer, a “Start Egg Timer” action might be one that people want to initiate when they press the Action button. You don’t need to offer an App Shortcut that opens your app, because the system provides this function already. Your app icon, widgets, and Apple Watch complications give people other quick ways to open your app. For additional guidance, see [App Shortcuts](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts).

**For each action you support, write a short label that succinctly describes it.** People see your labels when they visit Settings to configure the Action button’s behavior. Create labels that use [title-style capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64), begin with a verb, use present tense, and exclude articles and prepositions. Keep labels as short as possible, with a maximum of three words. For example, use “Start Race” instead of “Started Race” or “Start the Race.”

**Prefer letting the system show people how to use the Action button with your app.** When you support the Action button, the system automatically helps people configure it to initiate one of your app’s functions. Avoid creating content that repeats the guidance offered in Settings for the Action button, or other usage tips the system provides.

## Platform considerations

*Not supported in iPadOS, macOS, tvOS, or visionOS.*

### iOS

**Let people use your actions without leaving their current context.** When possible, make use of lightweight multitasking capabilities like [Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities) and custom snippets to provide functionality without opening your app. For example, the “Set Timer” action doesn’t launch the Clock app; it prompts people to set a duration for the timer, and then launches a Live Activity with the countdown.

### watchOS

In watchOS, a person can assign the Action button’s first press to drop a waypoint, start a dive, or begin a specific workout. Beyond a single button press, the Action button also supports secondary actions like marking a segment or transitioning to the next modality during a multi-part workout.

**Consider offering a secondary function that supports or advances the primary action people choose.** People often use the Action button without looking at the screen, so a subsequent button press needs to flow logically from the first press, while also making sense in the current context. If your app supports workout or dive actions, consider designing a simple, intuitive secondary function that people can easily learn and remember. Consider carefully before you offer more than one secondary function, because doing so can increase people’s cognitive load and make your app seem harder to use.

**Prefer using subsequent button presses to support additional functionality rather than to stop or conclude a function.** If you need to let people stop their main task — as opposed to pausing the current function — offer this option within your interface instead.

**Pause the current function when people press the Action button and side button together.** The exception is in a diving app where pausing a dive may be dangerous to the diver, causing them to lose track of their depth or not understand how long they’ve been underwater. Unless pausing the current function results in a negative experience, be sure to meet people’s expectations by letting them pause their current activity when they press both buttons at the same time.

## Resources

#### Related

[Workouts](https://developer.apple.com/design/human-interface-guidelines/workouts)

[Digital Crown](https://developer.apple.com/design/human-interface-guidelines/digital-crown)

[App Shortcuts](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts)

[Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities)

## Change log

| Date | Changes |
| --- | --- |
| September 12, 2023 | Updated to include guidance for iOS. |
| September 14, 2022 | New page. |

---
title: "Apple Pencil and Scribble"
source: "https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble"
author:
published:
created: 2026-06-11
description: "Apple Pencil helps make drawing, handwriting, and marking effortless and natural, in addition to performing well as a pointer and UI interaction tool."
tags:
  - "clippings"
---
![A sketch of a scribble mark, suggesting drawing with Apple Pencil. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/45cc738f71d1682341447f312312cac6/inputs-apple-pencil-and-scribble-intro~dark%402x.png)

Apple Pencil is a versatile, intuitive tool for iPad apps that offers pixel‑level precision when jotting notes, sketching, painting, marking up documents, and more. Scribble lets people use Apple Pencil to enter text in any text field through fast, private, on-device handwriting recognition.

For details on Apple Pencil features and compatibility, see [Apple Pencil](https://www.apple.com/apple-pencil/).

## Best practices

**Support behaviors people intuitively expect when using a marking instrument.** Most people have a lot of experience with real-world marking tools, and this knowledge informs their expectations when they use Apple Pencil with your app. To provide a delightful experience, think about the ways people interact with nondigital pencils, pens, and other marking instruments, and proactively support actions that people may naturally attempt. For example, people often want to write in the margins of documents or books.

**Let people choose when to switch between Apple Pencil and finger input.** For example, if your app supports Apple Pencil for marking, also ensure that your app’s controls respond to Apple Pencil so people don’t have to switch to using their finger to activate them. In this scenario, a control that doesn’t support Apple Pencil input might seem to be unresponsive, giving the impression of a malfunction or low battery. (Scribble only supports Apple Pencil input.)

**Let people make a mark the moment Apple Pencil touches the screen**. You want the experience of putting Apple Pencil to screen to mirror the experience of putting a classic pencil to paper, so it’s essential to avoid requiring people to tap a button or enter a special mode before they can make a mark.

**Help people express themselves by responding to the way they use Apple Pencil.** Apple Pencil may sense tilt (altitude), force (pressure), orientation (azimuth), and [barrel roll](https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble#Barrel-roll). Use this information to affect the strokes Apple Pencil makes, such as by varying thickness and intensity. When responding to pressure, keep things simple and intuitive. For example, it feels natural to affect continuous properties — such as ink opacity or brush size — by varying the pressure.

![An illustration of Apple Pencil tilted up from a horizontal line by 45 degrees.](https://docs-assets.developer.apple.com/published/088ba46c62c8da860232fdd8ed8fb19f/apple-pencil-altitude~dark%402x.png)

Altitude

![An illustration of Apple Pencil drawing a curved line that increases in thickness as more pressure is applied to the tool.](https://docs-assets.developer.apple.com/published/7f3a5c66e3ee86e8457d4e848c5536c3/apple-pencil-pressure~dark%402x.png)

Pressure

![An illustration of Apple Pencil balancing on its tip at the center of a circle that has degree marks around its circumference. A line from the center of the circle to one of the degree marks indicates the angle at which Apple Pencil is tilted.](https://docs-assets.developer.apple.com/published/a7b8cdcba077b51ffe3efd39728e6117/apple-pencil-azimuth~dark%402x.png)

Azimuth

**Provide visual feedback to indicate a direct connection with content.** Make sure Apple Pencil appears to directly and immediately manipulate content it touches onscreen. Avoid letting Apple Pencil appear to initiate seemingly disconnected actions, or affect content on other parts of the screen.

**Design a great left- and right-handed experience.** Avoid placing controls in locations that may be obscured by either hand. If there’s a chance controls may become obscured, consider letting people reposition them.

![An illustration of an iPad app that shows a stack of three circular controls on both side edges. A drawing of a person’s left hand holding an Apple Pencil is shown at the bottom-left corner of the screen, partially obscuring the controls on that side. The controls on the left edge are grayed out to indicate the original position they no longer occupy, while the controls on the right edge are bright to indicate their final position.](https://docs-assets.developer.apple.com/published/105bff7ce5aea841e4b764a86c3f9161/apple-pencil-controls-moved-right~dark%402x.png)

![An illustration of an iPad app that shows a stack of three circular controls on both side edges. A drawing of a person’s right hand holding an Apple Pencil is shown at the bottom-right corner of the screen, partially obscuring the controls on that side. The controls on the right edge are grayed out to indicate the original position they no longer occupy, while the controls on the left edge are bright to indicate their final position.](https://docs-assets.developer.apple.com/published/d0e3bdb60b2a07d569058bef795418d5/apple-pencil-controls-moved-left~dark%402x.png)

## Hover

**Use hover to help people predict what will happen when Apple Pencil touches the screen.** For example, as people hold Apple Pencil above the screen, a hover preview can show the dimensions and color of the mark that the current tool can make. As much as possible, avoid continuously modifying the preview as people move Apple Pencil closer or farther from the screen. A preview that changes according to height is unlikely to clarify the mark Apple Pencil will make, and frequent visual variations can be very distracting to people.

**Avoid using hover to initiate an action.** Unlike tapping a button or marking the screen, hovering is a relatively imprecise motion that doesn’t require people to think about the actual distance between Apple Pencil and the display. You don’t want people to inadvertently perform an action — especially a destructive action that they might want to undo — just because they hold Apple Pencil near the screen.

**Prefer showing a preview value that’s near the middle in a range of dynamic values.** Dynamic properties like opacity or flow can be difficult to depict at the highest or lowest ends of the spectrum. For example, previewing the appearance of a brush mark made with the maximum pressure could occlude the area in which people are marking; in contrast, depicting a mark made with the minimum pressure could be hard for people to detect, making the preview an inaccurate representation of an actual mark or even invisible.

![An illustration of Apple Pencil hovering slightly above a gray rectangle that represents the screen. A small blue oval beneath the tip represents a preview.](https://docs-assets.developer.apple.com/published/2fb8e9bd2479f8f8ae5146a9d153470c/apple-pencil-preview-small~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![An illustration of Apple Pencil hovering slightly above a gray rectangle that represents the screen. A medium blue oval beneath the tip represents a preview.](https://docs-assets.developer.apple.com/published/28b0a81b27d5ceb4a11bb6848e8c0c39/apple-pencil-preview-medium~dark%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

![An illustration of Apple Pencil hovering slightly above a gray rectangle that represents the screen. A large blue oval beneath the tip represents a preview.](https://docs-assets.developer.apple.com/published/da45affd53c9559dea4f9e2e046172a9/apple-pencil-preview-large~dark%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

**Consider using hover to support relevant interactions close to where people are marking.** For example, you might respond to hover by displaying a contextual menu of tool sizes when people perform a gesture like [squeeze](https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble#Squeeze) or press a modifier key on an attached keyboard. Revealing a menu near where people are marking lets them make choices without moving Apple Pencil or their hands to another part of the screen.

**Prefer showing hover previews for Apple Pencil, not for a pointing device.** Although a pointing device can also respond to hover gestures, it might be confusing to provide the same visual feedback for both devices. If it makes sense in your app, you can restrict your hover preview to Apple Pencil only. For developer guidance, see [Adopting hover support for Apple Pencil](https://developer.apple.com/documentation/UIKit/adopting-hover-support-for-apple-pencil).

## Double tap

**Respect people’s settings for the double-tap gesture when they make sense in your app.** By default, models of Apple Pencil that support the double-tap gesture respond by toggling between the current tool and the eraser, but people can set the gesture to toggle between the current and previous tool, show and hide the color picker, or do nothing at all. If your app supports these behaviors, let people use their preferred gestures to perform them. If the systemwide double-tap settings don’t make sense in your app, you can still use the gesture to change the interaction mode. For example, a 3D app that offers a mesh-editing tool could use double tap to toggle between the tool’s raise and lower modes.

**Give people a way to specify custom double-tap behavior if necessary.** If you offer custom double-tap behavior in addition to some or all of the default behaviors, provide a control that lets people choose the custom behavior mode. People need to know which mode they’re in; otherwise, they may get confused when your app responds differently to their interactions. In this scenario, make sure it’s easy for people to discover the custom behavior your app supports, but don’t turn it on by default.

**Avoid using the double-tap gesture to perform an action that modifies content.** In rare cases, it’s possible for people to double-tap accidentally, which means that they may not even be aware that your app has performed the action. Prefer using double tap to perform actions that are easy for people to undo. In particular, avoid using double tap to perform a potentially destructive action that might result in data loss.

## Squeeze

Using Apple Pencil Pro, people can squeeze to perform an action. You can design a custom behavior that responds to squeeze, but recognize that people may choose to configure the squeeze gesture to run an [App Shortcut](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts) instead of app-specific actions.

**Treat squeeze as a single, quick gesture that performs a discrete — not continuous — action.** People sometimes squeeze with a lot of force, so holding a squeeze or squeezing several times quickly can be tiring. Help people remain comfortable by responding to a single squeeze and promptly displaying the result.

**If you use squeeze to reveal app UI, like a contextual menu, display it close to Apple Pencil Pro.** Displaying the result of a squeeze near the tip of Apple Pencil Pro strengthens the connection between the device and the gesture, and can help people stay engaged with their task.

**Define squeeze actions that are nondestructive and easy to undo.** As with the double-tap gesture, people can make the squeeze gesture without meaning to, so it’s essential to avoid using squeeze to perform an action that could result in data loss.

## Barrel roll

While marking with Apple Pencil Pro, people can use a barrel-roll gesture to change the type of mark they’re making. For example, while using Apple Pencil Pro to highlight content in Notes, people can barrel-roll to rotate the angle of the mark.

**Use barrel roll only to modify marking behavior, not to enable navigation or display other controls.** In contrast to double tap and squeeze, barrel roll is naturally related to marking and doesn’t make sense for performing an interface action.

## Scribble

With Scribble and Apple Pencil, people can simply write wherever text is accepted in your app — they don’t have to tap or switch modes first. Because Scribble is fully integrated into iPadOS, it’s available to all apps by default.

**Make text entry feel fluid and effortless.** By default, Scribble works in all standard text components — such as text fields, text views, search fields, and editable fields in web content — except password fields. If you use a custom text field in your app, avoid making people tap or select it before they can begin writing.

**Make Scribble available everywhere people might want to enter text.** Unlike using the keyboard, using Apple Pencil encourages people to treat the screen the way they treat a sheet of paper. Help strengthen this perception in your app by making Scribble consistently available in places where text entry seems natural. For example, in Reminders, it’s natural for people to create a new reminder by writing it in the blank space below the last item, even though the area doesn’t contain a text field. For developer guidance, see [`UIIndirectScribbleInteraction`](https://developer.apple.com/documentation/UIKit/UIIndirectScribbleInteraction-1nfjm).

**Avoid distracting people while they write.** Some text field behaviors work well for keyboard input, but can disrupt the natural writing experience that Apple Pencil provides. For example, it’s best to avoid displaying autocompletion text as people write in a text field because the suggestions can visually interfere with their writing. It’s also a good idea to hide a field’s placeholder text the moment people begin to write so that their input doesn’t appear to overlap it.

**While people are writing in a text field, make sure it remains stationary.** In some cases, it can make sense to move a text field when it becomes focused: for example, a search field might move to make more room to display results. Such a movement is fine when people are using the keyboard, but when they’re writing it can make them feel like they’ve lost control of where their input is going. If you can’t prevent a text field from moving or resizing, consider delaying the change until people pause their writing.

**Prevent autoscrolling text while people are writing and editing in a text field.** When transcribed text autoscrolls, people might try to avoid writing on top of it. Worse, if text scrolls while people are using Apple Pencil to select it, they might select a different range of text than they want.

**Give people enough space to write.** A small text field can feel uncomfortable to write in. When you know that Apple Pencil input is likely, improve the writing experience in your app by increasing the size of the text field before people begin to write in it or when they pause writing; avoid resizing a text field while people are writing. For developer guidance, see [`UIScribbleInteraction`](https://developer.apple.com/documentation/UIKit/UIScribbleInteraction).

![An illustration showing a stack of two text fields, where the top field is about half the width of the bottom field. Both text fields contain the word Name in the leading end, followed by a person's signature. The top text field is too narrow to fit all of the signature and is marked with an X in a circle to indicate incorrect usage. The bottom text field is wide enough to fit the full signature and is marked with a checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/35b463d1adfd9803de25fd15cc1df2c6/apple-pencil-scribble~dark%402x.png)

## Custom drawing

Using [PencilKit](https://developer.apple.com/documentation/PencilKit), you can let people take notes, annotate documents and images, and draw with the same low-latency experience that iOS provides. PencilKit also makes it easy to create a custom drawing canvas in your app and offer a state-of-the-art tool picker and ink palette.

**Help people draw on top of existing content.** By default, the colors on your PencilKit canvas dynamically adjust to Dark Mode, so people can create content in either mode and the results will look great in both. However, when people draw on top of existing content like a PDF or a photo, you want to prevent the dynamic adjustment of colors so that the markup remains sharp and visible.

**Consider displaying custom undo and redo buttons when your app runs in a compact environment.** In a regular environment, the tool picker includes undo and redo buttons, but in a compact environment it doesn’t. In a compact environment, you could display undo and redo buttons in a toolbar. You might also consider supporting the standard 3-finger undo/redo gesture, so people can use it in any environment. For guidance, see [Undo and redo](https://developer.apple.com/design/human-interface-guidelines/undo-and-redo).

![An illustration of an iPad screen in landscape on the left and an iPhone screen in portrait on the right. Both screens show the tool picker at the bottom edge of the screen. The iPad screen shows the standard undo and redo buttons in the left end of the tool picker, and the iPhone screen shows the undo button in the top toolbar.](https://docs-assets.developer.apple.com/published/49ef53a272a9746e0c5c1fa8552bbfe2/apple-pencil-undo-redo-buttons~dark%402x.png)

## Platform considerations

*Not supported in iOS, macOS, tvOS, visionOS, or watchOS.*

## Resources

#### Related

[Entering data](https://developer.apple.com/design/human-interface-guidelines/entering-data)

#### Developer documentation

[PencilKit](https://developer.apple.com/documentation/PencilKit)

[PaperKit](https://developer.apple.com/documentation/PaperKit)

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| May 7, 2024 | Added guidance for handling squeeze and barrel roll on Apple Pencil Pro. |
| September 12, 2023 | Updated artwork. |
| November 3, 2022 | Added guidelines for using hover to enhance your app. |

---
title: "Camera Control"
source: "https://developer.apple.com/design/human-interface-guidelines/camera-control"
author:
published:
created: 2026-06-11
description: "The Camera Control provides direct access to your app’s camera experience."
tags:
  - "clippings"
---
![A stylized representation of the Camera Control.](https://docs-assets.developer.apple.com/published/9239b5856180c2fab15588576504e73b/inputs-camera-control-intro~dark%402x.png)

On iPhone 16 and iPhone 16 Pro models, the Camera Control quickly opens your app’s camera experience to capture moments as they happen. When a person lightly presses the Camera Control, the system displays an overlay that extends from the device bezel.

![A screenshot showing callouts to the Camera Control and overlay on iPhone in landscape orientation.](https://docs-assets.developer.apple.com/published/86935ae3e603d1483bce9fdf96111780/camera-control-button-callout~dark%402x.png)

The overlay allows people to quickly adjust controls. A person can view the available controls by lightly double-pressing the Camera Control. After selecting a control, they can slide their finger on the Camera Control to adjust a value to capture their content as they want.

![A partial screenshot of the Camera Control overlay displaying its controls.](https://docs-assets.developer.apple.com/published/31c4ed5e680391df09aeb669b744b4cf/camera-control-picker~dark%402x.png)

Controls in the overlay

## Anatomy

The Camera Control offers two types of controls for adjusting values or changing between options:

- A *slider* provides a range of values to choose from, such as how much contrast to apply to the content.
- A *picker* offers discrete options, such as turning a grid on and off in the viewfinder.

![A partial screenshot of the Camera Control overlay displaying a slider control.](https://docs-assets.developer.apple.com/published/64c3152033a1ad80399fbae5361329bb/camera-control-slider-control~dark%402x.png)

Slider control

![A partial screenshot of the Camera Control overlay displaying a picker control.](https://docs-assets.developer.apple.com/published/050de81138e4df1b0b0da22f6a04d8d8/camera-control-picker-control~dark%402x.png)

Picker control

In addition to custom controls that you create, the system provides a set of standard controls that you can optionally include in the overlay to allow someone to adjust their camera’s zoom and exposure.

![A partial screenshot of the Camera Control overlay displaying the system zoom factor control.](https://docs-assets.developer.apple.com/published/64c3152033a1ad80399fbae5361329bb/system-control-type-zoom-factor~dark%402x.png)

Zoom factor control

![A partial screenshot of the Camera Control overlay displaying the system exposure bias control.](https://docs-assets.developer.apple.com/published/6ae4ee762416bd6dcdc9cf8ff2eddf8b/system-control-type-exposure-bias~dark%402x.png)

Exposure bias control

## Best practices

**Use SF Symbols to represent control functionality.** The system doesn’t support custom symbols; instead, pick a symbol from SF Symbols that clearly denotes a control’s behavior. iOS offers thousands of symbols you can use to represent the controls your app shows in the overlay. Symbols for controls don’t represent their current state. To view available symbols, see the Camera & Photos section in the [SF Symbols app](https://developer.apple.com/sf-symbols/).

![A partial screenshot of the Camera Control overlay displaying a camera flash control that uses the bolt.fill symbol.](https://docs-assets.developer.apple.com/published/0a8e7e5c6d612fce4b225949fb586fc3/camera-control-picker-sf-symbols-flash~dark%402x.png)

The bolt.fill symbol that represents a control for the camera flash

![A partial screenshot of the Camera Control overlay displaying a camera filters control that uses the camera.filters symbol.](https://docs-assets.developer.apple.com/published/63b5bc9d1a3abd240ceffb0f9852b96d/camera-control-picker-sf-symbols-filters~dark%402x.png)

The camera.filters symbol that represents a control for filters

**Keep names of controls short.** Control labels adhere to Dynamic Type sizes, and longer names may obfuscate the camera’s viewfinder.

**Include units or symbols with slider control values to provide context.** Providing descriptive information in the overlay, such as EV, %, or a custom string, helps people understand what the slider controls. For developer guidance, see [`localizedValueFormat`](https://developer.apple.com/documentation/AVFoundation/AVCaptureSlider/localizedValueFormat).

![A partial screenshot showing an example of the Camera Control overlay with a slider control displaying a value and context for the type of value.](https://docs-assets.developer.apple.com/published/153d69c058cb7264fd956c0545cab8c0/system-control-with-label~dark%402x.png)

Value with context

![A partial screenshot showing an example of the Camera Control overlay with a slider control displaying a value without information about what the value represents.](https://docs-assets.developer.apple.com/published/ee13527a1983c79b04fc44392a8f03d6/system-control-no-label~dark%402x.png)

Value without context

**Define prominent values for a slider control.** Prominent values are ones people choose most frequently, or values that are evenly spaced, like the major increments of zoom factor. When a person slides on the Camera Control to adjust a slider control, the system more easily lands on prominent values you define. For developer guidance, see [`prominentValues`](https://developer.apple.com/documentation/AVFoundation/AVCaptureSlider/prominentValues-199dz).

**Make space for the overlay in the viewfinder.** The overlay and control labels occupy the screen area adjacent to the Camera Control in both portrait and landscape orientations. To avoid overlapping the interface elements of your camera capture experience, place your UI outside of the overlay areas. Maximize the height and width of the viewfinder and allow the overlay to appear and disappear over it.

![Partial screenshots showing the Camera Control overlay with its control's label in the viewport in portrait and landscape orientations on iPhone.](https://docs-assets.developer.apple.com/published/1ac20f6373076ebf55b8896368c6cb0b/camera-control-portrait-landscape-orientation~dark%402x.png)

**Minimize distractions in the viewfinder.** When capturing a photo or video, people appreciate a large preview image with as few visual distractions as possible. Avoid duplicating controls, like sliders and toggles, in your UI and the overlay when the system displays the overlay.

![A partial screenshot showing an example of the Camera Control overlay with UI elements removed from the capture viewport.](https://docs-assets.developer.apple.com/published/658850f8487ef5d1c8f49785003b764c/camera-control-screen-ui-good-example~dark%402x.png)

Keep UI minimal.

![A partial screenshot showing an example of the Camera Control overlay with UI elements duplicated in the capture viewport.](https://docs-assets.developer.apple.com/published/80d2671546a6a1202fbd9d949e8f5545/camera-control-screen-ui-bad-example~dark%402x.png)

Avoid showing controls in the viewfinder that people access in the overlay.

**Enable or disable controls depending on the camera mode.** For example, disable video controls when taking photos. The overlay supports multiple controls, but you can’t remove or add controls at runtime.

**Consider how to arrange your controls.** Order commonly used controls toward the middle to allow quick access, and include lesser used controls on either side. When a person lightly presses the Camera Control to open the overlay again, the system remembers the last control they used in your app.

**Allow people to use the Camera Control to launch your experience from anywhere.** Create a locked camera capture extension that lets people configure the Camera Control to launch your app’s camera experience from their locked device, the Home Screen, or from within other apps. For guidance, see [Camera experiences on a locked device](https://developer.apple.com/design/human-interface-guidelines/controls#Camera-experiences-on-a-locked-device).

## Platform considerations

*Not supported in iPadOS, macOS, watchOS, tvOS, or visionOS.*

## Resources

#### Related

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols)

[Controls](https://developer.apple.com/design/human-interface-guidelines/controls)

#### Developer documentation

[Enhancing your app experience with the Camera Control](https://developer.apple.com/documentation/AVFoundation/enhancing-your-app-experience-with-the-camera-control) — AVFoundation

[`AVCaptureControl`](https://developer.apple.com/documentation/AVFoundation/AVCaptureControl) — AVFoundation

[LockedCameraCapture](https://developer.apple.com/documentation/LockedCameraCapture)

## Change log

| Date | Changes |
| --- | --- |
| September 9, 2024 | New page. |


---
title: "Digital Crown"
source: "https://developer.apple.com/design/human-interface-guidelines/digital-crown"
author:
published:
created: 2026-06-11
description: "The Digital Crown is an important hardware input for Apple Vision Pro and Apple Watch."
tags:
  - "clippings"
---
![A sketch of a curved arrow beside a Digital Crown, that suggests turning the Digital Crown. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/b27ff9da695212f93bad29301b5ecfe6/inputs-digital-crown-intro~dark%402x.png)

On both Apple Vision Pro and Apple Watch, people can use the Digital Crown to interact with the system; on Apple Watch, people can also use the Digital Crown to interact with apps.

![A close-up photograph of a person's head wearing Apple Vision Pro, with their index finger pointing at the Digital Crown.](https://docs-assets.developer.apple.com/published/b421afd55a6401eeacedaa088b02d909/digital-crown-apple-vision-pro%402x.png)

The Digital Crown on Apple Vision Pro

![A close-up photograph of Apple Watch, shown at an angle, with the Digital Crown prominently featured at the center of the image.](https://docs-assets.developer.apple.com/published/b557ec51bcbcaac70485ca87eda59c40/digital-crown-apple-watch%402x.png)

The Digital Crown on Apple Watch

## Apple Vision Pro

On Apple Vision Pro, people use the Digital Crown to:

- Adjust volume
- Adjust the amount of immersion in a portal, an Environment, or an app or game running in a Full Space (for guidance, see [Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences))
- Recenter content so it’s in front of them
- Open Accessibility settings
- Exit an app and return to the Home View

## Apple Watch

As people turn the Digital Crown, it generates information you can use to enhance or facilitate interactions with your app, like scrolling or operating standard or custom controls.

Starting with watchOS 10, the Digital Crown takes on an elevated role as the primary input for navigation. On the watch face, people turn the Digital Crown to view widgets in the Smart Stack, and on the Home Screen, people use it to move vertically through their collection of apps. Within apps, people turn the Digital Crown to switch between vertically paginated tabs, and to scroll through list views and variable height pages.

Beyond its use for navigation, turning the Digital Crown generates information you can use to enhance or facilitate interactions with your app, such as inspecting data or operating standard or custom controls.

Most Apple Watch models provide haptic feedback for the Digital Crown, which gives people a more tactile experience as they scroll through content. By default, the system provides linear haptic *detents* — or taps — as people turn the Digital Crown a specific distance. Some system controls, like table views, provide detents as new items scroll onto the screen.

**Anchor your app’s navigation to the Digital Crown.** Starting with watchOS 10, turning the Digital Crown is the main way people navigate within and between apps. List, tab, and scroll views are vertically oriented, allowing people to use the Digital Crown to easily move between the important elements of your app’s interface. When anchoring interactions to the Digital Crown, also be sure to back them up with corresponding touch screen interactions.

**Consider using the Digital Crown to inspect data in contexts where navigation isn’t necessary.** In contexts where the Digital Crown doesn’t need to navigate through lists or between pages, it’s a great tool to inspect data in your app. For example, in World Clock, turning the Digital Crown advances the time of day at a selected location, allowing people to compare various times of day to their current time.

**Provide visual feedback in response to Digital Crown interactions.** For example, pickers change the currently displayed value as people use the Digital Crown. If you track turns directly, use this data to update your interface programmatically. If you don’t provide visual feedback, people are likely to assume that turning the Digital Crown has no effect in your app.

**Update your interface to match the speed with which people turn the Digital Crown.** People expect turning the Digital Crown to give them precise control over an interface, so it works well to use this speed to determine the speed at which you make changes. Avoid updating content at a rate that makes it difficult for people to select values.

**Use the default haptic feedback when it makes sense in your app.** If haptic feedback doesn’t feel right in the context of your app — for example, if the default detents don’t match your app’s animation — turn off the detents. You can also adjust the haptic feedback behavior for tables, letting them use linear detents instead of row-based detents. For example, if your table has rows with significantly different heights, linear detents may give people a more consistent experience.

## Platform considerations

*Not supported in iOS, iPadOS, macOS, or tvOS.*

## Resources

#### Related

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

[Action button](https://developer.apple.com/design/human-interface-guidelines/action-button)

[Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences)

#### Developer documentation

[`WKCrownDelegate`](https://developer.apple.com/documentation/WatchKit/WKCrownDelegate) — WatchKit

## Change log

| Date | Changes |
| --- | --- |
| December 5, 2023 | Added artwork for Apple Vision Pro and Apple Watch, and clarified that visionOS apps don’t receive direct information from the Digital Crown. |
| June 21, 2023 | Updated to include guidance for visionOS. |
| June 5, 2023 | Added guidelines emphasizing the central role of the Digital Crown for navigation. |

---
title: "Eyes"
source: "https://developer.apple.com/design/human-interface-guidelines/eyes"
author:
published:
created: 2026-06-11
description: "In visionOS, people look at a virtual object to identify it as a target they can interact with."
tags:
  - "clippings"
---
![A sketch of a human eye. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/d6515707196c3f08d8900f957dbf2172/inputs-eyes-intro~dark%402x.png)

When people look at an interactive element, visionOS highlights it, providing visual feedback that helps them confirm the item is one they want. The visual feedback, or *hover effect*, shows people that they can use an [indirect gesture](https://developer.apple.com/design/human-interface-guidelines/gestures#visionOS) like tap to interact with the element.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/592428fafa4977447c16993a8daff765/visionos-focus-and-selection-settings.mp4"></video> [Play](#)

In some cases, the system can automatically display an expanded view of a component after people look at it. For example, when people look at a tab bar, the entire bar resizes to reveal text labels next to each tab. In this scenario, an individual tab also highlights before the tab bar expansion to let people select it before revealing the labels. Another example is a button that can reveal a tooltip when people look at it.

visionOS also supports *focus effects* that help people navigate apps and the system using a connected input device like a keyboard or game controller. Focus effects are unrelated to the hover effect; to learn more, see [Focus and selection](https://developer.apple.com/design/human-interface-guidelines/focus-and-selection).

## Best practices

**Always give people multiple ways to interact with your app.** Design your app to support the accessibility features people use to personalize the ways they interact with their devices. For guidance, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility).

**Design for visual comfort.** Help people accomplish their primary task by making sure that the objects they need to use are within their [field of view](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Field-of-view). When your app or game is running in the Shared Space or a Full Space, the system automatically places the first window or volume people open in a convenient location in front of them. While running in a Full Space, your app or game can also request access to information about a person’s head pose to help you place 3D content appropriately. In all cases, you can improve the visual comfort of your experience when you avoid requiring people to make multiple quick eye adjustments, either over a large area or through multiple levels of depth. For guidance, see [Depth](https://developer.apple.com/design/human-interface-guidelines/spatial-layout#Depth).

**Place content at a comfortable viewing distance.** For example, to help people remain comfortable while they read or engage with content over time, aim to place it at least one meter away. In general, you don’t want to place content very close to people unless they’ll view or interact with it for only a little while.

**Prefer using standard UI components.** System-provided components respond consistently when people look at them. If your custom components use different visual cues to provide visual feedback, it can be difficult for people to learn and remember how these components work.

## Making items easy to see

**Minimize visual distractions.** When there’s a lot of visual noise, it can be difficult for people to find the object they’re looking for. Visual movement can be even more distracting: When people sense movement — especially in their peripheral vision — they tend to respond automatically by looking at it, making it hard to keep looking at the object they’re interested in. For example, revealing content near a button people are looking at can cause them to involuntarily look at the new content instead of the button.

**Make it easy for people to look at an item by providing enough space around it.** Because eyes naturally tend to make small, quick adjustments in direction even while people are looking at one place, crowding UI objects together can make it difficult for people to look at one of them without jumping to another. You can help ensure that there’s enough space between interactive items by using a margin of at least 16 points around the bounds of each item or by placing items so that their centers are always at least 60 points apart. For additional layout guidance, see [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) and [Spatial layout](https://developer.apple.com/design/human-interface-guidelines/spatial-layout).

**Avoid using a repeating pattern or texture that fills the field of view.** In some cases, people’s eyes can lock onto different elements in a pattern or texture, making the elements appear to have different depths. To avoid this effect, consider using the pattern in a smaller area.

## Encouraging interaction

**Consider using subtle visual cues to encourage people to look at the item they’re most likely to want.** For example, it often works well to place the item near the center of the field of view or use techniques like gentle motion, increased contrast, or variations in color or scale to draw people’s attention. In general, prefer cues that are noticeable without being flashy or harsh.

**In general, give an interactive item a rounded shape.** People’s eyes tend to be drawn toward the corners in a shape, making it difficult to keep looking at the shape’s center. The more rounded an item’s shape, the easier it is for people to use their eyes to target it.

![A square button.](https://docs-assets.developer.apple.com/published/d60c5b225c91f041c5ef7e273a9219b6/visionos-eyes-sharp-button-incorrect%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

![A circular button.](https://docs-assets.developer.apple.com/published/61afcfc99cebef8a0feae23fc5803edc/visionos-eyes-rounded-button-correct%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

**If you create an interactive component that consists of more than one element, be sure to provide an overall containing shape that visionOS can highlight.** For example, if an image and a label below it combine to act as one interactive component, you need to define a custom region that encompasses both elements, allowing visionOS to highlight the entire region when people look at either element.

## Custom hover effects

When it makes sense in your app or game, you can design a hover effect that animates in a custom way when people look at an element, including system-provided or custom UI elements and RealityKit entities. You can use a custom hover effect to replace or augment a standard effect.

Before you start designing custom hover effects, it’s important to understand how they work. To enable a custom hover effect for an element, you create two states or appearances for it: one that shows the custom hover effect and one that doesn’t. When someone looks at the element in your app or game, the system applies your predefined hover effect in a process that’s outside of your software’s process. This means that you don’t know when the system applies a custom hover effect or what state the element is in at that moment. The out-of-process nature of a custom hover effect also means that it can’t run code that requires knowing when people are looking at the element.

As an example that shows what a custom hover effect can and can’t do, consider a photo-browsing app where a photo’s custom effect displays a different symbol depending on whether people have added the photo to Favorites. The app specifies the appropriate symbol for a photo’s custom hover effect and the system displays the effect if people look at the photo. However, the hover effect can’t perform the favoriting action because the system doesn’t tell the app when someone is looking at the photo.

**Prefer using a custom hover effect to emphasize or enhance a special moment in your experience.** People are accustomed to the standard hover effects that provide visual feedback or, in the case of tab bars or tooltips, additional information, so a custom hover effect can be especially noticeable. Adding too many custom hover effects — or using them when standard effects are sufficient — can dilute the impact of your design, distract people from their task, and even cause visual discomfort.

**Choose the right delay.** An element’s custom hover effect can appear instantly, after a short delay, or after a slightly longer delay, depending on how you expect people to interact with the element.

- **No delay (default).** A custom hover effect that appears without delay tends to be especially useful when the effect is subtle or invites interaction, like when a knob appears on a slider.
- **Short delay.** Consider using a short delay to let people look at an element and quickly interact with it without waiting for the effect to appear; for example, the expansion of tabs in a tab bar works this way.
- **Long delay.** If your custom hover effect shows additional information, like when a tooltip appears below a button, a slightly longer delay can work well because most people won’t need to view the additional information every time.

**Aim to keep one or more of the element’s primary views unchanged in both states of a custom hover effect.** When at least one primary view remains constant during a hover effect’s animation, it provides visual stability that can help people follow the element’s transition. If all of an element’s views move or change during a custom hover effect, it can disorient people and make them lose track of what’s happening.

**Thoroughly test custom hover effects.** Testing is the only way to determine whether a custom hover effect looks good, responds appropriately, and makes your experience feel alive without distracting people. Aim to test your custom hover effects while wearing Apple Vision Pro so you can develop intuition about how to use them to enhance your experience.

## Platform considerations

*Not supported in iOS, iPadOS, macOS, tvOS, or watchOS.*

## Resources

#### Related

[Immersive experiences](https://developer.apple.com/design/human-interface-guidelines/immersive-experiences)

[Gestures](https://developer.apple.com/design/human-interface-guidelines/gestures)

[Spatial layout](https://developer.apple.com/design/human-interface-guidelines/spatial-layout)

#### Developer documentation

[Adopting best practices for privacy and user preferences](https://developer.apple.com/documentation/visionOS/adopting-best-practices-for-privacy) — visionOS

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 10, 2024 | Added guidance for custom hover effects. |
| March 29, 2024 | Added artwork showing the visionOS hover effect. |
| October 24, 2023 | Clarified the difference between focus effects and the visionOS hover effect. |
| June 21, 2023 | New page. |


---
title: "Focus and selection"
source: "https://developer.apple.com/design/human-interface-guidelines/focus-and-selection"
author:
published:
created: 2026-06-11
description: "Focus helps people visually confirm the object that their interaction targets."
tags:
  - "clippings"
---
![A sketch of a frame around a circular interface element, suggesting locking focus on an object. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/6fc81c61118b80105492d01e206037ee/inputs-focus-and-selection-intro~dark%402x.png)

Focus supports simplified, component-based navigation. Using inputs like a remote, game controller, or keyboard, people bring focus to the components they want to interact with.

In many cases, focusing an item also selects it. The exception is when automatic selection might cause a distracting context shift, like opening a new view. In tvOS, for example, people use the remote to move focus from item to item as they seek the one they want, but because selecting a focused item opens or activates it, selection requires a separate gesture.

Different platforms communicate focus in different ways. For example, iPadOS and macOS show focus by drawing a ring around an item or highlighting it; tvOS generally uses the [parallax effect](https://developer.apple.com/design/human-interface-guidelines/images#Parallax-effect) to give the focused item an appearance of depth and liveliness. The combination of focus effects and interactions is sometimes called a *focus system* or *focus model*.

## Best practices

**Rely on system-provided focus effects.** System-defined focus effects are precisely tuned to complement interactions with Apple devices, providing experiences that feel responsive, fluid, and lifelike. Incorporating system-provided focus behaviors gives your app consistency and predictability, helping people understand it quickly. Consider creating custom focus effects only if it’s absolutely necessary.

**Avoid changing focus without people’s interaction.** People rely on the focus system to help them know where they are in your app. If you change focus without their interaction, people have to spend time finding the newly focused item, delaying their current task. The exception is when people are moving focus using an input device that lets them make discrete, directional movements — like a keyboard, remote, or game controller — and a previously focused item disappears. In this scenario, there are only a small number of items within one discrete step of the previously focused item, so moving focus to one of these remaining items ensures that the focus indicator is in a location people can easily find. When people aren’t moving focus by using such an input device, you can’t predict the item they’ll target next, so it’s generally best to simply hide the focus indicator when the focused object disappears.

**Be consistent with the platform as you help people bring focus to items in your app.** For example, in iPadOS and macOS, a full keyboard access mode helps people use the keyboard to reach every control, so you only need to support focus for content elements like list items, text fields, and search fields, and not for controls like buttons, sliders, and toggles. In contrast, tvOS users rely on using directional gestures on a remote or game controller (or pressing the arrow keys on an attached keyboard) to reach every onscreen element, so you need to make sure that people can bring focus to every element in your app.

**Indicate focus using visual appearances that are consistent with the platform.** For example, consider a window that contains a list of items. In iPadOS and macOS, the system draws focused list items using white text and a background highlight that matches the app’s accent color, drawing unfocused items using the standard text color and a gray background highlight (for developer guidance, see [`UICollectionView`](https://developer.apple.com/documentation/UIKit/UICollectionView) and [`NSTableView`](https://developer.apple.com/documentation/AppKit/NSTableView)).

**In general, use a focus ring for a text or search field, but use a highlight in a list or collection.** Although you can use a focus ring to draw attention to an item that fills a cell, like a photo, it’s usually easier for people to view lists and collections when an entire row is highlighted.

## Platform considerations

*Not supported in iOS or watchOS.*

### iPadOS

iPadOS 15 and later defines a focus system that supports keyboard interactions for navigating text fields, text views, and sidebars, in addition to various types of collection views and other custom views in your app.

The iPadOS and tvOS focus systems are similar. People perform actions by moving a focus indicator to an item and then selecting it (for guidance, see [tvOS](https://developer.apple.com/design/human-interface-guidelines/focus-and-selection#tvOS)). Although the underlying system is the same, the user experiences are a little different. tvOS uses *directional focus*, which means people can use the same interaction — that is, swiping the Siri Remote or using only the arrow keys on a connected keyboard — to navigate to every onscreen component. In contrast, iPadOS defines *focus groups*, which represent specific areas within an app, like a sidebar, grid, or list. Using focus groups, iPadOS can support two different keyboard interactions.

- Pressing the Tab key moves focus among focus groups, letting people navigate to sidebars, grids, and other app areas.
- Pressing an arrow key supports a directional focus interaction that’s similar to tvOS, but limited to navigation among items in the same focus group. For example, people can use an arrow key to move through the items in a list or a sidebar.

Onscreen components can indicate focus by using the halo effect or the highlighted appearance.

The *halo* focus effect — also known as the *focus ring* — displays a customizable outline around the component. You can apply the halo effect to custom views and to fully opaque content within a collection or list cell, such as an image.

![An illustration of a collection view of photos showing the standard halo effect that outlines the focused photo.](https://docs-assets.developer.apple.com/published/2bfe6fedc5a6a8ecf6d7e74e9492a096/focus-and-selection-halo-focus-effect~dark%402x.png)

**Customize the halo focus effect when necessary.** By default, the system uses an item’s shape to infer the shape of its halo. If the system-provided halo doesn’t give you the appearance you want, you can refine it to match contours like rounded corners or shapes defined by Bézier paths. You can also adjust a halo’s position if another component occludes or clips it. For example, you might need to ensure that a badge appears above the halo or that a parent view doesn’t clip it. For developer guidance, see [`UIFocusHaloEffect`](https://developer.apple.com/documentation/UIKit/UIFocusHaloEffect).

![An illustration of a collection view of photos showing a rounded-rectangle halo effect that outlines the focused photo.](https://docs-assets.developer.apple.com/published/7e0a259cedf8ab832c7be1b948caac3b/focus-and-selection-customized-halo~dark%402x.png)

The *highlighted* appearance — in which the component’s text uses the app’s accent color — also indicates focus, but it’s not a focus effect. The highlight appearance occurs automatically when people select a collection view cell on which you’ve set content configurations (for developer guidance, see [`UICollectionViewCell`](https://developer.apple.com/documentation/UIKit/UICollectionViewCell)).

![An illustration of a list of menu items with the second item highlighted. The item's title and icon are tinted with a red accent color.](https://docs-assets.developer.apple.com/published/41b701fd4d7796eae788fad5e8736b8c/focus-and-selection-highlighted-appearance~dark%402x.png)

**Ensure that focus moves through your custom views in ways that make sense.** As people continue pressing the Tab key, focus moves through focus groups in reading order: leading to trailing, and top to bottom. Although focus moves through system-provided views in ways that people expect, you might need to adjust the order in which the focus system visits your custom views. For example, if you want focus to move down through a vertical stack of custom views before it moves in the trailing direction to the next view, you need to identify the stack container as a single focus group. For developer guidance, see [`focusGroupIdentifier`](https://developer.apple.com/documentation/UIKit/UIFocusEnvironment/focusGroupIdentifier).

**Adjust the priority of an item to reflect its importance within a focus group.** When a group receives focus, its *primary item* automatically receives focus too, making it easy for people to select the item they’re most likely to want. You can make an item primary by increasing its priority. For developer guidance, see [`UIFocusGroupPriority`](https://developer.apple.com/documentation/UIKit/UIFocusGroupPriority).

### tvOS

**In a full-screen experience, let people use gestures to interact with the content, not to move focus.** When an item displays in full screen, it doesn’t show focus, so people naturally assume that their gestures will affect the object, and not its focus state.

**Avoid displaying a pointer.** People expect to navigate a fixed number of items by changing focus, not by trying to drag a tiny pointer around a huge screen. While free-form movement might make sense during gameplay, such as when looking for a hidden object or flying a plane, use the focus model when people navigate menus and other interface elements. If your app requires a pointer, make sure it’s highly visible and feels integrated with your experience.

**Design your interface to accommodate components in various focus states.** In tvOS, focusable items can have up to five different states, each of which is visually distinct. Because focusing an item often increases its scale, you need to supply assets for the larger, focused size to ensure they always look sharp, and you need to make sure the larger item doesn’t crowd the surrounding interface.

| State | Description |
| --- | --- |
| ![An image of an unfocused button on top of a photograph. A small drop shadow makes it appear very close to the content behind it, with a translucent background infused by the colors of the content, and a high-contrast text color.](https://docs-assets.developer.apple.com/published/b3e50523058af2da68e6ea3ca9c01f20/focus-and-selection-state-unfocused~dark%402x.png) | The viewer hasn’t brought focus to the item. Unfocused items appear less prominent than focused items. |
| ![An image of a focused button on top of a photograph. It’s larger than an unfocused button, and a drop shadow makes it appear farther away from the content behind it, with an opaque white background and a black text label.](https://docs-assets.developer.apple.com/published/c911c45b14aebf42db3b386550e6f39d/focus-and-selection-state-focused~dark%402x.png) | The viewer brings focus to the item. A focused item visually stands out from the other onscreen content through elevation to the foreground, illumination, and animation. |
| ![An image of a highlighted button on top of a photograph. It’s the same size as an unfocused button, and a drop shadow makes it appear a little farther away from the surface of the content behind it, with an opaque white background and a black text label.](https://docs-assets.developer.apple.com/published/7a6bd5d1d734dd6046aeb9088aa610d6/focus-and-selection-state-highlighted~dark%402x.png) | The viewer chooses the focused item. A focused item provides instant visual feedback when people choose it. For example, a button might briefly invert its colors and animate before it transitions to its selected appearance. |
| ![An image of a selected button on top of a photograph. It’s the same size as an unfocused button, and a small drop shadow makes it appear very close to the content behind it, with an opaque white background and a black text label.](https://docs-assets.developer.apple.com/published/8d7fafa13c81639ff70a482aa7ed162f/focus-and-selection-state-selected~dark%402x.png) | The viewer has chosen or activated the item in some way. For example, a heart-shaped button that people can use to favorite a photo might appear filled in the selected state and empty in the deselected state. |
| ![An image of an unavailable button on top of a photograph. It’s the same size as an unfocused button. It lacks a drop shadow and appears to rest directly on the content behind it, with a translucent background tinted by the the colors of nearby content, and a low-contrast text color.](https://docs-assets.developer.apple.com/published/223e5280ec2634574c611665317b6334/focus-and-selection-state-unavailable~dark%402x.png) | The viewer can’t bring focus to the item or choose it. An unavailable item appears inactive. |

For developer guidance, see [Adding user-focusable elements to a tvOS app](https://developer.apple.com/documentation/UIKit/adding-user-focusable-elements-to-a-tvos-app).

### visionOS

visionOS supports the same focus system as in iPadOS and tvOS, letting people use a connected input device like a keyboard or game controller to interact with apps and the system.

## Resources

#### Related

[Eyes](https://developer.apple.com/design/human-interface-guidelines/eyes)

[Keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards)

#### Developer documentation

[Focus Attributes](https://developer.apple.com/documentation/TVML/focus-attributes) — TVML

[Focus-based navigation](https://developer.apple.com/documentation/UIKit/focus-based-navigation) — UIKit

[About focus interactions for Apple TV](https://developer.apple.com/documentation/UIKit/about-focus-interactions-for-apple-tv) — UIKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| October 24, 2023 | Clarified the difference between focus effects and the visionOS hover effect. |
| June 21, 2023 | Updated to include guidance for visionOS. |


---
title: "Game controls"
source: "https://developer.apple.com/design/human-interface-guidelines/game-controls"
author:
published:
created: 2026-06-11
description: "Precise, intuitive game controls enhance gameplay and can increase a player’s immersion in the game."
tags:
  - "clippings"
---
![A sketch of a D-pad control from a game controller, suggesting gameplay. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/b30c788442a9f3590507c2de29191783/inputs-game-controls-intro~dark%402x.png)

On Apple platforms, a game can support input from physical game controllers or default system interactions, like touch, a remote, or a mouse and keyboard. Players might prefer to use physical game controllers, but there are two important reasons to also support a platform’s default interaction methods:

- Even though all platforms except watchOS support physical game controllers, not every player might have access to one.
- Players appreciate games that let them use the platform interaction method they’re most familiar with.

To reach the widest audience and provide the best experience for each platform, keep these factors in mind when choosing the input methods to support.

## Touch controls

For iOS and iPadOS games, supporting touch interaction means that you can provide virtual controls on top of game content while also letting players interact with game elements by touching them directly. You can use the [Touch Controller](https://developer.apple.com/documentation/TouchController) framework to add these virtual controls to your game. Keep the following guidelines in mind to create an enjoyable touch control experience.

**Determine whether it makes sense to display virtual controls on top of game content.** In general, virtual game controls benefit games that offer a large number of actions or require players to control movement. However, sometimes gameplay is more immersive and effective when players can interact directly with in-game objects. Look for opportunities to reduce the amount of virtual controls that overlap your game content by associating actions with in-game gestures instead. For example, consider letting players tap objects to select them instead of adding a virtual selection button.

**Place virtual buttons where they’re easy to access.** Take into account the device’s boundaries and [safe areas](https://developer.apple.com/design/human-interface-guidelines/layout#Guides-and-safe-areas) as well as comfortable locations for controls. Make sure to position buttons where they don’t overlap system features like the Home indicator or Dynamic Island on iPhone. Place frequently used buttons near a player’s thumb, avoiding the circular regions where players expect movement and camera input to happen. Place secondary controls, like menus, at the top of the screen.

![A graphic that shows ideal placement for touch controls for an iPhone in landscape orientation.](https://docs-assets.developer.apple.com/published/dd0cd40a5b38af26ea97072ecf987b24/game-controls-touch-input-heat-map%402x.png)

Placing virtual controls within reach of people’s thumbs can make your game more comfortable to play.

**Make sure controls are large enough.** Make sure frequently used controls are a minimum size of 44x44 pt, and less important controls, such as menus, are a minimum size of 28x28 pt to accommodate people’s fingers.

**Always include visible and tactile press states.** A virtual control feels unresponsive without a visual and physical press state. Help players understand when they successfully interact with a button by adding a visual press state effect, such as a glow, that they can see even when their finger is covering the control. Combine this press state with sound and haptics to enhance the feeling of feedback. For guidance, see [Playing haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics).

![A right hand holding an iPhone in landscape orientation. The thumb is pressing down on a virtual button, and the button indicates its press state by increasing its opacity and showing a glow effect around it.](https://docs-assets.developer.apple.com/published/5cfbeab8d2ba12c23388627a4b9195ad/game-controls-press-state~dark%402x.png)

**Use symbols that communicate the actions they perform.** Choose artwork that visually represents the action each button performs, such as a graphic of a weapon to represent an attack. Avoid using abstract shapes or controller-based naming like A, X, or R1 as artwork, which makes it harder for players to understand and remember what specific controls do.

![A game controller button with a graphic of a square mapping to a virtual button with a graphic of a hand making a gesture to pick up an object.](https://docs-assets.developer.apple.com/published/369e68c7ede66c096da54925bc1308bf/game-controls-button-to-action~dark%402x.png)

**Show and hide virtual controls to reflect gameplay.** Take advantage of the dynamic nature of touch controls and adapt what controls players see onscreen depending on their context. You can hide controls when an action isn’t available or relevant, letting you reduce clutter and help players concentrate on what’s important. For example, consider hiding movement controls until a player touches the screen to reduce the amount of UI overlapping your game content.

**Combine functionality into a single control.** Consider redesigning game mechanics that require players to press multiple buttons at the same time or in a sequence. Leverage gestures such as double tap and touch and hold to provide different variations of the same action, such as touch and hold to use a special powered up version of an attack. For multiple actions, such as walking or sprinting, consider combining the actions into a single control.

![A graphic of a virtual button that supports both single tap and touch and hold gestures.](https://docs-assets.developer.apple.com/published/f2e459c385dd926f8ac93aff698f4e23/game-controls-power-up-action~dark%402x.png)

**Map movement and camera controls to predictable behavior.** Typically, players expect to control movement using the left side of their screen, and control camera direction using the right side of their screen. Maximize the amount of space that players can control both movement and the camera direction by using as large of an input area as possible. For movement control, opt to show a virtual thumbstick wherever the player lands their thumb instead of a static thumbstick position. For camera control, opt to use direct touch to pan the camera instead of a virtual thumbstick.

![A graphic that shows placement for movement controls on the left side of the screen, and placement for camera controls on the right side of the screen.](https://docs-assets.developer.apple.com/published/7bc00774e35dd1839091df6f8c16a830/game-controls-camera-thumbstick-zones%402x.png)

## Physical controllers

**Support the platform’s default interaction method.** A game controller is an optional purchase, but every iPhone and iPad has a touchscreen, every Mac has a keyboard and a trackpad or mouse, every Apple TV has a remote, and every Apple Vision Pro responds to gestures people make with their eyes and hands. If you support game controllers, try to make sure there’s a fallback for using the platform’s default interaction method. For developer guidance, see [Adding virtual controls to games that support game controllers in iOS](https://developer.apple.com/documentation/GameController/adding-virtual-controls-to-games-that-support-game-controllers-in-ios).

**Tell people about game controller requirements.** In tvOS and visionOS, you can require the use of a physical game controller. The App Store displays a “Game Controller Required” badge to help people identify such apps. Remember that people can open your game at any time, even without a connected controller. If your app requires a game controller, check for its presence and gracefully prompt people to connect one. For developer guidance, see [`GCRequiresControllerUserInteraction`](https://developer.apple.com/documentation/BundleResources/Information-Property-List/GCRequiresControllerUserInteraction).

**Automatically detect whether a controller is paired.** Instead of having players manually set up a physical game controller, you can automatically detect whether a controller is paired and get its profile. For developer documentation, see [Game Controller](https://developer.apple.com/documentation/GameController).

![An illustration of a game controller with callouts that indicate the locations of the controller’s triggers, shoulder buttons, directional pad, and thumbsticks.](https://docs-assets.developer.apple.com/published/13ea243e715a7b998e1459fcfc1be398/game-controls-controller-anatomy~dark%402x.png)

**Customize onscreen content to match the connected game controller.** To simplify your game’s code, the Game Controller framework assigns standard names to controller elements based on their placement, but the colors and symbols on an actual game controller may differ. Be sure to use the connected controller’s labeling scheme when referring to controls or displaying related content in your interface. For developer guidance, see [`GCControllerElement`](https://developer.apple.com/documentation/GameController/GCControllerElement).

**Map controller buttons to expected UI behavior.** Outside of gameplay, players expect to navigate your game’s UI in a way that matches the familiar behavior of the platform they’re playing on. When not controlling gameplay, follow these conventions across all Apple platforms:

| Button | Expected behavior for UI |
| --- | --- |
| A | Activates a control |
| B | Cancels an action or returns to previous screen |
| X | — |
| Y | — |
| Left shoulder | Navigates left to a different screen or section |
| Right shoulder | Navigates right to a different screen or section |
| Left trigger | — |
| Right trigger | — |
| Left/right thumbstick | Moves selection |
| Directional pad | Moves selection |
| Home/logo | Reserved for system controls |
| Menu | Opens game settings or pauses gameplay |

**Support multiple connected controllers.** If there are multiple controllers connected, use labels and glyphs that match the one that the player is actively using. If your game supports multiplayer, use the appropriate labels and symbols when referring to a specific player’s controller. If you need to refer to buttons on multiple controllers, consider listing them together.

**Prefer using symbols, not text, to refer to game controller elements.** The Game Controller framework makes [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) available for most elements, including the buttons on various brands of game controllers. Using symbols instead of text descriptions can be especially helpful for players who aren’t experienced with controllers because it doesn’t require them to hunt for a specific button label during gameplay.

![A screenshot of the SF Symbols app showing symbols in the Gaming category.](https://docs-assets.developer.apple.com/published/f04eb9a77a44a57ecc0870b7c74da998/game-controls-sf-symbols-gaming-category~dark%402x.png)

## Keyboards

Keyboard players appreciate using keyboard bindings to speed up their interactions with apps and games.

**Prioritize single-key commands.** Single-key commands are generally easier and faster for players to perform, especially while they’re simultaneously using a mouse or trackpad. For example, you might use the first letter of a menu item as a shortcut, such as I for Inventory or M for Map; you might also map the game’s main action to the Space bar, taking advantage of the key’s relatively large size.

**Test key binding comfort game using an Apple keyboard.** For example, if a key binding uses the Control key (^) on a non-Apple keyboard, consider remapping it to the Command key (⌘) on an Apple keyboard. On Apple keyboards, the Command key is conveniently located next to the Space bar, making it especially easy to reach when players are using the W, A, S, and D keys.

**Take the proximity of keys into account.** For example, if players navigate using the W, A, S, and D keys, consider using nearby keys to define other high-value commands. Similarly, if there’s a group of closely related actions, it can work well to map their bindings to keys that are physically close together, such as using the number keys for inventory categories.

**Let players customize key bindings.** Although players tend to expect a reasonable set of defaults, many people need to customize a game’s key bindings for personal comfort and play style.

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, or tvOS. Not supported in watchOS.*

### visionOS

**Match spatial game controller behavior to hand input.** In addition to supporting a wide array of wireless game controllers, your visionOS game can also support spatial game controllers such as PlayStation VR2 Sense controller. Allow players to interact with your game in a similar manner to how they interact using their hands. Specifically, support looking at an object and pressing the controller’s left or right trigger button to indirectly interact, or reaching out and pressing the left or right trigger button to directly interact. For more information, see [visionOS](https://developer.apple.com/design/human-interface-guidelines/gestures#visionOS).

## Resources

#### Related

[Designing for games](https://developer.apple.com/design/human-interface-guidelines/designing-for-games)

[Gestures](https://developer.apple.com/design/human-interface-guidelines/gestures)

[Keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards)

[Playing haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics)

#### Developer documentation

[Create games for Apple platforms](https://developer.apple.com/games/)

[Touch Controller](https://developer.apple.com/documentation/TouchController)

[Game Controller](https://developer.apple.com/documentation/GameController)

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 9, 2025 | Updated touch control best practices, updated game controller mapping for UI, and added guidance for spatial game controller support in visionOS. |
| June 10, 2024 | Added guidance for supporting touch controls and changed title from Game controllers. |

---
title: "Gestures"
source: "https://developer.apple.com/design/human-interface-guidelines/gestures"
author:
published:
created: 2026-06-11
description: "A gesture is a physical motion that a person uses to directly affect an object in an app or game on their device."
tags:
  - "clippings"
---
![A sketch of a pointing hand swiping in a curved motion toward the right, suggesting touch interaction with a device. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/c7a962cd20329fd48490e56c97d57135/inputs-gestures-intro~dark%402x.png)

Depending on the device they’re using, people can make gestures on a touchscreen, in the air, or on a range of input devices such as a trackpad, mouse, remote, or game controller that includes a touch surface.

Every platform supports basic gestures like tap, swipe, and drag. Although the precise movements that make up basic gestures can vary per platform and input device, people are familiar with the underlying functionality of these gestures and expect to use them everywhere. For a list of these gestures, see [Standard gestures](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures).

## Best practices

**Give people more than one way to interact with your app.** People commonly prefer or need to use other inputs — such as their voice, keyboard, or Switch Control — to interact with their devices. Don’t assume that people can use a specific gesture to perform a given task. For guidance, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility).

**In general, respond to gestures in ways that are consistent with people’s expectations.** People expect most gestures to work the same regardless of their current context. For example, people expect tap to activate or select an object. Avoid using a familiar gesture like tap or swipe to perform an action that’s unique to your app; similarly, avoid creating a unique gesture to perform a standard action like activating a button or scrolling a long view.

**Handle gestures as responsively as possible.** Useful gestures enhance the experience of direct manipulation and provide immediate feedback. As people perform a gesture in your app, provide feedback that helps them predict its results and, if necessary, communicates the extent and type of movement required to complete the action.

**Indicate when a gesture isn’t available.** If you don’t clearly communicate why a gesture doesn’t work, people might think your app has frozen or they aren’t performing the gesture correctly, leading to frustration. For example, if someone tries to drag a locked object, the UI may not indicate that the object’s position has been locked; or if they try to activate an unavailable button, the button’s unavailable state may not be clearly distinct from its available state.

## Custom gestures

**Add custom gestures only when necessary.** Custom gestures work best when you design them for specialized tasks that people perform frequently and that aren’t covered by existing gestures, like in a game or drawing app. If you decide to implement a custom gesture, make sure it’s:

- Discoverable
- Straightforward to perform
- Distinct from other gestures
- Not the only way to perform an important action in your app or game

**Make custom gestures easy to learn.** Offer moments in your app to help people quickly learn and perform custom gestures, and make sure to test your interactions in real use scenarios. If you’re finding it difficult to use simple language and graphics to describe a gesture, it may mean people will find the gesture difficult to learn and perform.

**Use shortcut gestures to supplement standard gestures, not replace them.** While you may supply a custom gesture to quickly access parts of your app, people also need simple, familiar ways to navigate and perform actions, even if it means an extra tap or two. For example, in an app that supports navigation through a hierarchy of views, people expect to find a Back button in a top toolbar that lets them return to the previous view with a single tap. To help accelerate this action, many apps also offer a shortcut gesture — such as swiping from the side of a window or touchscreen — while continuing to provide the Back button.

**Avoid conflicting with gestures that access system UI.** Several platforms offer gestures for accessing system behaviors, like edge swiping in watchOS or rolling your hand over to access system overlays in visionOS. It’s important to avoid defining custom gestures that might conflict with these interactions, as people expect these controls to work consistently. In specific circumstances within games or immersive experiences, developers can work around this area by deferring the system gesture. For more information, see the platform considerations for iOS, iPadOS, watchOS, and visionOS.

## Platform considerations

### iOS, iPadOS

In addition to the [standard gestures](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures) supported in all platforms, iOS and iPadOS support a few other gestures that people expect.

| Gesture | Common action |
| --- | --- |
| Three-finger swipe | Initiate undo (left swipe); initiate redo (right swipe). |
| Three-finger pinch | Copy selected text (pinch in); paste copied text (pinch out). |
| Four-finger swipe (iPadOS only) | Switch between apps. |
| Shake | Initiate undo; initiate redo. |

**Consider allowing simultaneous recognition of multiple gestures if it enhances the experience.** Although simultaneous gestures are unlikely to be useful in nongame apps, a game might include multiple onscreen controls — such as a joystick and firing buttons — that people can operate at the same time. For guidance on integrating touchscreen input with Apple Pencil input in your iPadOS app, see [Apple Pencil and Scribble](https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble).

### macOS

People primarily interact with macOS using a [keyboard](https://developer.apple.com/design/human-interface-guidelines/keyboards) and mouse. In addition, they can make [standard gestures](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures) on a Magic Trackpad, Magic Mouse, or a [game controller](https://developer.apple.com/design/human-interface-guidelines/game-controls) that includes a touch surface.

### tvOS

People expect to use [standard gestures](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures) to navigate tvOS apps and games with a compatible remote, Siri Remote, or [game controller](https://developer.apple.com/design/human-interface-guidelines/game-controls) that includes a touch surface. For guidance, see [Remotes](https://developer.apple.com/design/human-interface-guidelines/remotes).

### visionOS

visionOS supports two categories of gestures: indirect and direct.

People use an *indirect* gesture by looking at an object to target it, and then manipulating that object from a distance — indirectly — with their hands. For example, a person can look at a button to focus it and select it by quickly tapping their finger and thumb together. Indirect gestures are comfortable to perform at any distance, and let people quickly change focus between different objects and select items with minimal movement.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/9557a3ad0b177a131f36bb37d6661cfb/visionos-spatial-gesture-indirect.mp4"></video> [Play](#)

People use a *direct* gesture to physically touch an interactive object. For example, people can directly type on the visionOS keyboard by tapping the virtual keys. Direct gestures work best when they are within reach. Because people may find it tiring to keep their arms raised for extended periods, direct gestures are best for infrequent use. visionOS also supports direct versions of all standard gestures, allowing people the choice to interact directly or indirectly with any standard component.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/936efb1057888e3d20b0035cff16a234/visionos-spatial-gesture-direct.mp4"></video> [Play](#)

Here are the standard direct gestures people use in visionOS; see [Specifications](https://developer.apple.com/design/human-interface-guidelines/gestures#Specifications) for a list of standard indirect gestures.

| Direct gesture | Common use |
| --- | --- |
| Touch | Directly select or activate an object. |
| Touch and hold | Open a contextual menu. |
| Touch and drag | Move an object to a new location. |
| Double touch | Preview an object or file; select a word in an editing context. |
| Swipe | Reveal actions and controls; dismiss views; scroll. |
| With two hands, pinch and drag together or apart | Zoom in or out. |
| With two hands, pinch and drag in a circular motion | Rotate an object. |

**Support standard gestures everywhere you can.** For example, as soon as someone looks at an object in your app or game, tap is the first gesture they’re likely to make when they want to select or activate it. Even if you also support custom gestures, supporting standard gestures such as tap helps people get comfortable with your app or game quickly.

**Offer both indirect and direct interactions when possible.** Prefer indirect gestures for UI and common components like buttons. Reserve direct gestures and custom gestures for objects that invite close-up interaction or specific motions in a game or interactive experience.

**Avoid requiring specific body movements or positions for input.** Not all people can perform specific body movements or position themselves in certain ways at all times, whether due to disability, spatial constraints, or other environmental factors. If your experience requires movement, consider supporting alternative inputs to let people choose the interaction method that works best for them.

#### Designing custom gestures in visionOS

If you want to offer a specific interaction for your experience that people can’t perform using an existing system gesture, consider designing a custom gesture. To offer this type of interaction, your app needs to be running in a Full Space, and you must request people’s permission to access information about their hands. For developer guidance, see [Setting up access to ARKit data](https://developer.apple.com/documentation/visionOS/setting-up-access-to-arkit-data).

![A screenshot of a person's hands performing a custom gesture, placing the two hands together to form a heart, while playing a visionOS game.](https://docs-assets.developer.apple.com/published/363ecbc8eeb441809f62ae935e13fbdc/visionos-custom-spatial-gesture-happy-beam%402x.png)

**Prioritize comfort.** Continually test ergonomics of all interactions that require custom gestures. A custom interaction that requires people to keep their arms raised for even a little while can be physically tiring, and repeating very similar movements many times in succession can stress people’s muscles and joints.

**Carefully consider complex custom gestures that involve multiple fingers or both hands.** People may not always have both hands available when using your app or game. If you require a more complex gesture for your experience, consider also offering an alternative that requires less movement.

**Avoid custom gestures that require using a specific hand.** It can increase someone’s cognitive load if they need to remember which hand to use to trigger a custom gesture. It may also make your experience less welcoming to people with strong hand-dominance or limb differences.

#### Working with system overlays in visionOS

In visionOS 2 and later, people can look at the palm of one hand and use gestures to quickly access system overlays for Home and Control Center. These interactions are available systemwide, and are reserved solely for accessing system overlays.

When designing apps and games that use custom gestures or anchor content to a person’s hands, it’s important to take interactions with the system overlays into consideration.

**Reserve the area around a person’s hand for system overlays and their related gestures.** If possible, don’t anchor content to a person’s hands or wrists. If you’re designing a game that involves hand-anchored content, place it outside of the immediate area of someone’s hand to avoid colliding with the Home indicator.

![An illustration of a person's open hand with the palm facing upward. A dashed circular line above the hand indicates the area reserved for system overlays.](https://docs-assets.developer.apple.com/published/c9586a1348adff0aa01943891300a3ac/visionos-hand-area-of-focus~dark%402x.png)

The area reserved for interacting with system overlays.

![An illustration of a person's open hand with the palm facing upward. A button with a circle icon representing the Home indicator appears above the palm.](https://docs-assets.developer.apple.com/published/075a39cf157ebfe7c2e8a200966799fe/visionos-spatial-gesture-home-indicator~dark%402x.png)

A person looks at their palm to reveal the Home indicator.

![An illustration of a person's open hand with the palm facing downward. An overlay with the status bar appears above the hand.](https://docs-assets.developer.apple.com/published/a7c54c4d405c17907e3498464b2f1951/visionos-spatial-gesture-control-center~dark%402x.png)

A person turns their hand to reveal the status bar, and can tap to open Control Center.

**Consider deferring the system overlay behavior when designing an immersive app or game.** In certain circumstances, you may not want the Home indicator to appear when someone looks at the palm of their hand. For example, a game that uses virtual hands or gloves may want to keep someone within the world of the story, even if they happen to look at their hands from different angles. In such cases, when your app is running in a Full Space, you can choose to require a tap to reveal the Home indicator instead. For developer guidance, see [`persistentSystemOverlays(_:)`](https://developer.apple.com/documentation/SwiftUI/View/persistentSystemOverlays\(_:\)).

![An image of a person's open hand with the palm facing upward, shown from the person's perspective. A button with a circle icon representing the Home indicator appears above the palm. The image background shows the room that's the person's surroundings.](https://docs-assets.developer.apple.com/published/dc6b4a94633c063ddd432dcc8043cae3/gestures-default-home-indicator%402x.png)

Default behavior in the Shared Space

![An image of a person's open hand with the palm facing upward, shown from the person's perspective. A button with a circle icon representing the Home indicator appears above the palm. The image background shows a forest in a fully immersive space.](https://docs-assets.developer.apple.com/published/96cb708d391f1ab78a77d23c7f2e0442/gestures-home-indicator-in-immersive-space%402x.png)

Default behavior in a Full Space

![An image of a person's open hand wearing a bulky space suit glove, shown from the person's perspective. The palm faces upward, and no button appears above it. The image background shows a starry sky in a fully immersive space.](https://docs-assets.developer.apple.com/published/b978fe99b00df892890e1d194f704a83/gestures-fully-immersive-game-with-glove%402x.png)

Deferred behavior in a Full Space

**Use caution when designing custom gestures that involve a rolling motion of the hand, wrist, and forearm.** This specific motion is reserved for revealing system overlays. Since system overlays always display on top of app content and your app isn’t aware of when they’re visible, it’s important to test any custom gestures or content that might conflict.

### watchOS

#### Double tap

In watchOS 11 and later, people can use the double-tap gesture to scroll through lists and scroll views, and to advance between vertical tab views. Additionally, you can specify a toggle or button as the primary action in your app, or in your widget or Live Activity when the system displays it in the Smart Stack. Double-tapping in a view with a primary action highlights the control and then performs the action. The system also supports double tap for custom actions that you offer in [notifications](https://developer.apple.com/design/human-interface-guidelines/notifications), where it acts on the first nondestructive action in the notification.

**Avoid setting a primary action in views with lists, scroll views, or vertical tabs.** This conflicts with the default navigation behaviors that people expect when they double-tap.

**Choose the button that people use most commonly as the primary action in a view.** Double tap is helpful in a nonscrolling view when it performs the action that people use the most. For example, in a media controls view, you could assign the primary action to the play/pause button. For developer guidance, see [`handGestureShortcut(_:isEnabled:)`](https://developer.apple.com/documentation/SwiftUI/View/handGestureShortcut\(_:isEnabled:\)) and [`primaryAction`](https://developer.apple.com/documentation/SwiftUI/HandGestureShortcut/primaryAction).

## Specifications

### Standard gestures

The system provides APIs that support the familiar gestures people use with their devices, whether they use a touchscreen, an indirect gesture in visionOS, or an input device like a trackpad, mouse, remote, or game controller. For developer guidance, see [Gestures](https://developer.apple.com/documentation/SwiftUI/Gestures).

| Gesture | Supported in | Common action |
| --- | --- | --- |
| Tap | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Activate a control; select an item. |
| Swipe | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Reveal actions and controls; dismiss views; scroll. |
| Drag | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Move a UI element. |
| Touch (or pinch) and hold | iOS, iPadOS, tvOS, visionOS, watchOS | Reveal additional controls or functionality. |
| Double tap | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Zoom in; zoom out if already zoomed in; perform a primary action on Apple Watch Series 9 and Apple Watch Ultra 2. |
| Zoom | iOS, iPadOS, macOS, tvOS, visionOS | Zoom a view; magnify content. |
| Rotate | iOS, iPadOS, macOS, tvOS, visionOS | Rotate a selected item. |

For guidance on supporting additional gestures and button presses on specific input devices, see [Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices), [Remotes](https://developer.apple.com/design/human-interface-guidelines/remotes), and [Game controls](https://developer.apple.com/design/human-interface-guidelines/game-controls).

## Resources

#### Related

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

[Eyes](https://developer.apple.com/design/human-interface-guidelines/eyes)

[Playing haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics)

#### Developer documentation

[Gestures](https://developer.apple.com/documentation/SwiftUI/Gestures) — SwiftUI

[`UITouch`](https://developer.apple.com/documentation/UIKit/UITouch) — UIKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| September 9, 2024 | Added guidance for working with system overlays in visionOS and made organizational updates. |
| September 15, 2023 | Updated specifications to include double tap in watchOS. |
| June 21, 2023 | Changed page title from Touchscreen gestures and updated to include guidance for visionOS. |


---
title: "Gestures"
source: "https://developer.apple.com/design/human-interface-guidelines/gestures"
author:
published:
created: 2026-06-11
description: "A gesture is a physical motion that a person uses to directly affect an object in an app or game on their device."
tags:
  - "clippings"
---
![A sketch of a pointing hand swiping in a curved motion toward the right, suggesting touch interaction with a device. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/c7a962cd20329fd48490e56c97d57135/inputs-gestures-intro~dark%402x.png)

Depending on the device they’re using, people can make gestures on a touchscreen, in the air, or on a range of input devices such as a trackpad, mouse, remote, or game controller that includes a touch surface.

Every platform supports basic gestures like tap, swipe, and drag. Although the precise movements that make up basic gestures can vary per platform and input device, people are familiar with the underlying functionality of these gestures and expect to use them everywhere. For a list of these gestures, see [Standard gestures](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures).

## Best practices

**Give people more than one way to interact with your app.** People commonly prefer or need to use other inputs — such as their voice, keyboard, or Switch Control — to interact with their devices. Don’t assume that people can use a specific gesture to perform a given task. For guidance, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility).

**In general, respond to gestures in ways that are consistent with people’s expectations.** People expect most gestures to work the same regardless of their current context. For example, people expect tap to activate or select an object. Avoid using a familiar gesture like tap or swipe to perform an action that’s unique to your app; similarly, avoid creating a unique gesture to perform a standard action like activating a button or scrolling a long view.

**Handle gestures as responsively as possible.** Useful gestures enhance the experience of direct manipulation and provide immediate feedback. As people perform a gesture in your app, provide feedback that helps them predict its results and, if necessary, communicates the extent and type of movement required to complete the action.

**Indicate when a gesture isn’t available.** If you don’t clearly communicate why a gesture doesn’t work, people might think your app has frozen or they aren’t performing the gesture correctly, leading to frustration. For example, if someone tries to drag a locked object, the UI may not indicate that the object’s position has been locked; or if they try to activate an unavailable button, the button’s unavailable state may not be clearly distinct from its available state.

## Custom gestures

**Add custom gestures only when necessary.** Custom gestures work best when you design them for specialized tasks that people perform frequently and that aren’t covered by existing gestures, like in a game or drawing app. If you decide to implement a custom gesture, make sure it’s:

- Discoverable
- Straightforward to perform
- Distinct from other gestures
- Not the only way to perform an important action in your app or game

**Make custom gestures easy to learn.** Offer moments in your app to help people quickly learn and perform custom gestures, and make sure to test your interactions in real use scenarios. If you’re finding it difficult to use simple language and graphics to describe a gesture, it may mean people will find the gesture difficult to learn and perform.

**Use shortcut gestures to supplement standard gestures, not replace them.** While you may supply a custom gesture to quickly access parts of your app, people also need simple, familiar ways to navigate and perform actions, even if it means an extra tap or two. For example, in an app that supports navigation through a hierarchy of views, people expect to find a Back button in a top toolbar that lets them return to the previous view with a single tap. To help accelerate this action, many apps also offer a shortcut gesture — such as swiping from the side of a window or touchscreen — while continuing to provide the Back button.

**Avoid conflicting with gestures that access system UI.** Several platforms offer gestures for accessing system behaviors, like edge swiping in watchOS or rolling your hand over to access system overlays in visionOS. It’s important to avoid defining custom gestures that might conflict with these interactions, as people expect these controls to work consistently. In specific circumstances within games or immersive experiences, developers can work around this area by deferring the system gesture. For more information, see the platform considerations for iOS, iPadOS, watchOS, and visionOS.

## Platform considerations

### iOS, iPadOS

In addition to the [standard gestures](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures) supported in all platforms, iOS and iPadOS support a few other gestures that people expect.

| Gesture | Common action |
| --- | --- |
| Three-finger swipe | Initiate undo (left swipe); initiate redo (right swipe). |
| Three-finger pinch | Copy selected text (pinch in); paste copied text (pinch out). |
| Four-finger swipe (iPadOS only) | Switch between apps. |
| Shake | Initiate undo; initiate redo. |

**Consider allowing simultaneous recognition of multiple gestures if it enhances the experience.** Although simultaneous gestures are unlikely to be useful in nongame apps, a game might include multiple onscreen controls — such as a joystick and firing buttons — that people can operate at the same time. For guidance on integrating touchscreen input with Apple Pencil input in your iPadOS app, see [Apple Pencil and Scribble](https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble).

### macOS

People primarily interact with macOS using a [keyboard](https://developer.apple.com/design/human-interface-guidelines/keyboards) and mouse. In addition, they can make [standard gestures](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures) on a Magic Trackpad, Magic Mouse, or a [game controller](https://developer.apple.com/design/human-interface-guidelines/game-controls) that includes a touch surface.

### tvOS

People expect to use [standard gestures](https://developer.apple.com/design/human-interface-guidelines/gestures#Standard-gestures) to navigate tvOS apps and games with a compatible remote, Siri Remote, or [game controller](https://developer.apple.com/design/human-interface-guidelines/game-controls) that includes a touch surface. For guidance, see [Remotes](https://developer.apple.com/design/human-interface-guidelines/remotes).

### visionOS

visionOS supports two categories of gestures: indirect and direct.

People use an *indirect* gesture by looking at an object to target it, and then manipulating that object from a distance — indirectly — with their hands. For example, a person can look at a button to focus it and select it by quickly tapping their finger and thumb together. Indirect gestures are comfortable to perform at any distance, and let people quickly change focus between different objects and select items with minimal movement.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/9557a3ad0b177a131f36bb37d6661cfb/visionos-spatial-gesture-indirect.mp4"></video> [Play](#)

People use a *direct* gesture to physically touch an interactive object. For example, people can directly type on the visionOS keyboard by tapping the virtual keys. Direct gestures work best when they are within reach. Because people may find it tiring to keep their arms raised for extended periods, direct gestures are best for infrequent use. visionOS also supports direct versions of all standard gestures, allowing people the choice to interact directly or indirectly with any standard component.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/936efb1057888e3d20b0035cff16a234/visionos-spatial-gesture-direct.mp4"></video> [Play](#)

Here are the standard direct gestures people use in visionOS; see [Specifications](https://developer.apple.com/design/human-interface-guidelines/gestures#Specifications) for a list of standard indirect gestures.

| Direct gesture | Common use |
| --- | --- |
| Touch | Directly select or activate an object. |
| Touch and hold | Open a contextual menu. |
| Touch and drag | Move an object to a new location. |
| Double touch | Preview an object or file; select a word in an editing context. |
| Swipe | Reveal actions and controls; dismiss views; scroll. |
| With two hands, pinch and drag together or apart | Zoom in or out. |
| With two hands, pinch and drag in a circular motion | Rotate an object. |

**Support standard gestures everywhere you can.** For example, as soon as someone looks at an object in your app or game, tap is the first gesture they’re likely to make when they want to select or activate it. Even if you also support custom gestures, supporting standard gestures such as tap helps people get comfortable with your app or game quickly.

**Offer both indirect and direct interactions when possible.** Prefer indirect gestures for UI and common components like buttons. Reserve direct gestures and custom gestures for objects that invite close-up interaction or specific motions in a game or interactive experience.

**Avoid requiring specific body movements or positions for input.** Not all people can perform specific body movements or position themselves in certain ways at all times, whether due to disability, spatial constraints, or other environmental factors. If your experience requires movement, consider supporting alternative inputs to let people choose the interaction method that works best for them.

#### Designing custom gestures in visionOS

If you want to offer a specific interaction for your experience that people can’t perform using an existing system gesture, consider designing a custom gesture. To offer this type of interaction, your app needs to be running in a Full Space, and you must request people’s permission to access information about their hands. For developer guidance, see [Setting up access to ARKit data](https://developer.apple.com/documentation/visionOS/setting-up-access-to-arkit-data).

![A screenshot of a person's hands performing a custom gesture, placing the two hands together to form a heart, while playing a visionOS game.](https://docs-assets.developer.apple.com/published/363ecbc8eeb441809f62ae935e13fbdc/visionos-custom-spatial-gesture-happy-beam%402x.png)

**Prioritize comfort.** Continually test ergonomics of all interactions that require custom gestures. A custom interaction that requires people to keep their arms raised for even a little while can be physically tiring, and repeating very similar movements many times in succession can stress people’s muscles and joints.

**Carefully consider complex custom gestures that involve multiple fingers or both hands.** People may not always have both hands available when using your app or game. If you require a more complex gesture for your experience, consider also offering an alternative that requires less movement.

**Avoid custom gestures that require using a specific hand.** It can increase someone’s cognitive load if they need to remember which hand to use to trigger a custom gesture. It may also make your experience less welcoming to people with strong hand-dominance or limb differences.

#### Working with system overlays in visionOS

In visionOS 2 and later, people can look at the palm of one hand and use gestures to quickly access system overlays for Home and Control Center. These interactions are available systemwide, and are reserved solely for accessing system overlays.

When designing apps and games that use custom gestures or anchor content to a person’s hands, it’s important to take interactions with the system overlays into consideration.

**Reserve the area around a person’s hand for system overlays and their related gestures.** If possible, don’t anchor content to a person’s hands or wrists. If you’re designing a game that involves hand-anchored content, place it outside of the immediate area of someone’s hand to avoid colliding with the Home indicator.

![An illustration of a person's open hand with the palm facing upward. A dashed circular line above the hand indicates the area reserved for system overlays.](https://docs-assets.developer.apple.com/published/c9586a1348adff0aa01943891300a3ac/visionos-hand-area-of-focus~dark%402x.png)

The area reserved for interacting with system overlays.

![An illustration of a person's open hand with the palm facing upward. A button with a circle icon representing the Home indicator appears above the palm.](https://docs-assets.developer.apple.com/published/075a39cf157ebfe7c2e8a200966799fe/visionos-spatial-gesture-home-indicator~dark%402x.png)

A person looks at their palm to reveal the Home indicator.

![An illustration of a person's open hand with the palm facing downward. An overlay with the status bar appears above the hand.](https://docs-assets.developer.apple.com/published/a7c54c4d405c17907e3498464b2f1951/visionos-spatial-gesture-control-center~dark%402x.png)

A person turns their hand to reveal the status bar, and can tap to open Control Center.

**Consider deferring the system overlay behavior when designing an immersive app or game.** In certain circumstances, you may not want the Home indicator to appear when someone looks at the palm of their hand. For example, a game that uses virtual hands or gloves may want to keep someone within the world of the story, even if they happen to look at their hands from different angles. In such cases, when your app is running in a Full Space, you can choose to require a tap to reveal the Home indicator instead. For developer guidance, see [`persistentSystemOverlays(_:)`](https://developer.apple.com/documentation/SwiftUI/View/persistentSystemOverlays\(_:\)).

![An image of a person's open hand with the palm facing upward, shown from the person's perspective. A button with a circle icon representing the Home indicator appears above the palm. The image background shows the room that's the person's surroundings.](https://docs-assets.developer.apple.com/published/dc6b4a94633c063ddd432dcc8043cae3/gestures-default-home-indicator%402x.png)

Default behavior in the Shared Space

![An image of a person's open hand with the palm facing upward, shown from the person's perspective. A button with a circle icon representing the Home indicator appears above the palm. The image background shows a forest in a fully immersive space.](https://docs-assets.developer.apple.com/published/96cb708d391f1ab78a77d23c7f2e0442/gestures-home-indicator-in-immersive-space%402x.png)

Default behavior in a Full Space

![An image of a person's open hand wearing a bulky space suit glove, shown from the person's perspective. The palm faces upward, and no button appears above it. The image background shows a starry sky in a fully immersive space.](https://docs-assets.developer.apple.com/published/b978fe99b00df892890e1d194f704a83/gestures-fully-immersive-game-with-glove%402x.png)

Deferred behavior in a Full Space

**Use caution when designing custom gestures that involve a rolling motion of the hand, wrist, and forearm.** This specific motion is reserved for revealing system overlays. Since system overlays always display on top of app content and your app isn’t aware of when they’re visible, it’s important to test any custom gestures or content that might conflict.

### watchOS

#### Double tap

In watchOS 11 and later, people can use the double-tap gesture to scroll through lists and scroll views, and to advance between vertical tab views. Additionally, you can specify a toggle or button as the primary action in your app, or in your widget or Live Activity when the system displays it in the Smart Stack. Double-tapping in a view with a primary action highlights the control and then performs the action. The system also supports double tap for custom actions that you offer in [notifications](https://developer.apple.com/design/human-interface-guidelines/notifications), where it acts on the first nondestructive action in the notification.

**Avoid setting a primary action in views with lists, scroll views, or vertical tabs.** This conflicts with the default navigation behaviors that people expect when they double-tap.

**Choose the button that people use most commonly as the primary action in a view.** Double tap is helpful in a nonscrolling view when it performs the action that people use the most. For example, in a media controls view, you could assign the primary action to the play/pause button. For developer guidance, see [`handGestureShortcut(_:isEnabled:)`](https://developer.apple.com/documentation/SwiftUI/View/handGestureShortcut\(_:isEnabled:\)) and [`primaryAction`](https://developer.apple.com/documentation/SwiftUI/HandGestureShortcut/primaryAction).

## Specifications

### Standard gestures

The system provides APIs that support the familiar gestures people use with their devices, whether they use a touchscreen, an indirect gesture in visionOS, or an input device like a trackpad, mouse, remote, or game controller. For developer guidance, see [Gestures](https://developer.apple.com/documentation/SwiftUI/Gestures).

| Gesture | Supported in | Common action |
| --- | --- | --- |
| Tap | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Activate a control; select an item. |
| Swipe | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Reveal actions and controls; dismiss views; scroll. |
| Drag | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Move a UI element. |
| Touch (or pinch) and hold | iOS, iPadOS, tvOS, visionOS, watchOS | Reveal additional controls or functionality. |
| Double tap | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Zoom in; zoom out if already zoomed in; perform a primary action on Apple Watch Series 9 and Apple Watch Ultra 2. |
| Zoom | iOS, iPadOS, macOS, tvOS, visionOS | Zoom a view; magnify content. |
| Rotate | iOS, iPadOS, macOS, tvOS, visionOS | Rotate a selected item. |

For guidance on supporting additional gestures and button presses on specific input devices, see [Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices), [Remotes](https://developer.apple.com/design/human-interface-guidelines/remotes), and [Game controls](https://developer.apple.com/design/human-interface-guidelines/game-controls).

## Resources

#### Related

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

[Eyes](https://developer.apple.com/design/human-interface-guidelines/eyes)

[Playing haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics)

#### Developer documentation

[Gestures](https://developer.apple.com/documentation/SwiftUI/Gestures) — SwiftUI

[`UITouch`](https://developer.apple.com/documentation/UIKit/UITouch) — UIKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| September 9, 2024 | Added guidance for working with system overlays in visionOS and made organizational updates. |
| September 15, 2023 | Updated specifications to include double tap in watchOS. |
| June 21, 2023 | Changed page title from Touchscreen gestures and updated to include guidance for visionOS. |


---
title: "Keyboards"
source: "https://developer.apple.com/design/human-interface-guidelines/keyboards"
author:
published:
created: 2026-06-11
description: "A physical keyboard can be an essential input device for entering text, playing games, controlling apps, and more."
tags:
  - "clippings"
---
![A sketch of a keyboard, suggesting keyboard input. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/bdcdb582ce8f2cee60f1f2980f3c69db/inputs-keyboard-intro~dark%402x.png)

People can connect a physical keyboard to any device except Apple Watch. Mac users tend to use a physical keyboard all the time and iPad users often do. Many games work well with a physical keyboard, and people can prefer using one instead of a [virtual keyboard](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards) when entering a lot of text.

Keyboard users often appreciate using keyboard shortcuts to speed up their interactions with apps and games. A *keyboard shortcut* is a combination of a primary key and one or more modifier keys (Control, Option, Shift, and Command) that map to a specific command. A keyboard shortcut in a game — called a *key binding* — often consists of a single key.

Apple defines standard keyboard shortcuts to work consistently across the system and most apps, helping people transfer their knowledge to new experiences. Some apps define custom keyboard shortcuts for the app-specific commands people use most; most games define custom key bindings that make it quick and efficient to use the keyboard to control the game. For guidance, see [Game controls](https://developer.apple.com/design/human-interface-guidelines/game-controls#Keyboards).

## Best practices

**Support Full Keyboard Access when possible.** Available in iOS, iPadOS, macOS, and visionOS, Full Keyboard Access lets people navigate and activate windows, menus, controls, and system features using only the keyboard. To test Full Keyboard Access in your app or game, turn it on in the Accessibility area of the system-supplied Settings app. For developer guidance, see [Support Full Keyboard Access in your iOS app](https://developer.apple.com/videos/play/wwdc2021/10120/) and [`isFullKeyboardAccessEnabled`](https://developer.apple.com/documentation/AppKit/NSApplication/isFullKeyboardAccessEnabled).

**Respect standard keyboard shortcuts.** While using most apps, people generally expect to rely on the standard keyboard shortcuts that work in other apps and throughout the system. If your app offers a unique action that people perform frequently, prefer creating a [custom](https://developer.apple.com/design/human-interface-guidelines/keyboards#Custom-keyboard-shortcuts) shortcut for it instead of repurposing a standard one that people associate with a different action. While playing a game, people may expect to use certain standard keyboard shortcuts — such as Command–Q to quit the game — but they also expect to be able to modify each game’s key bindings to fit their personal play style. For guidance, see [Game controls](https://developer.apple.com/design/human-interface-guidelines/game-controls#Keyboards).

## Standard keyboard shortcuts

**In general, don’t repurpose standard keyboard shortcuts for custom actions.** People can get confused when the shortcuts they know work differently in your app or game. Only consider redefining a standard shortcut if its action doesn’t make sense in your experience. For example, if your app doesn’t support text editing, it doesn’t need a text-styling command like Italic, so you might repurpose Command–I for an action that has more relevance, like Get Info.

People expect each of the following standard keyboard shortcuts to perform the action listed in the table below.

| Primary key | Keyboard shortcut | Action |
| --- | --- | --- |
| Space | Command-Space | Show or hide the Spotlight search field. |
|  | Shift-Command-Space | Varies. |
|  | Option-Command-Space | Show the Spotlight search results window. |
|  | Control-Command-Space | Show the Special Characters window. |
| Tab | Shift-Tab | Navigate through controls in a reverse direction. |
|  | Command-Tab | Move forward to the next most recently used app in a list of open apps. |
|  | Shift-Command-Tab | Move backward through a list of open apps (sorted by recent use). |
|  | Control-Tab | Move focus to the next group of controls in a dialog or the next table (when Tab moves to the next cell). |
|  | Control-Shift-Tab | Move focus to the previous group of controls. |
| Esc | Esc | Cancel the current action or process. |
| Esc | Option-Command-Esc | Open the Force Quit dialog. |
| Eject | Control-Command-Eject | Quit all apps (after changes have been saved to open documents) and restart the computer. |
|  | Control-Option-Command-Eject | Quit all apps (after changes have been saved to open documents) and shut the computer down. |
| F1 | Control-F1 | Toggle full keyboard access on or off. |
| F2 | Control-F2 | Move focus to the menu bar. |
| F3 | Control- F3 | Move focus to the Dock. |
| F4 | Control-F4 | Move focus to the active (or next) window. |
|  | Control-Shift-F4 | Move focus to the previously active window. |
| F5 | Control-F5 | Move focus to the toolbar. |
|  | Command-F5 | Turn VoiceOver on or off. |
| F6 | Control-F6 | Move focus to the first (or next) panel. |
|  | Control-Shift-F6 | Move focus to the previous panel. |
| F7 | Control-F7 | Temporarily override the current keyboard access mode in windows and dialogs. |
| F8 |  | Varies. |
| F9 |  | Varies. |
| F10 |  | Varies. |
| F11 |  | Show desktop. |
| F12 |  | Hide or display Dashboard. |
| Grave accent (\`) | Command-Grave accent | Activate the next open window in the frontmost app. |
|  | Shift-Command-Grave accent | Activate the previous open window in the frontmost app. |
|  | Option-Command-Grave accent | Move focus to the window drawer. |
| Hyphen (-) | Command-Hyphen | Decrease the size of the selection. |
|  | Option-Command-Hyphen | Zoom out when screen zooming is on. |
| Left bracket ({) | Command-Left bracket | Left-align a selection. |
| Right bracket (}) | Command-Right bracket | Right-align a selection. |
| Pipe (\|) | Command-Pipe | Center-align a selection. |
| Colon (:) | Command-Colon | Display the Spelling window. |
| Semicolon (;) | Command-Semicolon | Find misspelled words in the document. |
| Comma (,) | Command-Comma | Open the app’s settings window. |
|  | Control-Option-Command-Comma | Decrease screen contrast. |
| Period (.) | Command-Period | Cancel an operation. |
|  | Control-Option-Command-Period | Increase screen contrast. |
| Question mark (?) | Command-Question mark | Open the app’s Help menu. |
| Forward slash (/) | Option-Command-Forward slash | Turn font smoothing on or off. |
| Equal sign (=) | Shift-Command-Equal sign | Increase the size of the selection. |
|  | Option-Command-Equal sign | Zoom in when screen zooming is on. |
| 3 | Shift-Command-3 | Capture the screen to a file. |
|  | Control-Shift-Command-3 | Capture the screen to the Clipboard. |
| 4 | Shift-Command-4 | Capture a selection to a file. |
|  | Control-Shift-Command-4 | Capture a selection to the Clipboard. |
| 8 | Option-Command-8 | Turn screen zooming on or off. |
|  | Control-Option-Command-8 | Invert the screen colors. |
| A | Command-A | Select every item in a document or window, or all characters in a text field. |
|  | Shift-Command-A | Deselect all selections or characters. |
| B | Command-B | Boldface the selected text or toggle boldfaced text on and off. |
| C | Command-C | Copy the selection to the Clipboard. |
|  | Shift-Command-C | Display the Colors window. |
|  | Option-Command-C | Copy the style of the selected text. |
|  | Control-Command-C | Copy the formatting settings of the selection and store on the Clipboard. |
| D | Option-Command-D | Show or hide the Dock. |
|  | Control-Command-D | Display the definition of the selected word in the Dictionary app. |
| E | Command-E | Use the selection for a find operation. |
| F | Command-F | Open a Find window. |
|  | Option-Command-F | Jump to the search field control. |
|  | Control-Command-F | Enter full screen. |
| G | Command-G | Find the next occurrence of the selection. |
|  | Shift-Command-G | Find the previous occurrence of the selection. |
| H | Command-H | Hide the windows of the currently running app. |
|  | Option-Command-H | Hide the windows of all other running apps. |
| I | Command-I | Italicize the selected text or toggle italic text on or off. |
|  | Command-I | Display an Info window. |
|  | Option-Command-I | Display an inspector window. |
| J | Command-J | Scroll to a selection. |
| M | Command-M | Minimize the active window to the Dock. |
|  | Option-Command-M | Minimize all windows of the active app to the Dock. |
| N | Command-N | Open a new document. |
| O | Command-O | Display a dialog for choosing a document to open. |
| P | Command-P | Display the Print dialog. |
|  | Shift-Command-P | Display the Page Setup dialog. |
| Q | Command-Q | Quit the app. |
|  | Shift-Command-Q | Log out the person currently logged in. |
|  | Option-Shift-Command-Q | Log out the person currently logged in without confirmation. |
| S | Command-S | Save a new document or save a version of a document. |
|  | Shift-Command-S | Duplicate the active document or initiate a Save As. |
| T | Command-T | Display the Fonts window. |
|  | Option-Command-T | Show or hide a toolbar. |
| U | Command-U | Underline the selected text or turn underlining on or off. |
| V | Command-V | Paste the Clipboard contents at the insertion point. |
|  | Shift-Command-V | Paste as (Paste as Quotation, for example). |
|  | Option-Command-V | Apply the style of one object to the selection. |
|  | Option-Shift-Command-V | Paste the Clipboard contents at the insertion point and apply the style of the surrounding text to the inserted object. |
|  | Control-Command-V | Apply formatting settings to the selection. |
| W | Command-W | Close the active window. |
|  | Shift-Command-W | Close a file and its associated windows. |
|  | Option-Command-W | Close all windows in the app. |
| X | Command-X | Remove the selection and store on the Clipboard. |
| Z | Command-Z | Undo the previous operation. |
|  | Shift-Command-Z | Redo (when Undo and Redo are separate commands rather than toggled using Command-Z). |
| Right arrow | Command-Right arrow | Change the keyboard layout to current layout of Roman script. |
|  | Shift-Command-Right arrow | Extend selection to the next semantic unit, typically the end of the current line. |
|  | Shift-Right arrow | Extend selection one character to the right. |
|  | Option-Shift-Right arrow | Extend selection to the end of the current word, then to the end of the next word. |
|  | Control-Right arrow | Move focus to another value or cell within a view, such as a table. |
| Left arrow | Command-Left arrow | Change the keyboard layout to current layout of system script. |
|  | Shift-Command-Left arrow | Extend selection to the previous semantic unit, typically the beginning of the current line. |
|  | Shift-Left arrow | Extend selection one character to the left. |
|  | Option-Shift-Left arrow | Extend selection to the beginning of the current word, then to the beginning of the previous word. |
|  | Control-Left arrow | Move focus to another value or cell within a view, such as a table. |
| Up arrow | Shift-Command-Up arrow | Extend selection upward in the next semantic unit, typically the beginning of the document. |
|  | Shift-Up arrow | Extend selection to the line above, to the nearest character boundary at the same horizontal location. |
|  | Option-Shift-Up arrow | Extend selection to the beginning of the current paragraph, then to the beginning of the next paragraph. |
|  | Control-Up arrow | Move focus to another value or cell within a view, such as a table. |
| Down arrow | Shift-Command-Down arrow | Extend selection downward in the next semantic unit, typically the end of the document. |
|  | Shift-Down arrow | Extend selection to the line below, to the nearest character boundary at the same horizontal location. |
|  | Option-Shift-Down arrow | Extend selection to the end of the current paragraph, then to the end of the next paragraph (include the paragraph terminator, such as Return, in cut, copy, and paste operations). |
|  | Control-Down arrow | Move focus to another value or cell within a view, such as a table. |

The system also defines several keyboard shortcuts for use with localized versions of the system, localized keyboards, keyboard layouts, and input methods. These shortcuts don’t correspond directly to menu commands.

| Keyboard shortcut | Action |
| --- | --- |
| Control-Space | Toggle between the current and last input source. |
| Control-Option-Space | Switch to the next input source in the list. |
| \[Modifier key\]-Command-Space | Varies. |
| Command-Right arrow | Change keyboard layout to current layout of Roman script. |
| Command-Left arrow | Change keyboard layout to current layout of system script. |

## Custom keyboard shortcuts

**Define custom keyboard shortcuts for only the most frequently used app-specific commands.** People appreciate using keyboard shortcuts for actions they perform frequently, but defining too many new shortcuts can make your app seem difficult to learn.

**Use modifier keys in ways that people expect.** For example, pressing Command while dragging moves items as a group, and pressing Shift while drag-resizing constrains resizing to the item’s aspect ratio. In addition, holding an arrow key moves the selected item by the smallest app-defined unit of distance until people release the key.

Here are the modifier keys and the symbols that represent them.

| Modifier key | Symbol | Recommended usage |
| --- | --- | --- |
| Command | ![Outline of a stylized clover shape.](https://docs-assets.developer.apple.com/published/43dd468e7f303fbaa3abbf3935292ae2/Keyboard_Command.svg) | Prefer the Command key as the main modifier key in a custom keyboard shortcut. |
| Shift | ![Outline of an upward-pointing arrow.](https://docs-assets.developer.apple.com/published/3a7e5aed7275031a8c41a7fb7789e41f/Keyboard_Shift.svg) | Prefer the Shift key as a secondary modifier that complements a related shortcut. |
| Option | ![Line segments that suggest a horizontally transformed Z shape combined with a short horizontal segment aligned with the top of the Z.](https://docs-assets.developer.apple.com/published/8b064ad029d2012128a6aaeb1322b290/Keyboard_Option.svg) | Use the Option modifier sparingly for less-common commands or power features. |
| Control | ![A shallow, upside-down V shape.](https://docs-assets.developer.apple.com/published/5c92c8350588d52ff786bf763b18e9e7/Keyboard_Control.svg) | Avoid using the Control key as a modifier. The system uses Control in many systemwide features and shortcuts, like moving focus or capturing screenshots. |

**List modifier keys in the correct order.** If you use more than one modifier key in a custom shortcut, always list them in this order: Control, Option, Shift, Command.

**Avoid adding Shift to a shortcut that uses the upper character of a two-character key.** People already understand that they must hold the Shift key to type the upper character of a two-character key, so it’s clearer to simply list the upper character in the shortcut. For example, the keyboard shortcut for Hide Status Bar is Command-Slash, whereas the keyboard shortcut for Help is Command-Question mark, not Shift-Command-Slash.

**Let the system localize and mirror your keyboard shortcuts as needed.** The system automatically localizes a shortcut’s primary and modifier keys to support the currently connected keyboard; if your app or game switches to a right-to-left layout, the system automatically mirrors the shortcut. For guidance, see [Right to left](https://developer.apple.com/design/human-interface-guidelines/right-to-left).

**Avoid creating a new shortcut by adding a modifier to an existing shortcut for an unrelated command.** For example, because people are accustomed to using Command-Z for undoing an action, it would be confusing to use Shift-Command-Z as the shortcut for a command that’s unrelated to undo and redo.

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, or tvOS. Not supported in watchOS.*

### visionOS

In visionOS, an app’s keyboard shortcuts appear in the shortcut interface that displays when people hold the Command key on a connected keyboard. Similar in organization to an app’s [menu bar menus](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar) on iPad or Mac, the shortcut interface on Apple Vision Pro displays app commands in familiar system-defined menu categories such as File, Edit, and View. Unlike menu bar menus, the shortcut interface displays all relevant categories in one view, listing within each category only available commands that also have shortcuts.

**Write descriptive shortcut titles.** Because the shortcut interface displays a flat list of all items in each category, submenu titles aren’t available to provide context for their child items. Make sure each shortcut title is descriptive enough to convey its action without the additional context a submenu title might provide. For developer guidance, see [`discoverabilityTitle`](https://developer.apple.com/documentation/UIKit/UIKeyCommand/discoverabilityTitle).

**Recognize that people see an overlay when they use a physical keyboard with your visionOS app or game.** When people connect a physical keyboard while using your visionOS app or game, the system displays a virtual keyboard overlay that provides typing completion and other controls.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/f4fbb25475ad912b622f505597211ee6/visionos-keyboard-accessory-input.mp4"></video> [Play](#)

## Resources

#### Related

[Virtual keyboards](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards)

[Entering data](https://developer.apple.com/design/human-interface-guidelines/entering-data)

[Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices)

#### Developer documentation

[`KeyboardShortcut`](https://developer.apple.com/documentation/SwiftUI/KeyboardShortcut) — SwiftUI

[Input events](https://developer.apple.com/documentation/SwiftUI/Input-events) — SwiftUI

[Handling key presses made on a physical keyboard](https://developer.apple.com/documentation/UIKit/handling-key-presses-made-on-a-physical-keyboard) — UIKit

[Mouse, Keyboard, and Trackpad](https://developer.apple.com/documentation/AppKit/mouse-keyboard-and-trackpad) — AppKit

## Change log

| Date | Changes |
| --- | --- |
| June 9, 2025 | Moved game-specific key bindings guidance to the Game controls page. |
| June 10, 2024 | Added game-specific guidance and made organizational updates. |
| June 21, 2023 | Updated to include guidance for visionOS. |

---
title: "Nearby interactions"
source: "https://developer.apple.com/design/human-interface-guidelines/nearby-interactions"
author:
published:
created: 2026-06-11
description: "Nearby interactions support on-device experiences that integrate the presence of people and objects in the nearby environment."
tags:
  - "clippings"
---
![A sketch of curved lines beside a circular area containing a smaller circle, suggesting audio approaching a person in a room from a specific direction. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/eadee49eac296cb53a58af21eb649219/inputs-nearby-interactions-intro~dark%402x.png)

A great nearby interaction feels intuitive and natural to people, because it builds on their innate awareness of the world around them. For example, a person playing music on their iPhone can continue listening on their HomePod mini when they bring the devices close together, simply by transferring the audio output from their iPhone to the HomePod mini.

Nearby interactions are available on devices that support Ultra Wideband technology (to learn more, see [Ultra Wideband availability](https://support.apple.com/en-us/HT212274)), and rely on the [Nearby Interaction](https://developer.apple.com/documentation/NearbyInteraction) framework. Before participating in nearby interaction experiences, people grant permission for their device to interact while they’re using your app. The Nearby Interaction APIs help you preserve people’s privacy by relying on randomly generated device identifiers that last only as long as the interaction session your app initiates.

## Best practices

**Consider a task from the perspective of the physical world to find inspiration for a nearby interaction.** For example, although people can easily use your app’s UI to transfer a song from their iPhone to their HomePod mini, initiating the transfer by bringing the devices close together makes the task feel rooted in the physical world. Discovering the physical actions that inform the concept of a task can help you create an engaging experience that makes performing it feel easy and natural.

**Use distance, direction, and context to inform an interaction.** Although your app may get information from a variety of sources, prioritizing nearby, contextually relevant information can help you deliver experiences that feel organic. For example, if people want to share content with a friend in a crowded room, the iOS share sheet can suggest a likely recipient by using on-device knowledge about the person’s most frequent and recent contacts. Combining this knowledge with information from nearby devices that include the U1 chip can let the share sheet improve the experience by suggesting the closest contact the person is facing.

**Consider how changes in physical distance can guide a nearby interaction.** In the physical world, people generally expect their perception of an object to sharpen as they get closer to it. A nearby interaction can mirror this experience by providing feedback that changes with the proximity of an object. For example, when people use iPhone to find an AirTag, the display transitions from a directional arrow to a pulsing circle as they get closer.

**Provide continuous feedback.** Continuous feedback reflects the dynamism of the physical world and strengthens the connection between a nearby interaction and the task people are performing. For example, when looking for a lost item in Find My, people get continuous updates that communicate the item’s direction and proximity. Keep people engaged by providing uninterrupted feedback that responds to their movements.

**Consider using multiple feedback types to create a holistic experience.** Fluidly transitioning among visual, audible, and haptic feedback can help a nearby interaction’s task feel more engaging and real. Using more than one type of feedback also lets you vary the experience to coordinate with both the task and the current context. For example, while people are interacting with the device screen, visual feedback makes sense; while people are interacting with their environment, audible and haptic feedback often work better.

**Avoid using a nearby interaction as the only way to perform a task.** You can’t assume that everyone can experience a nearby interaction, so it’s essential to provide alternative ways to get things done in your app.

## Device usage

**Encourage people to hold the device in portrait orientation.** Holding a device in landscape can decrease the accuracy and availability of information about the distance and relative direction of other devices. If you support only portrait orientation while your nearby interaction feature runs, prefer giving people implicit, visual feedback on how to hold the device for an optimal experience; when possible, avoid explicitly telling people to hold the device in portrait.

**Design for the device’s directional field of view.** Nearby interaction relies on a hardware sensor with a specific field of view similar to that of the Ultra Wide camera in iPhone 11 and later. If a participating device is outside of this field of view, your app might receive information about its distance, but not its relative direction.

**Help people understand how intervening objects can affect the nearby interaction experience in your app.** When other people, animals, or sufficiently large objects come between two participating devices, the accuracy or availability of distance and direction information can decrease. Consider adding advice on avoiding this situation to onboarding or tutorial content you present.

## Platform considerations

*No additional considerations for iPadOS. Not supported in macOS, tvOS, or visionOS.*

### iOS

On iPhone, Nearby Interaction APIs provide a peer device’s distance and direction.

### watchOS

On Apple Watch, Nearby Interaction APIs provide a peer device’s distance. Also, all watchOS apps participating in a nearby interaction experience must be in the foreground.

## Resources

#### Related

[Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

#### Developer documentation

[Nearby Interaction](https://developer.apple.com/documentation/NearbyInteraction)

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 21, 2023 | Changed page title from Spatial interactions. |

---
title: "Pointing devices"
source: "https://developer.apple.com/design/human-interface-guidelines/pointing-devices"
author:
published:
created: 2026-06-11
description: "People can use a pointing device like a trackpad or mouse to navigate the interface and initiate actions."
tags:
  - "clippings"
---
![A sketch of an arrow-shaped pointer, suggesting use of a mouse or trackpad. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/b1e0a1a48d6d53d378efad92f623aeb7/inputs-pointing-devices-intro~dark%402x.png)

People appreciate the precision and flexibility that pointing devices offer. On a Mac, people typically expect to combine a pointing device with a keyboard as they navigate apps and the system. On iPad and Apple Vision Pro, a pointing device gives people an additional way to interact with apps and content, without replacing touch, eyes, or gestures.

## Best practices

**Be consistent when responding to mouse and trackpad gestures.** People expect most gestures to work the same throughout the system, regardless of the app or game they’re using. On a Mac, for example, people rely on the “Swipe between pages” gesture to behave the same way whether they’re browsing individual document pages, webpages, or images.

**Avoid redefining systemwide trackpad gestures.** Even in a game that uses app-specific gestures in a custom way, people expect systemwide gestures to be available; for example, people expect to make familiar gestures to reveal the Dock or Mission Control in macOS. Remember that Mac users can customize the gestures for performing systemwide actions.

**Provide a consistent experience in your app, whether people are using gestures, eyes, a pointing device, or a keyboard.** People expect to move fluidly between multiple types of input, and they don’t want to learn different interactions for each mode or for each app they use.

**Let people use the pointer to reveal and hide controls that automatically minimize or fade out.** In iPadOS, for example, people can reveal the minimized Safari toolbar by holding the pointer over it (the toolbar minimizes again when the pointer moves away). People can also move the pointer to reveal or hide playback controls while they watch a full-screen video.

**Provide a consistent experience when people press and hold a modifier key while interacting with objects in your app.** For example, if people can duplicate an object by pressing and holding the Option key while they drag that object, ensure the result is the same whether they drag using touch or the pointer.

## Platform considerations

*No additional considerations for iOS. Not supported in tvOS or watchOS.*

### iPadOS

iPadOS builds on the traditional pointer experience, automatically adapting the pointer to the current context and providing rich visual feedback at a level of precision that enhances productivity and simplifies common tasks on a touchscreen device. The iPadOS pointing system gives people an additional way to interact with apps and content — it doesn’t replace touch.

**Allow multiple selection in custom views when necessary.** In iPadOS 15 and later, people can click and drag the pointer over multiple items to select them. As people use the pointer in this way, it expands into a visible rectangle that selects the items it encompasses. Standard nonlist collection views support this interaction by default; if you want to support multiple selection in custom views, you need to implement it yourself. For developer guidance, see [`UIBandSelectionInteraction`](https://developer.apple.com/documentation/UIKit/UIBandSelectionInteraction).

**Distinguish between pointer and finger input only if it provides value.** For example, a scrubber can give people an additional way to target a location in a video when they’re using the pointer. In this scenario, people can drag the playhead using either the pointer or touch, but they can use the pointer to click a precise seek destination.

#### Pointer shape and content effects

iPadOS integrates the appearance and behavior of both the pointer and the element it moves over, bringing focus to the item the pointer is targeting. You can support the system-provided pointer effects or modify them to suit your experience.

By default, the pointer’s shape is a circle, but it can display a system-defined or custom shape when people move it over specific elements or regions. For example, the pointer automatically uses the familiar I-beam shape when people move it over a text-entry area.

<video width="332" controls=""><source src="https://docs-assets.developer.apple.com/published/dbfc6cc6007bfadc435c90adfef985d6/text-entry-pointer.mp4"></video> [Play](#)

With a *content effect*, the UI element or region beneath the pointer can also change its appearance when people hold the pointer over it. Depending on the type of content effect, the pointer can retain its current shape or transform into a shape that integrates with the element’s new appearance.

iPadOS defines three content effects that bring focus to different types of interactive elements in your app: highlight, lift, and hover.

The *highlight* effect transforms the pointer into a translucent, rounded rectangle that acts as a background for a control and includes a gentle parallax. The subtle highlighting and movement bring focus to the control without distracting people from their task. By default, iPadOS applies the highlight effect to bar buttons, tab bars, segmented controls, and edit menus.

<video width="332" controls=""><source src="https://docs-assets.developer.apple.com/published/e8d65064cf6933764d896208b933fd6e/highlight-content-effect.mp4"></video> [Play](#)

The *lift* effect combines a subtle parallax with the appearance of elevation to make an element seem like it’s floating above the screen. As the pointer fades out beneath the element, iPadOS creates the illusion of lift by scaling the element up while adding a shadow below it and a soft specular highlight on top of it. By default, iPadOS applies the lift effect to app icons and to buttons in Control Center.

<video width="332" controls=""><source src="https://docs-assets.developer.apple.com/published/931478e17656db6096029674f6836b45/lift-content-effect-home-screen.mp4"></video> [Play](#)

*Hover* is a generic effect that lets you apply custom scale, tint, or shadow values to an element as the pointer moves over it. The hover effect combines your custom values to bring focus to an item, but it doesn’t transform the default pointer shape.

<video width="332" controls=""><source src="https://docs-assets.developer.apple.com/published/bac5c3731ad2051cf84bb38fe228e610/hover-content-effect-calendar-popover.mp4"></video> [Play](#)

#### Pointer accessories

Pointer accessories are visual indicators that help people understand how they can use the pointer to interact with the current UI element. For example, a pointer approaching a resizable element might display small arrows to indicate that the element allows resizing along a certain axis.

Unlike pointer shapes and content effects, accessories are secondary items that can combine with any pointer to communicate additional information. For developer guidance, see [`UIPointerAccessory`](https://developer.apple.com/documentation/UIKit/UIPointerAccessory).

**Use clear, simple images to create custom accessories.** A pointer accessory is small, so it’s essential to create an image that communicates the pointer interaction without using too many details.

**Consider using the accessory transition to signal a change in an element’s state or behavior.** In addition to animating the appearance and disappearance of pointer accessories, the system also animates the transitions among accessory shapes and positions that can accompany content effects. For example, you could communicate that an add action has become unavailable by transitioning the pointer accessory from the `plus` symbol to the `circle.slash` symbol.

#### Pointer magnetism

iPadOS helps people use the pointer to target an element by making the element appear to attract the pointer. People can experience this magnetic effect when they move the pointer close to an element and when they flick the pointer toward an element.

When people move the pointer close to an element, the system starts transforming the pointer’s shape as soon as it reaches the element’s hit region. Because an element’s hit region typically extends beyond its visible boundaries, the pointer begins to transform before it appears to touch the element itself, creating the illusion that the element is pulling the pointer toward it.

<video width="332" controls=""><source src="https://docs-assets.developer.apple.com/published/865841616e07d5f1cdddb89d8705eeb6/magnetics-clock.mp4"></video> [Play](#)

When people flick the pointer toward an element, iPadOS examines the pointer’s trajectory to discover the element that’s the most likely target. When there’s an element in the pointer’s path, the system uses magnetism to pull the pointer toward the element’s center.

By default, iPadOS applies magnetism to elements that use the lift effect (like app icons) and the highlight effect (like bar buttons), but not to elements that use hover. Because an element that supports hover doesn’t transform the default pointer shape, adding magnetism could be jarring and might make people feel that they’ve lost control of the pointer.

The system also applies magnetism to text-entry areas, where it can help people avoid skipping to another line if they make unintended vertical movements while they’re selecting text.

#### Standard pointers and effects

**When possible, support the system-provided content effects.** People quickly become accustomed to the content effects they see throughout the system and generally expect their experience to apply to every app they use. To provide a consistent user experience, align your interactions with the design intent of each effect. Specifically:

- Use highlight for a small element that has a transparent background.
- Use lift for a small element that has an opaque background.
- Use hover for large elements and customize the scale, tint, and shadow attributes as needed (for guidance, see [Customizing pointers](https://developer.apple.com/design/human-interface-guidelines/pointing-devices#Customizing-pointers)).

**Prefer the system-provided pointer appearances for standard buttons and text-entry areas.** You can help people feel more comfortable with your app when the pointer behaves in ways they expect.

**Add padding around interactive elements to create comfortable hit regions.** You might need to experiment to determine the right size for an element’s hit region. If the hit region is too small, it can make people feel that they have to be extra precise when interacting with the element. On the other hand, when an element’s hit region is too large, people can feel that it takes a lot of effort to pull the pointer away from the element. In general, it works well to add about 12 points of padding around elements that include a bezel; for elements without a bezel, it works well to add about 24 points of padding around the element’s visible edges.

![An illustration of a button that has a filled, rounded-rectangle bezel. The button is centered on top of a shaded rectangle that extends beyond the button by the same distance on all sides. Centered on each side, a callout indicates that the padding between the button and each edge of the shaded rectangle is 12 points.](https://docs-assets.developer.apple.com/published/5af9d5d8d776e7b4d4d2c52b6933c510/padding-for-button-with-bezel~dark%402x.png)

![An illustration of a symbol centered on top of a shaded rectangle that extends beyond the symbol by the same distance on all sides. Centered on each side, a callout indicates that the padding between the symbol and each edge of the shaded rectangle is 24 points.](https://docs-assets.developer.apple.com/published/32805ac6d129391c52a5ffaadb1e20c7/padding-for-glyph~dark%402x.png)

![An illustration of a button without a bezel, centered on top of a shaded rectangle that extends beyond the button by the same distance on all sides. Centered on each side, a callout indicates that the padding between the button and each edge of the shaded rectangle is 24 points.](https://docs-assets.developer.apple.com/published/1d2bcc28a0f2f04de6f0d35fbd6eef42/padding-for-button-without-bezel~dark%402x.png)

**Create contiguous hit regions for custom bar buttons.** If there’s space between the hit regions of adjacent buttons in a bar, people may experience a distracting motion when the pointer reverts briefly to its default shape as it moves between buttons.

**Specify the corner radius of a nonstandard element that receives the lift effect.** With the system-provided lift effect, the pointer transforms to match the element’s shape as it fades out. By default, the pointer uses the system-defined corner radius to transform into a rounded rectangle. If your element is a different shape — if it’s a circle, for example — you need to provide the radius so the pointer can animate seamlessly into the shape of the element. For developer guidance, see [`UIPointerShape.roundedRect(_:radius:)`](https://developer.apple.com/documentation/UIKit/UIPointerShape-swift.enum/roundedRect\(_:radius:\)).

#### Customizing pointers

**Prefer system-provided pointer effects for custom elements that behave like standard elements.** When a custom element behaves like a standard one, people generally expect to interact with it using familiar pointer interactions. For example, if buttons in a custom toolbar don’t use the standard highlight effect, people might think they’re broken.

**Use pointer effects in consistent ways throughout your app.** For example, if your app helps people draw, provide a similar pointer experience for every drawing area in your app so that people can apply the knowledge they gain in one area to the others.

**Avoid creating gratuitous pointer and content effects.** People notice when the appearance of the pointer or the UI element beneath it changes, and they expect the changes to be useful. Creating a purely decorative pointer effect can distract and even irritate people without providing any practical value.

**Keep custom pointer shapes simple.** Ideally, the pointer’s shape signals the action people can take in the current context without drawing too much attention to itself. If people don’t instantly understand your custom pointer shape, they’re likely to waste time trying to discover what the shape means.

**Consider enhancing the pointer experience by displaying custom annotations that provide useful information.** For example, you could display X and Y values when people hold the pointer over a graphing area in your app. Keynote uses annotations to display the current width and height of a resizable image.

![An illustration of a custom pointer hovering over a resize handle on the edge of a shaded rectangle. Above the pointer is a small annotation that displays the image’s width and height values against a dark background.](https://docs-assets.developer.apple.com/published/41735c8c839dfcb74594f406345cc8c3/useful-pointer-annotation~dark%402x.png)

**Avoid displaying instructional text with a pointer.** A pointer that displays instructional text can make an app seem complicated and difficult to use. Instead of providing instructions, prioritize clarity and simplicity in your interface, so that people can quickly grasp how to use your app whether they’re using the pointer or touching the screen.

**Consider the interplay of shadow, scale, and element spacing when defining custom hover effects.** In general, reserve scaling for elements that can increase in size without crowding nearby elements. For example, scaling doesn’t work well for a table row because a row can’t expand without overlapping adjacent rows. For an element that has little space around it, consider using a hover effect that includes tint, but not scale and shadow. Note that it doesn’t work well to use shadow without including scale, because an unscaled element doesn’t appear to get closer to the viewer even when its shadow implies that it’s elevated above the screen.

### macOS

macOS supports a wide range of standard mouse and trackpad interactions that people can customize. For example, when a click or gesture isn’t a primary way to interact with content, people can often turn it on or off based on their current workflow. People can also choose specific regions of a mouse or trackpad to invoke secondary clicks, and select specific finger combinations and movements for certain gestures.

| Click or gesture | Expected behavior | Mouse | Trackpad |
| --- | --- | --- | --- |
| Primary click | Select or activate an item, such as a file or button. | ● | ● |
| Secondary click | Reveal contextual menus. | ● | ● |
| Scrolling | Move content up, down, left, or right within a view. | ● | ● |
| Smart zoom | Zoom in or out on content, such as a web page or PDF. | ● | ● |
| Swipe between pages | Navigate forward or backward between individually displayed pages. | ● | ● |
| Swipe between full-screen apps | Navigate forward or backward between full-screen apps and spaces. | ● | ● |
| Mission Control (double-tap the mouse with two fingers or swipe up on the trackpad with three or four fingers) | Activate Mission Control. | ● | ● |
| Lookup and data detectors (force click with one finger or tap with three fingers) | Display a lookup window above selected content. |  | ● |
| Tap to click | Perform the primary click action using a tap rather than a click. |  | ● |
| Force click | Click then press firmly to display a Quick Look window or lookup window above selected content. Apply a variable amount of pressure to affect pressure-sensitive controls, such as variable speed media controls. |  | ● |
| Zoom in or out (pinch with two fingers) | Zoom in or out. |  | ● |
| Rotate (move two fingers in a circular motion) | Rotate content, such as an image. |  | ● |
| Notification Center (swipe from the edge of the trackpad) | Display Notification Center. |  | ● |
| App Exposé (swipe down with three or four fingers) | Display the current app’s windows in Exposé. |  | ● |
| Launchpad (pinch with thumb and three fingers) | Display the Launchpad. |  | ● |
| Show Desktop (spread with thumb and three fingers) | Slide all windows out of the way to reveal the desktop. |  | ● |

#### Pointers

macOS offers a variety of standard pointer styles, which your app can use to communicate the interactive state of an interface element or the result of a drag operation.

| Pointer | Name | Meaning | AppKit API |
| --- | --- | --- | --- |
| ![A pointer that resembles a diagonal arrow pointing up and to the left.](https://docs-assets.developer.apple.com/published/5be2c381c17d5d868866b3a5de1013f8/pointers-arrow%402x.png) | Arrow | Standard pointer for selecting and interacting with content and interface elements. | [`arrow`](https://developer.apple.com/documentation/AppKit/NSCursor/arrow) |
| ![A closed, gloved hand.](https://docs-assets.developer.apple.com/published/baf185691e3887d2c8caabeef97871d6/pointers-closed-hand~dark%402x.png) | Closed hand | Dragging to reposition the display of content within a view—for example, dragging a map around in Maps. | [`closedHand`](https://developer.apple.com/documentation/AppKit/NSCursor/closedHand) |
| ![A pointer arrow with a small menu-like square to the right of the arrow.](https://docs-assets.developer.apple.com/published/0cb033cee3b55bd4be661b28b928fdc1/pointers-contextual-menu%402x.png) | Contextual menu | A contextual menu is available for the content below the pointer. This pointer is generally shown only when the Control key is pressed. | [`contextualMenu`](https://developer.apple.com/documentation/AppKit/NSCursor/contextualMenu) |
| ![A plus symbol.](https://docs-assets.developer.apple.com/published/d55eabe14365af873000aa389e5fad6c/pointers-crosshair%402x.png) | Crosshair | Precise rectangular selection is possible, such as when viewing an image in Preview. | [`crosshair`](https://developer.apple.com/documentation/AppKit/NSCursor/crosshair) |
| ![A small pointer arrowhead with a circle underneath; the circle contains an Ex.](https://docs-assets.developer.apple.com/published/528819d511869de26beb1fd5008ac773/pointers-disappearing-item%402x.png) | Disappearing item | A dragged item will disappear when dropped. If the item references an original item, the original is unaffected. For example, when dragging a mailbox out of the favorites bar in Mail, the original mailbox isn’t removed. | [`disappearingItem`](https://developer.apple.com/documentation/AppKit/NSCursor/disappearingItem) |
| ![A small pointer arrowhead with a circle underneath; the circle contains a plus symbol.](https://docs-assets.developer.apple.com/published/ccc7052f9bc6fb302d913633c648adcd/pointers-drag-copy%402x.png) | Drag copy | Duplicates a dragged—not moved—item when dropped into the destination. Appears when pressing the Option key during a drag operation. | [`dragCopy`](https://developer.apple.com/documentation/AppKit/NSCursor/dragCopy) |
| ![A curved arrow, pointing up and to the right.](https://docs-assets.developer.apple.com/published/47dfbfd5f1bf3141dbf875f47446d1fd/pointers-drag-link%402x.png) | Drag link | During a drag and drop operation, creates an alias of the selected file when dropped. The alias points to the original file, which remains unmoved. Appears when pressing the Option and Command keys during a drag operation. | [`dragLink`](https://developer.apple.com/documentation/AppKit/NSCursor/dragLink) |
| ![Opposing veritcal braces, used to form an insertion marker.](https://docs-assets.developer.apple.com/published/060f443dee8d260a1a1191d7831e36b7/pointers-horizontal-beam%402x.png) | Horizontal I beam | Selection and insertion of text is possible in a horizontal layout, such as a TextEdit or Pages document. | [`iBeam`](https://developer.apple.com/documentation/AppKit/NSCursor/iBeam) |
| ![An open, gloved hand.](https://docs-assets.developer.apple.com/published/275133b35eb2228ac01bcaa238299f03/pointers-open-hand~dark%402x.png) | Open hand | Dragging to reposition content within a view is possible. | [`openHand`](https://developer.apple.com/documentation/AppKit/NSCursor/openHand) |
| ![A small pointer arrowhead with a do not enter symbol underneath.](https://docs-assets.developer.apple.com/published/2daaf47bef26569f92f30a9016095dde/pointers-operation-not-allowed%402x.png) | Operation not allowed | A dragged item can’t be dropped in the current location. | [`operationNotAllowed`](https://developer.apple.com/documentation/AppKit/NSCursor/operationNotAllowed) |
| ![A gloved hand, with the index finger extended.](https://docs-assets.developer.apple.com/published/484bb4ae4c5d4bad5e1d1f6f19071598/pointers-pointing-hand~dark%402x.png) | Pointing hand | The content beneath the pointer is a URL link to a webpage, document, or other item. | [`pointingHand`](https://developer.apple.com/documentation/AppKit/NSCursor/pointingHand) |
| ![A horizontal bar with a downward-pointing arrow at its midpoint.](https://docs-assets.developer.apple.com/published/328443ed3b5dd85c84de91a60ed30b43/pointers-resize-down%402x.png) | Resize down | Resize or move a window, view, or element downward. | [`resizeDown`](https://developer.apple.com/documentation/AppKit/NSCursor/resizeDown) |
| ![A vertical bar with a left-pointing arrow at its midpoint.](https://docs-assets.developer.apple.com/published/34113d73f24c003f4b3715e0cef8fbf6/pointers-resize-left%402x.png) | Resize left | Resize or move a window, view, or element to the left. | [`resizeLeft`](https://developer.apple.com/documentation/AppKit/NSCursor/resizeLeft) |
| ![A vertical bar with left- and right-pointing arrows extending from its midpoint.](https://docs-assets.developer.apple.com/published/478726bb1a630013de1f77b3bccde9e0/pointers-resize-left-right%402x.png) | Resize left/right | Resize or move a window, view, or element to the left or right. | [`resizeLeftRight`](https://developer.apple.com/documentation/AppKit/NSCursor/resizeLeftRight) |
| ![A vertical bar with a right-pointing arrow at its midpoint.](https://docs-assets.developer.apple.com/published/6045fce093cc242bf438393155b77992/pointers-resize-right%402x.png) | Resize right | Resize or move a window, view, or element to the right. | [`resizeRight`](https://developer.apple.com/documentation/AppKit/NSCursor/resizeRight) |
| ![A horizontal bar with an up-pointing arrow at its midpoint.](https://docs-assets.developer.apple.com/published/34576a4ab42dea114abf11b3ee57a4f8/pointers-resize-up%402x.png) | Resize up | Resize or move a window, view, or element upward. | [`resizeUp`](https://developer.apple.com/documentation/AppKit/NSCursor/resizeUp) |
| ![A horizontal bar with up- and down-pointing arrows extending from its midpoint.](https://docs-assets.developer.apple.com/published/d55d0d01c955105a957231266affb447/pointers-resize-up-down%402x.png) | Resize up/down | Resize or move a window, view, or element upward or downward. | [`resizeUpDown`](https://developer.apple.com/documentation/AppKit/NSCursor/resizeUpDown) |
| ![Opposing horizontal braces, used to form an insertion marker.](https://docs-assets.developer.apple.com/published/15923a8cac833b5bb1fd69b4a395c4a9/pointers-vertical-beam%402x.png) | Vertical I beam | Selection and insertion of text is possible in a vertical layout. | [`iBeamCursorForVerticalLayout`](https://developer.apple.com/documentation/AppKit/NSCursor/iBeamCursorForVerticalLayout) |

### visionOS

In visionOS, people can attach an external pointing device or keyboard, and use both devices while they continue to use their eyes and hands. If people look at an element and then move the pointer, the system brings focus to the element under the pointer. Your app doesn’t have to do anything to support this behavior.

When a pointing device is attached, the area people are looking at determines the pointer’s context. For example, when people shift their eyes from one window to another, the pointer’s context seamlessly transitions to the new window.

<video width="960" controls=""><source src="https://docs-assets.developer.apple.com/published/f42f7711433fee409429468edb60f0b8/visionos-trackpad-pointer-input.mp4"></video> [Play](#)

When people use an attached pointing device that supports gestures, like a trackpad or mouse, the pointer hides while people are gesturing, minimizing visual distraction. In this scenario, the pointer remains hidden until people move it, when it reappears in the location they’re looking at.

## Resources

#### Related

[Entering data](https://developer.apple.com/design/human-interface-guidelines/entering-data)

[Keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards)

#### Developer documentation

[Input events](https://developer.apple.com/documentation/SwiftUI/Input-events) — SwiftUI

[Pointer interactions](https://developer.apple.com/documentation/UIKit/pointer-interactions) — UIKit

[Mouse, Keyboard, and Trackpad](https://developer.apple.com/documentation/AppKit/mouse-keyboard-and-trackpad) — AppKit

#### Videos

## Change log

| Date | Changes |
| --- | --- |
| June 21, 2023 | Updated to include guidance for visionOS. |


---
title: "Remotes"
source: "https://developer.apple.com/design/human-interface-guidelines/remotes"
author:
published:
created: 2026-06-11
description: "The Siri Remote is the primary input method for Apple TV, helping people feel connected to onscreen content from across the room."
tags:
  - "clippings"
---
![A sketch of an Apple TV remote, suggesting interaction with onscreen content. The image is overlaid with rectangular and circular grid lines and is tinted purple to subtly reflect the purple in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/41e71ca92f40b6d3a7915551838a1874/inputs-remotes-intro~dark%402x.png)

In addition to several specific buttons, the Siri Remote combines a clickpad and touch surface to support familiar gestures like swipe and press that people use to navigate tvOS apps, browse channels and content, play and pause media, and make selections.

## Best practices

**Prefer using standard gestures to perform standard actions.** Unless people are actively playing a game, they expect the remote to behave in standard ways in every app they use. Redefining or repurposing standard remote behaviors can cause confusion and add complexity to your experience. For guidance, see [Gestures](https://developer.apple.com/design/human-interface-guidelines/remotes#Gestures).

**Be consistent with the tvOS focus experience.** The [focus experience](https://developer.apple.com/design/human-interface-guidelines/focus-and-selection) forges a strong connection between people and the content they’re viewing. Reinforce this link in your app by ensuring that you combine gestures with the focus experience in ways that are familiar to people, such as always moving focus in the same direction as the gesture.

**Provide clear feedback that shows people what happens when they make gestures in your app.** For example, lightly resting a thumb on the remote shows people where to swipe down so that they can reveal an info area.

**Define new gestures only when it makes sense in your app.** Within gameplay, for example, custom gestures can be a fun part of the experience. In most other situations, people expect to use standard gestures and may not appreciate having to discover or remember new ones.

**Differentiate between press and tap, and avoid responding to an inadvertent tap.** Pressing is an intentional action, and it works well for choosing a button, confirming a selection, and initiating an action during gameplay. Tap gestures are fine for navigation or showing additional information, but keep in mind that people might cause an inadvertent tap when they rest a thumb on the remote, pick it up, move it around, or hand it to someone else, so it often works well to avoid responding to taps during live video playback.

**Consider using the position of a tap to aid with navigation or gameplay.** The remote can differentiate between up, down, left, and right tap gestures on the touch surface. Respond to positional taps only if it makes sense in the context of your app and if such behavior is intuitive and discoverable.

**In almost all cases, open the parent of the current screen when people press the Back button.** At the top level of an app or game, the parent is the Apple TV Home Screen; within an app, the parent is defined by the app hierarchy, and isn’t necessarily the previous screen. The exception to this standard behavior is when people are actively playing a game, where it can be easy to accidentally press the Back button repeatedly. To avoid disrupting gameplay in this scenario, respond to the Back button by opening an in-game pause menu that lets people use a different interaction to navigate back to the game’s main menu. When the in-game pause menu is open, respond to a Back-button press by closing the menu and resuming the game. Note that people press and hold the Back button to go to the Home Screen from any location. For guidance, see [Buttons](https://developer.apple.com/design/human-interface-guidelines/remotes#Buttons).

**Respond correctly to the Play/Pause button during media playback.** When playing music or video, people expect pressing the Play/Pause button to play, pause, or resume playback.

## Gestures

The clickpad’s touch surface detects swipes and presses.

**Swipe.** Swiping lets people scroll effortlessly through large numbers of items with movement that starts fast and then slows down, based on the strength of the swipe. When people swipe up or down on the edge of the remote, they can speed through items very quickly.

**Press.** People press to activate a control or select an item. Also, people press before swiping to activate scrubbing mode.

## Buttons

Ensure that your app or game responds to specific presses in the following ways.

| Button or area | Expected behavior in an app | Expected behavior in a game |
| --- | --- | --- |
| Touch surface (swipe) | Navigates. Changes focus. | Performs directional pad behavior. |
| Touch surface (press) | Activates a control or an item. Navigates deeper. | Performs primary button behavior. |
| Back | Returns to previous screen. Exits to Apple TV Home Screen. | Pauses/resumes gameplay. Returns to previous screen, exits to main game menu, or exits to Apple TV Home Screen. |
| Play/Pause | Activates media playback. Pauses/resumes media playback. | Performs secondary button behavior. Skips intro video. |

## Compatible remotes

Some remotes that are compatible with Apple TV include buttons for browsing live TV or other channel-based content. For example, a remote might include a button people can use to open an electronic program guide (EPG) and other buttons they can use to browse the guide or change channels. For developer guidance, see [Providing Channel Navigation](https://developer.apple.com/documentation/TVServices/providing-channel-navigation); for design guidance, see [EPG experience](https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps#EPG-experience).

**If your live-viewing app provides an EPG, respond to a remote’s EPG-browsing buttons in ways people expect.** When people press a “guide” or “browse” button, they expect your EPG to open. While they’re viewing your EPG, people expect to navigate through it by pressing a “page up” or “page down” button. Avoid responding to these buttons in other ways while people are browsing the EPG. On the Siri Remote and compatible remotes, people can also tap on the upper or lower area of the Touch surface to browse the EPG. If your app doesn’t support an EPG experience, the system routes these button presses to the default guide app on the viewer’s device.

**While your content plays, respond to a compatible remote’s “page up” or “page down” button by changing the channel.** People expect these buttons to behave differently when they switch between viewing content and browsing an EPG.

## Platform considerations

*Not supported in iOS, iPadOS, macOS, visionOS, or watchOS.*

## Resources

#### Related

[Use your Siri Remote or Apple TV Remote with Apple TV](https://support.apple.com/en-us/HT205305)


---




