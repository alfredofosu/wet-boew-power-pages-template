# Web Experience Toolkit (WET) Power Pages Template

## Overview
This template integrates the Web Experience Toolkit (WET) with Power Pages Enhanced Data Model, providing a streamlined foundation for Canadian government web applications.

## Version Information (as of August 2025)
- **WET Framework**: v4.0.85  
- **GC Web App Template**: v16.2.0  
- **CDTS CSS Library**: v5.0.4  
- **jQuery Dependency**: v2.2.4  
- **Bootstrap**: v4

## Architecture Decisions

### Static CDTS Implementation
This template uses a static implementation of the Centrally Deployed Templates Solution (CDTS) rather than dynamic loading. This approach was chosen to:
- Eliminate rendering delays
- Prevent library conflicts with out-of-the-box Power Pages components
- Ensure consistent performance

### Bootstrap Version Compatibility
The template currently uses Bootstrap v4 to maintain compatibility with WET libraries. Power Pages' Bootstrap v5 has been disabled and can be re-enabled once WET libraries are updated to support the newer version.

## Benefits
- **Accelerated Development** — Focus on business requirements rather than framework integration.  
- **Easy Maintenance** — Simplified library management and a clear upgrade path.  
- **Conflict-Free** — Resolved compatibility issues between WET and Power Pages libraries.

## Future Considerations
The WET library stack can be upgraded as needed. Monitor WET framework updates for Bootstrap v5 compatibility to take advantage of Power Pages' enhanced styling capabilities.


# Power Pages — Install a Power Pages Enhanced Data Model

## Overview

