import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutUsSection1 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_us_section_1s';
  info: {
    description: '';
    displayName: 'About Us Section 1';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image_1: Schema.Attribute.Media<'images'>;
    image_2: Schema.Attribute.Media<'images'>;
    info_card: Schema.Attribute.Component<'elements.info-card', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksAttractionsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_attractions_sections';
  info: {
    displayName: 'Attractions Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.hover-card', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksAwardsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_awards_sections';
  info: {
    displayName: 'Awards Section';
  };
  attributes: {
    awards: Schema.Attribute.Component<'elements.award-card', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksBlogHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_hero_sections';
  info: {
    description: '';
    displayName: 'Blog Hero Section';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    cover: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    read_time: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_sections';
  info: {
    description: '';
    displayName: 'Blog Section';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksBlogsListSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blogs_list_sections';
  info: {
    displayName: 'Blogs List Section';
  };
  attributes: {
    blog_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-category.blog-category'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksDealsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_deals_sections';
  info: {
    description: '';
    displayName: 'Deals Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    packages: Schema.Attribute.Relation<'oneToMany', 'api::package.package'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksDestinationHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_destination_hero_sections';
  info: {
    description: '';
    displayName: 'Destination Hero Section';
  };
  attributes: {
    background: Schema.Attribute.Component<'elements.cover', false>;
    cta_button: Schema.Attribute.String & Schema.Attribute.Required;
    cta_whatsapp: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    destination: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksExperienceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_experience_sections';
  info: {
    description: '';
    displayName: 'Experience Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'blocks.info-block', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_sections';
  info: {
    description: '';
    displayName: 'FAQ Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Component<'elements.faq-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFeaturedInSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_in_sections';
  info: {
    displayName: 'Featured In Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    featured: Schema.Attribute.Component<'elements.featured-in-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFooterCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footer_cta_sections';
  info: {
    displayName: 'Footer CTA Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    cta_call: Schema.Attribute.Component<'elements.link', false>;
    cta_chat: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    text_align: Schema.Attribute.Enumeration<['left', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFormSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_form_sections';
  info: {
    displayName: 'Form Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    heading_2: Schema.Attribute.String;
  };
}

export interface BlocksFormWithPointsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_form_with_points_sections';
  info: {
    displayName: 'Form With Points Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    point_1_description: Schema.Attribute.Text;
    point_1_title: Schema.Attribute.String;
    point_2_description: Schema.Attribute.Text;
    point_2_title: Schema.Attribute.String;
    point_3_description: Schema.Attribute.Text;
    point_3_title: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallery_sections';
  info: {
    displayName: 'Gallery Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    gallery: Schema.Attribute.Component<'elements.gallery-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksGlobarTourSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_globar_tour_sections';
  info: {
    displayName: 'Globar Tour Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tours: Schema.Attribute.Component<'elements.global-tour-card', true>;
  };
}

export interface BlocksGuidesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_guides_sections';
  info: {
    displayName: 'Guides Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    guides_list: Schema.Attribute.Component<'elements.guide-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_slides';
  info: {
    description: '';
    displayName: 'Hero Slide';
  };
  attributes: {
    attraction: Schema.Attribute.String;
    background: Schema.Attribute.Component<'elements.cover', false>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    destination: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHomeInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_info_sections';
  info: {
    description: '';
    displayName: 'Home Info Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    happy_clients: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    heading_2: Schema.Attribute.RichText;
    largeImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    smallImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    success_trips: Schema.Attribute.String;
  };
}

export interface BlocksHomePackageSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_package_sections';
  info: {
    description: '';
    displayName: 'Grid Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    hover_card: Schema.Attribute.Component<'elements.hover-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksImageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_hero_sections';
  info: {
    description: '';
    displayName: 'Image Hero Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    cta_button: Schema.Attribute.String & Schema.Attribute.Required;
    cta_whatsapp: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info Block';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    largeImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    smallImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface BlocksInternalLinkSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_internal_link_sections';
  info: {
    displayName: 'Internal Link Section';
    icon: 'bulletList';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksMapSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_map_sections';
  info: {
    displayName: 'Map Section';
  };
  attributes: {
    address_1: Schema.Attribute.Text & Schema.Attribute.Required;
    address_2: Schema.Attribute.Text & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    location_1: Schema.Attribute.String & Schema.Attribute.Required;
    location_2: Schema.Attribute.String & Schema.Attribute.Required;
    phone_1: Schema.Attribute.String & Schema.Attribute.Required;
    phone_2: Schema.Attribute.String & Schema.Attribute.Required;
    timing_1: Schema.Attribute.String & Schema.Attribute.Required;
    timing_2: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksOfficesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_offices_sections';
  info: {
    displayName: 'Offices Section';
  };
  attributes: {
    offices: Schema.Attribute.Component<'elements.office-chip', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksOurJourney extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_journeys';
  info: {
    displayName: 'Our Journey';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    journey_details: Schema.Attribute.Component<'elements.journey-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksPackageDayChart extends Struct.ComponentSchema {
  collectionName: 'components_blocks_package_day_charts';
  info: {
    displayName: 'Package Day Chart';
  };
  attributes: {
    day_chart_card: Schema.Attribute.Component<
      'elements.day-chart-card',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPackageGeneralInfo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_package_general_infos';
  info: {
    displayName: 'Package General Info';
  };
  attributes: {
    call_us_on: Schema.Attribute.String;
    duration: Schema.Attribute.Component<'elements.duration', false>;
    flights: Schema.Attribute.Enumeration<['With Flight', 'Without Flight']> &
      Schema.Attribute.Required;
    form_modal_phone: Schema.Attribute.String & Schema.Attribute.Required;
    form_modal_title: Schema.Attribute.String & Schema.Attribute.Required;
    from_city: Schema.Attribute.String;
    location_details: Schema.Attribute.Component<
      'elements.location-details',
      false
    >;
    more_about_trip: Schema.Attribute.Component<'elements.title-desc', false>;
    package_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::package-category.package-category'
    >;
    package_includes: Schema.Attribute.Component<
      'elements.label-with-icon',
      true
    >;
    pay_with: Schema.Attribute.Component<'elements.pay-with', false>;
    price_category: Schema.Attribute.String;
    price_details: Schema.Attribute.Component<'elements.price-details', false>;
    timing: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface BlocksPackageIncAndExc extends Struct.ComponentSchema {
  collectionName: 'components_blocks_package_inc_and_excs';
  info: {
    displayName: 'Package Inc & Exc';
  };
  attributes: {
    exclusion: Schema.Attribute.Component<'elements.inc-exc-card', false>;
    inclusion: Schema.Attribute.Component<'elements.inc-exc-card', false>;
  };
}

export interface BlocksPackageIncludesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_package_includes_sections';
  info: {
    description: '';
    displayName: 'Package Includes Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    trip_highlights: Schema.Attribute.Component<'elements.hover-card', true>;
  };
}

export interface BlocksPackageItinerary extends Struct.ComponentSchema {
  collectionName: 'components_blocks_package_itineraries';
  info: {
    displayName: 'Package Itinerary';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPackagePolicies extends Struct.ComponentSchema {
  collectionName: 'components_blocks_package_policies';
  info: {
    displayName: 'Package Policies';
  };
  attributes: {
    cancellation_policy: Schema.Attribute.Component<
      'elements.policy-card',
      false
    >;
    payment_policy: Schema.Attribute.Component<'elements.policy-card', false>;
    payment_policy_points: Schema.Attribute.Component<'elements.labels', true>;
    term_and_conditions: Schema.Attribute.Component<
      'elements.package-terms-and-condition',
      false
    >;
  };
}

export interface BlocksPdListingHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pd_listing_hero_sections';
  info: {
    description: '';
    displayName: 'PD Listing Hero Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    cta_button: Schema.Attribute.String & Schema.Attribute.Required;
    cta_whatsapp: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    slide_name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksReelsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_reels_sections';
  info: {
    displayName: 'Reels Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files'>;
    button: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    reels: Schema.Attribute.Media<'files' | 'videos', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksRouteSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_route_sections';
  info: {
    displayName: 'Route Section';
  };
  attributes: {
    routes: Schema.Attribute.Component<'elements.route-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksStaysSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stays_sections';
  info: {
    displayName: 'Stays Section';
  };
  attributes: {
    stays: Schema.Attribute.Component<'elements.hover-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTabSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tab_slider_sections';
  info: {
    description: '';
    displayName: 'Tab Slider Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    tabs: Schema.Attribute.Component<'elements.tab-slide', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<'elements.testimonial-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksVisaContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_visa_contents';
  info: {
    displayName: 'Visa Content';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface BlocksWhyUsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_us_sections';
  info: {
    description: '';
    displayName: 'Why us Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.why-us-card', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface ElementsAwardCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_award_cards';
  info: {
    description: '';
    displayName: 'Award Card';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.logo', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    contact: Schema.Attribute.Enumeration<['phone', 'email', 'location']>;
    contact_details: Schema.Attribute.String;
  };
}

export interface ElementsCover extends Struct.ComponentSchema {
  collectionName: 'components_elements_covers';
  info: {
    description: '';
    displayName: 'Cover';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['video', 'image']> &
      Schema.Attribute.Required;
  };
}

export interface ElementsDayChartCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_day_chart_cards';
  info: {
    displayName: 'Day Chart Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsDuration extends Struct.ComponentSchema {
  collectionName: 'components_elements_durations';
  info: {
    displayName: 'Duration';
  };
  attributes: {
    number_of_days: Schema.Attribute.Integer;
    number_of_nights: Schema.Attribute.Integer;
  };
}

export interface ElementsFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_cards';
  info: {
    description: '';
    displayName: 'FAQ Card';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeaturedInCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_featured_in_cards';
  info: {
    description: '';
    displayName: 'Featured In Card';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsGalleryCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_gallery_cards';
  info: {
    displayName: 'Gallery Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
  };
}

export interface ElementsGlobalTourCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_global_tour_cards';
  info: {
    description: '';
    displayName: 'Global Tour Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    layout: Schema.Attribute.Enumeration<['rectangle', 'square']>;
  };
}

export interface ElementsGuideCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_guide_cards';
  info: {
    description: '';
    displayName: 'Guide Card';
  };
  attributes: {
    expertise: Schema.Attribute.Component<'elements.labels', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    languages: Schema.Attribute.Component<'elements.labels', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    socials: Schema.Attribute.Component<'elements.logo-link', true>;
  };
}

export interface ElementsHoverCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_hover_cards';
  info: {
    description: '';
    displayName: 'Hover Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsIncExcCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_inc_exc_cards';
  info: {
    displayName: 'Inc Exc Card';
  };
  attributes: {
    points: Schema.Attribute.Component<'elements.labels', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_info_cards';
  info: {
    description: '';
    displayName: 'Info Card';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ElementsJourneyCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_journey_cards';
  info: {
    description: '';
    displayName: 'Journey Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLabelWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_label_with_icons';
  info: {
    displayName: 'Label with Icon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
  };
}

export interface ElementsLabels extends Struct.ComponentSchema {
  collectionName: 'components_elements_labels';
  info: {
    displayName: 'Labels';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLocationDetails extends Struct.ComponentSchema {
  collectionName: 'components_elements_location_details';
  info: {
    displayName: 'Location Details';
  };
  attributes: {
    from_location: Schema.Attribute.String;
    to_location: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
  };
}

export interface ElementsOfficeChip extends Struct.ComponentSchema {
  collectionName: 'components_elements_office_chips';
  info: {
    displayName: 'Office Chip';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsPackageCardBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_package_card_banners';
  info: {
    displayName: 'Package Card Banner';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsPackageTermsAndCondition
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_package_terms_and_conditions';
  info: {
    displayName: 'Package Terms & Condition';
  };
  attributes: {
    description: Schema.Attribute.Text;
    disclaimer: Schema.Attribute.Text;
    terms: Schema.Attribute.Component<'elements.inc-exc-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsPayWith extends Struct.ComponentSchema {
  collectionName: 'components_elements_pay_withs';
  info: {
    displayName: 'Pay With';
  };
  attributes: {
    tabby: Schema.Attribute.Boolean;
    tamara: Schema.Attribute.Boolean;
  };
}

export interface ElementsPolicyCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_policy_cards';
  info: {
    displayName: 'Policy Card';
  };
  attributes: {
    column_1: Schema.Attribute.Component<'elements.labels', true>;
    column_2: Schema.Attribute.Component<'elements.labels', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsPriceDetails extends Struct.ComponentSchema {
  collectionName: 'components_elements_price_details';
  info: {
    displayName: 'Price Details';
  };
  attributes: {
    base_price_per_adult: Schema.Attribute.String;
    discount_percentage: Schema.Attribute.Integer;
    offer_price_per_adult: Schema.Attribute.String;
    price_per_room: Schema.Attribute.String;
  };
}

export interface ElementsRouteCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_route_cards';
  info: {
    displayName: 'Route Card';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    google_map_link: Schema.Attribute.Component<'elements.link', false>;
    icon: Schema.Attribute.Component<'elements.logo', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTabSlide extends Struct.ComponentSchema {
  collectionName: 'components_elements_tab_slides';
  info: {
    description: '';
    displayName: 'Tab Slide';
  };
  attributes: {
    slides: Schema.Attribute.Component<'elements.hover-card', true>;
    tab_heading: Schema.Attribute.String & Schema.Attribute.Required;
    tab_value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    testimonial: Schema.Attribute.Text & Schema.Attribute.Required;
    user: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTitleDesc extends Struct.ComponentSchema {
  collectionName: 'components_elements_title_descs';
  info: {
    displayName: 'Title Desc';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsWhyUsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_why_us_cards';
  info: {
    description: '';
    displayName: 'Why Us Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'files' | 'images'>;
    image: Schema.Attribute.Media<'images'>;
    isImageOnly: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    contact_info: Schema.Attribute.Component<'elements.contact-info', true>;
    cookies: Schema.Attribute.Component<'elements.link', false>;
    copy: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    privacy_policy: Schema.Attribute.Component<'elements.link', false>;
    quick_links: Schema.Attribute.Component<'elements.link', true>;
    sitemap: Schema.Attribute.Component<'elements.link', false>;
    socials: Schema.Attribute.Component<'elements.logo-link', true>;
    support: Schema.Attribute.Component<'elements.link', true>;
    terms: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-us-section-1': BlocksAboutUsSection1;
      'blocks.attractions-section': BlocksAttractionsSection;
      'blocks.awards-section': BlocksAwardsSection;
      'blocks.blog-hero-section': BlocksBlogHeroSection;
      'blocks.blog-section': BlocksBlogSection;
      'blocks.blogs-list-section': BlocksBlogsListSection;
      'blocks.deals-section': BlocksDealsSection;
      'blocks.destination-hero-section': BlocksDestinationHeroSection;
      'blocks.experience-section': BlocksExperienceSection;
      'blocks.faq-section': BlocksFaqSection;
      'blocks.featured-in-section': BlocksFeaturedInSection;
      'blocks.footer-cta-section': BlocksFooterCtaSection;
      'blocks.form-section': BlocksFormSection;
      'blocks.form-with-points-section': BlocksFormWithPointsSection;
      'blocks.gallery-section': BlocksGallerySection;
      'blocks.globar-tour-section': BlocksGlobarTourSection;
      'blocks.guides-section': BlocksGuidesSection;
      'blocks.hero-slide': BlocksHeroSlide;
      'blocks.home-info-section': BlocksHomeInfoSection;
      'blocks.home-package-section': BlocksHomePackageSection;
      'blocks.image-hero-section': BlocksImageHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'blocks.internal-link-section': BlocksInternalLinkSection;
      'blocks.map-section': BlocksMapSection;
      'blocks.offices-section': BlocksOfficesSection;
      'blocks.our-journey': BlocksOurJourney;
      'blocks.package-day-chart': BlocksPackageDayChart;
      'blocks.package-general-info': BlocksPackageGeneralInfo;
      'blocks.package-inc-and-exc': BlocksPackageIncAndExc;
      'blocks.package-includes-section': BlocksPackageIncludesSection;
      'blocks.package-itinerary': BlocksPackageItinerary;
      'blocks.package-policies': BlocksPackagePolicies;
      'blocks.pd-listing-hero-section': BlocksPdListingHeroSection;
      'blocks.reels-section': BlocksReelsSection;
      'blocks.route-section': BlocksRouteSection;
      'blocks.stays-section': BlocksStaysSection;
      'blocks.tab-slider-section': BlocksTabSliderSection;
      'blocks.testimonial-section': BlocksTestimonialSection;
      'blocks.visa-content': BlocksVisaContent;
      'blocks.why-us-section': BlocksWhyUsSection;
      'elements.award-card': ElementsAwardCard;
      'elements.contact-info': ElementsContactInfo;
      'elements.cover': ElementsCover;
      'elements.day-chart-card': ElementsDayChartCard;
      'elements.duration': ElementsDuration;
      'elements.faq-card': ElementsFaqCard;
      'elements.featured-in-card': ElementsFeaturedInCard;
      'elements.gallery-card': ElementsGalleryCard;
      'elements.global-tour-card': ElementsGlobalTourCard;
      'elements.guide-card': ElementsGuideCard;
      'elements.hover-card': ElementsHoverCard;
      'elements.inc-exc-card': ElementsIncExcCard;
      'elements.info-card': ElementsInfoCard;
      'elements.journey-card': ElementsJourneyCard;
      'elements.label-with-icon': ElementsLabelWithIcon;
      'elements.labels': ElementsLabels;
      'elements.link': ElementsLink;
      'elements.location-details': ElementsLocationDetails;
      'elements.logo': ElementsLogo;
      'elements.logo-link': ElementsLogoLink;
      'elements.office-chip': ElementsOfficeChip;
      'elements.package-card-banner': ElementsPackageCardBanner;
      'elements.package-terms-and-condition': ElementsPackageTermsAndCondition;
      'elements.pay-with': ElementsPayWith;
      'elements.policy-card': ElementsPolicyCard;
      'elements.price-details': ElementsPriceDetails;
      'elements.route-card': ElementsRouteCard;
      'elements.tab-slide': ElementsTabSlide;
      'elements.testimonial-card': ElementsTestimonialCard;
      'elements.title-desc': ElementsTitleDesc;
      'elements.why-us-card': ElementsWhyUsCard;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
