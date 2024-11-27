package com.kh.T3B1.api.model.vo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ApiKeys {
	 
	@Value("${midWeatherAPI_KEY}")
	private String midWeatherAPIKey;
	
	@Value("${shortWeatherAPI_KEY}")
	private String shortWeatherAPIKey;
	
	@Value("${areaAPI_KEY}")
	private String areaAPIKey;
	
	@Value("${certiInfoAPI_KEY")
	private String certiInfoAPIKey;
	
	@Value("${eventAPI_KEY")
	private String eventAPIKey;
	
	public String getMidWeatherAPIKey() {
		return midWeatherAPIKey;
	}
	
	public String getShortWeatherAPIKey() {
		return shortWeatherAPIKey;
	}
	
	public String getAreaAPIKey() {
        return areaAPIKey;
    }
	
	public String getCertiInfoAPIKey() {
		return certiInfoAPIKey;
	}
	
	public String getEventAPIKey() {
		return eventAPIKey;
	}
}
