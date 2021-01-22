using System.Text.Json.Serialization;
using System.Collections.Generic;

namespace Domain
{
    public class UserInfo
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("claims")]
        public Dictionary<string, string> Claims { get; set; }
        
    }
}