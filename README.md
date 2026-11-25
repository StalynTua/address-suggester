# Address Suggester

A **React + TypeScript** address autocomplete and delivery-zone validation interface powered by the **Google Maps Places & Geocoding APIs** and **styled-components**.

## Features
- Real-time address suggestions using Google Maps Places `AutocompleteService`.
- Keyboard navigation (`ArrowUp`, `ArrowDown`, `Enter`) across prediction results.
- Geocoding lookup via Axios to extract postal codes and validate coverage against a configured NYC ZIP code delivery area.
- Confirmation modal feedback for in-area vs. out-of-area addresses.

## Tech Stack
- **Frontend:** React 18, TypeScript, styled-components
- **Maps & HTTP:** Google Maps Places API, Google Geocoding API, Axios
- **Testing:** React Testing Library, Jest

## Project Structure
```text
src/
├── components/
│   ├── input-autocomplete/   # Reusable Places autocomplete input with keyboard navigation
│   └── modal-confirm/        # Confirmation / out-of-area modal
├── pages/
│   └── address-suggester/    # Main address lookup & ZIP coverage flow
└── services/
    └── address-suggester/    # Geocoding API client
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure your Google Maps API key (requires **Places API** and **Geocoding API** enabled):
   ```bash
   cp .env.example .env
   # Set REACT_APP_GOOGLE_MAPS_API_KEY in .env
   ```

3. Run locally:
   ```bash
   npm start
   ```

4. Run tests:
   ```bash
   npm test
   ```
