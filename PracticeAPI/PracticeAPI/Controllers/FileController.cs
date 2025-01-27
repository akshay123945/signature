using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracticeAPI.Model;

namespace PracticeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPost("upload")]
        public IActionResult UploadBase64([FromBody] Base64ImageModel model)
        {
            if (string.IsNullOrEmpty(model.Base64Image))
                return BadRequest("No image data provided.");

            // Decode Base64 string
            var base64Data = model.Base64Image.Substring(model.Base64Image.IndexOf(',') + 1); // Remove data:image/png;base64,
            var imageBytes = Convert.FromBase64String(base64Data);

            // Define a directory to save the file
            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "UploadedImages");
            if (!Directory.Exists(folderPath))
                Directory.CreateDirectory(folderPath);

            // Save the file
            var fileName = $"{Guid.NewGuid()}.png";
            var filePath = Path.Combine(folderPath, fileName);

            System.IO.File.WriteAllBytes(filePath, imageBytes);

            return Ok(new { FilePath = filePath });
        }

    }
}