This comprehensive guide walks you through installing the WET-BOEW (Web Experience Toolkit - Boîte à outils de l'expérience Web) Power Pages Template in your Microsoft Power Platform environment. 

**What is WET-BOEW?** WET-BOEW is a Canadian government web framework that provides reusable components and templates for creating accessible, usable, and interoperable websites.

You can choose between two installation methods:
- **Method A**: Upload managed solution via web interface (beginner-friendly)
- **Method B**: Install via Command Line Interface (recommended for advanced users)

---

## Prerequisites

### System Requirements
- Microsoft Power Platform environment with appropriate licensing
- Power Pages licensing (per website)
- Administrative or Environment Maker permissions

### Account Requirements
- **For Method A**: Environment Maker role or higher
- **For Method B**: System Administrator role + Power Platform CLI access

### Important Pre-Installation Step
⚠️ **Critical**: Ensure the Power Pages Enhanced Data Model is enabled in your environment before proceeding with installation.

**To enable Enhanced Data Model:**
1. Navigate to [Power Platform Admin Center](https://admin.powerplatform.microsoft.com)
2. Select your target environment
3. Go to **Settings** → **Features**
4. Enable **Power Pages Enhanced Data Model**
5. Save changes and wait for the feature to activate (may take several minutes)

---

## Method A: Upload Managed Solution (Web Interface)

**Recommended for:** Novice developers, quick installations, environments without CLI access

### Step-by-Step Instructions

#### Step 1: Download the Solution Package
1. Obtain the "GCWeb Power Pages Template" unmanaged solution file
   - File format: `.zip` archive
   - Ensure you have the latest version
   - Verify file integrity before proceeding

#### Step 2: Access Power Platform Maker Portal
1. Open your web browser
2. Navigate to [https://make.powerapps.com](https://make.powerapps.com)
3. Sign in using your Microsoft 365 credentials
   - **Required permissions**: Environment Maker or System Administrator

#### Step 3: Select Target Environment
1. In the top-right corner, click the **Environment** dropdown
2. Select your target environment where you want to install the template
3. Verify you're in the correct environment before proceeding

#### Step 4: Import the Solution
1. In the left navigation pane, click **Solutions**
2. Click the **Import solution** button at the top
3. Click **Browse** and select your downloaded `.zip` file
4. Click **Next** to proceed
5. Review the solution details:
   - Solution name and version
   - Publisher information
   - Components included
6. Click **Import** to begin the installation process

#### Step 5: Monitor Installation Progress
1. The import process will display a progress indicator
2. **Typical duration**: 5-15 minutes depending on solution complexity
3. Do not close the browser tab during installation
4. Review any warnings or messages that appear

#### Step 6: Verify Installation
1. Once complete, you'll see a success message
2. Check for any error messages or failed components
3. Navigate to **Solutions** and verify "GCWeb Power Pages Template" appears in your site component list

---

## Method B: Command Line Interface Installation (Recommended)

**Recommended for:** Experienced developers, automated deployments, bulk installations

### Prerequisites Setup

#### Install Power Platform CLI
Choose your preferred installation method:

**Option 1: Windows Package Manager (Recommended)**
```powershell
winget install Microsoft.PowerPlatformCLI
```

**Option 2: Manual Download**
1. Download from [Microsoft Learn Documentation](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/powerapps-cli)
2. Run the installer with administrator privileges
3. Restart your command prompt/PowerShell session

**Option 3: Visual Studio Code Extension**
- Install the "Power Platform Tools" extension
- Includes integrated CLI functionality

#### Verify Installation
```powershell
pac --version
```
Expected output should show version information.

### Step-by-Step CLI Installation

#### Step 1: Open PowerShell Session
1. Press `Win + X` and select "Windows PowerShell (Admin)" or "Terminal (Admin)"
2. Navigate to your working directory:
```powershell
cd C:\YourWorkingDirectory
```

#### Step 2: Authenticate with Power Platform
```powershell
# Replace <org> with your organization's URL segment
# Example: contoso.crm.dynamics.com
pac auth create --url "https://<org>.crm.dynamics.com" --name "myOrg"
```

**Authentication Process:**
1. A browser window will open automatically
2. Complete the interactive sign-in process
3. Use your System Administrator credentials
4. Return to PowerShell once authentication completes

**Verify Authentication:**
```powershell
pac auth list
```

#### Step 3: Locate and Prepare Template Files
```powershell
# Navigate to your template directory
cd "C:\<path-to-your-template>\power-pages-template"

# Verify template structure (optional)
dir
```

#### Step 4: Import Power Pages Template
```powershell
# Basic import command
pac pages import -p "C:\<path>\power-pages-template" -env "<environment-id>" -mv 2

# Alternative with verbose output
pac pages import --path "C:\<path>\power-pages-template" --environment "<environment-id>" --model-version 2 --verbose
```

**Parameter Explanations:**
- `-p` or `--path`: Path to your template folder
- `-env` or `--environment`: Target environment ID or URL
- `-mv` or `--model-version`: Data model version (use 2 for Enhanced Data Model)

**Get Help:**
```powershell
pac pages import --help
```

#### Step 5: Monitor Import Progress
1. The CLI will display real-time progress updates
2. Monitor for any error messages or warnings
3. Import typically takes 10-20 minutes for complete templates

**Reference Documentation:** [Microsoft Learn - PAC Pages Import](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/pages#example)

---

## Post-Installation Configuration

### Step 1: Configure Language Codes
**Important for multilingual support (English/French)**

#### For Enhanced Data Model Environments:
1. Navigate to [Power Apps](https://make.powerapps.com)
2. Select your environment
3. Go to **Dataverse** → **Tables**
4. Locate and open **Site Languages** table
5. Find the language records and update:
   - **English record**: Change Language Code to `en`
   - **French record**: Change Language Code to `fr`
6. Save all changes

### Step 2: Configure Website Templates
**Link your Power Pages website to the GCWeb template**

1. Navigate to **Power Pages** → **Websites**
2. Select your target website
3. Go to **Website Settings** or **Configuration**
4. Update the following template settings:
   - **Header Template**: Change to `GCWeb/App/Header`
   - **Footer Template**: Change to `GCWeb/App/Footer`
5. Save and publish changes

### Step 3: Test Your Installation
1. **Preview your website**: Click the preview button in Power Pages
2. **Verify template elements**:
   - Header displays correctly with GCWeb styling
   - Footer appears with appropriate branding
   - Language switching functions (if applicable)
   - Responsive design works across devices
3. **Check accessibility features**:
   - Screen reader compatibility
   - Keyboard navigation
   - Color contrast compliance

---

### Additional Resources
- [Power Pages Documentation](https://docs.microsoft.com/en-us/power-pages/)
- [WET-BOEW Framework Guide](https://wet-boew.github.io/wet-boew/index-en.html)
- [Power Platform CLI Reference](https://docs.microsoft.com/en-us/power-platform/developer/cli/)
- [Power Pages Community Forums](https://powerusers.microsoft.com/t5/Power-Pages/ct-p/PowerPages)

---

## Troubleshooting Guide
TBD