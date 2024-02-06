# About Power-Pages-CDTS-WET-Templates

This CDTS-WET template expedites development in Power Pages. It adheres to the implementation guidelines outlined in the Centrally Deployed Templates Solution (CDTS) documentation, utilizing the second method approach described here: [CDTS v5.0.0](https://cenw-wscoe.github.io/sgdc-cdts/docs/internet-nodocwrite-en.html). Notably, it enables users to seamlessly switch between different templates (GCWeb or GCIntranet) through a single site setting (WET5/Mode). Since these templates are dynamically generated, your time in a low-code-no-code environment will be focused on other core Application Life-Cycle Management goals. The use of these templates streamlines development, ensuring accessibility, usability, interoperability, mobile-friendliness, and multilingual support.

This template has been tested in the **Standard Data Model (SDM)**. A test in the Enhanced Data Model (EDM) will up later.

# How-To:
## Step 1: Clone this repo

## Step 2: Install Microsoft Power Platform CLI
Install via .msi download, run the .msi file found here: [Microsoft Power Platform CLI](https://aka.ms/PowerAppsCLI), and choose the Install option.
Detailed instructions can be found here: [Install Power Platform CLI for Windows](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/powerapps-cli).

## Step 3: Upload Power Pages content
### 3.1. Open Power Shell
Search Power Shell in the Window's search bar and open it.
### 3.2. Auth
There are several ways to authenticate with your Microsoft CRM 365 environment, either

by using your environment ID ([here is how to locate your ID](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/auth#environment-create))
```
pac auth create --environment < Your environment ID >
```
or using your environment's URL (I prefer this as its easier to locate it in the URL).

Replace < MYPOWERPAGE > with your site name!
```
pac auth create --url https://< MYPOWERPAGE >.crm3.dynamics.com
```

### 3.3. Upload
Copy the path to the local repo you cloned.

For the Standard Data Model enter this pac command:

Replace < path > with the path to the locally cloned repo e.g. "C:\path\to\local\repo\Power-Pages-CDTS-WET-Templates"
```
pac powerpages upload --path < path > -mv1
```
For the Enhanced Data Model enter this pac command: ([Enhanced data model | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/admin/enhanced-data-model)):
```
pac powerpages upload --path < path > -mv2
```

## Step 4: Change languages code
If Enhanced data model, go to Power Pages Management > Websites > Supported Languages

If Standard data model, go to Portal Management > Portal Languages
- English. Change Language Code to 'en'
- French. Change Language Code to 'fr'

## Step 5: Point your Power Pages Website to WET template
### Website Header and Footer
Websites -> Your website -> Change 'Header Template' to 'WET4 - Header' and 'Footer Template' to 'WET4 - Footer'

> ⚠️ **fail to set up the languages and their codes will result the header not showing.** You may have duplicate English and French records.

### Site Settings, Content Snippets, Web Templates, Page Template

In the Power Pages Management app, change the 'Website' for the components below from `TC-WET-CDTS - TC-WET-CDTS` to you Power Page.

#### Site Settings
- DateTime/DateFormat
- WET5/IsGCWeb
- WET5/Version
- WET5/Mode

#### Content Snippets
- WET5/AppName
- WET5/Breadcrumbs
- WET5/MenuLinks
- Head/Bottom

#### Web Templates
- WET5/Header
- WET5/Footer
- WET4/FullPage

#### Page Template
- WET5/FullPage

## Step 5: Update the page template for existing Web Pages

Web Pages > Select page > Page Template

# Q&A
## I don't see the header and get error on console 'wet is not defined'.
Check if 'English' and 'French' is setup and their code is 'en' and 'fr'.
## Where to change WET version?
Content Snippets -> Head/Bottom
## Where to enable/disable IsApplication?
Content Snippets -> Head/Bottom -> Set isApplication to false. Do not forget to change the French one as well.
## How do I create my own menu?
Content Snippets -> menuLinks. It's in json format.




