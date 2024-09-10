// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package serverselftest.actions;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import serverselftest.proxies.TestResult;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class TestReadWriteInTempFolder extends CustomJavaAction<java.lang.Boolean>
{
	/** @deprecated use TestDetailObject.getMendixObject() instead. */
	@java.lang.Deprecated(forRemoval = true)
	private final IMendixObject __TestDetailObject;
	private final serverselftest.proxies.TestDetail TestDetailObject;

	public TestReadWriteInTempFolder(
		IContext context,
		IMendixObject _testDetailObject
	)
	{
		super(context);
		this.__TestDetailObject = _testDetailObject;
		this.TestDetailObject = _testDetailObject == null ? null : serverselftest.proxies.TestDetail.initialize(getContext(), _testDetailObject);
	}

	@java.lang.Override
	public java.lang.Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE

		File file = new File(Core.getConfiguration().getTempPath().getAbsolutePath() + "/" + Core.getXASId() + "_test.txt");

		String text = "Hello World";
		
		try {
			PrintWriter pOut = new PrintWriter(file);
			pOut.println(text);
			pOut.flush();
			pOut.close();
		}
		catch (Exception e) {
			throw new CoreException("Unable to Write the temp file because of error: " + e.getMessage(), e);
		}
		
		StringBuilder out = new StringBuilder();
		try {
			InputStream inputStream = new FileInputStream(file);
	        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));    
	        String line;
	        while ((line = reader.readLine()) != null) {
	            out.append(line);
	        }
	        reader.close();
		}
		catch (Exception e) {
			throw new CoreException("Unable to Read the temp file because of error: " + e.getMessage(), e);
		}
		
		file.delete();
        
        if( text.equals( out.toString()) ) 
        	this.TestDetailObject.setStatus(TestResult.Pass);
        else {
        	this.TestDetailObject.setErrorMessage("Failed to read/write from the temp folder, the read content does not match what was expected.\r\nExpected: " + text + " read: " + out.toString() );
        	this.TestDetailObject.setStatus(TestResult.Fail);
        }
		
		return true;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "TestReadWriteInTempFolder";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
