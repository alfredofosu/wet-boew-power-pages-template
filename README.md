...existing code...
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


# Power Pages — Install a Site / Enhanced Data Model

This document describes two approaches to set up WET-BOEW Power Pages Template: (A) upload an unmanaged solution via the UI, or (B) install the portal via CLI. 

## Enable the Power Pages Enhanced Data Model
Ensure the Enhanced Data Model is enabled in the Admin Center before installing.

## A. Upload a managed solution (web UI)
1. Download the "GCWeb Power Pages Template" unmanaged solution (.zip).  
2. Sign in to the Power Platform maker portal: https://make.powerapps.com with an admin or environment-maker account.  
3. Select the target environment (top-right).  
4. Navigate to Solutions → Import.  
5. Browse and select the unmanaged solution .zip → Next → Import.  
6. Wait for the import to complete and verify there are no errors.  


## B. CLI (PowerShell + PAC) - Recommended
Prerequisites:
- Install Power Platform CLI (pac) on Windows (e.g., via winget).  
- Have environment import/solution permissions (System Admin).

1. Open an elevated PowerShell session.
2. Authenticate with pac:
```
pac auth create --url "https://<org>.crm.dynamics.com" --name "myOrg"
# Complete interactive sign-in when prompted
```
3. Locate the "gcweb-power-pages-template" and import
```
# Example placeholders — verify flags with `pac paportal --help`
pac pages import -p "C:\<path>\power-pages-template" -env "<env>" -mv 2
```
[Reference](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/pages#example)