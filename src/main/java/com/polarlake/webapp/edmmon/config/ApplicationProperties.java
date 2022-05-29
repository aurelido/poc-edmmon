package com.polarlake.webapp.edmmon.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Edmmon.
 * <p>
 * Properties are configured in the {@code application.yml} file.
 * See {@link com.polarlake.webapp.edmmon.config.WebappsProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {}
